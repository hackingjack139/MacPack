#!/usr/bin/env node
// Validates the app catalog in app.js.
//
//   node scripts/check-catalog.mjs
//
// Two kinds of check:
//
//   1. Internal — presets and the default selection only reference slugs that
//      exist, no duplicate slugs, no icon mappings pointing at dead slugs.
//   2. Upstream — every Homebrew package name still resolves, is spelled with
//      its current token, and is not deprecated or disabled.
//
// Homebrew silently follows renamed tokens, so a stale name installs fine today
// and fails only once the alias is dropped. That failure is invisible until it
// isn't, which is what this check exists to catch. Exits non-zero on any finding
// so it can gate a commit.

import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "app.js"), "utf8");

// app.js is a browser script that touches `document` on load, so it can't be
// imported here. Pull the literals out instead.
function extract(name, open, close) {
  const pattern = new RegExp(`const ${name} = \\${open}[\\s\\S]*?\\n\\${close};`);
  const match = source.match(pattern);
  if (!match) {
    throw new Error(
      `Could not find "const ${name}" in app.js. If it was renamed or reformatted, update this script.`,
    );
  }
  return eval(`(${match[0].replace(`const ${name} =`, "").replace(/;$/, "")})`);
}

const apps = extract("apps", "[", "]");
const presets = extract("presets", "[", "]");
const defaultSelection = extract("defaultSelection", "[", "]");
const iconMap = extract("iconMap", "{", "}");

const problems = [];
const slugs = new Set(apps.map((app) => app.slug));

// --- internal consistency -------------------------------------------------

const duplicates = apps
  .map((app) => app.slug)
  .filter((slug, index, all) => all.indexOf(slug) !== index);
for (const slug of new Set(duplicates)) {
  problems.push(`duplicate slug in catalog: ${slug}`);
}

for (const preset of presets) {
  for (const slug of preset.apps) {
    if (!slugs.has(slug)) {
      problems.push(`preset "${preset.name}" references unknown slug: ${slug}`);
    }
  }
}

for (const slug of defaultSelection) {
  if (!slugs.has(slug)) {
    problems.push(`defaultSelection references unknown slug: ${slug}`);
  }
}

for (const slug of Object.keys(iconMap)) {
  if (!slugs.has(slug)) {
    problems.push(`iconMap has an entry for unknown slug: ${slug}`);
  }
}

// --- upstream icons (opt-in: --icons) -------------------------------------

// simple-icons drops brand icons on trademark request, so a mapping that works
// today can 404 later. A dead entry still renders (the UI falls back to
// initials) but costs a request that can never succeed, so it is worth knowing.
if (process.argv.includes("--icons")) {
  const version = source.match(/const iconVersion = "([^"]+)"/)?.[1];
  if (!version) {
    problems.push("could not read iconVersion from app.js");
  } else {
    const entries = Object.entries(iconMap);
    const results = await Promise.all(
      entries.map(async ([slug, icon]) => {
        const url = `https://cdn.jsdelivr.net/npm/simple-icons@${version}/icons/${icon}.svg`;
        try {
          const res = await fetch(url, { method: "HEAD" });
          return { slug, icon, ok: res.ok };
        } catch {
          return { slug, icon, ok: null }; // network trouble, not a catalog fault
        }
      }),
    );

    if (results.some((r) => r.ok === null)) {
      console.error("Warning: could not reach the icon CDN; skipping icon checks.\n");
    } else {
      for (const { slug, icon, ok } of results.filter((r) => !r.ok)) {
        problems.push(`icon not found: ${slug} -> ${icon} (simple-icons@${version})`);
      }
    }
  }
}

// --- upstream Homebrew ----------------------------------------------------

// Homebrew aborts the whole batch when any one name is unknown, naming the
// offender on stderr and emitting no JSON. Peel those off and retry so one bad
// entry doesn't blind us to the rest of the catalog.
const UNAVAILABLE = [
  /Cask '(.+?)' is unavailable/g,
  /No available formula with the name "(.+?)"/g,
  /No available cask with the name "(.+?)"/g,
];

function brewInfo(kind, names) {
  const missing = [];
  let remaining = [...names];

  while (remaining.length) {
    try {
      const raw = execFileSync("brew", ["info", `--${kind}`, "--json=v2", ...remaining], {
        encoding: "utf8",
        maxBuffer: 64 * 1024 * 1024,
        stdio: ["ignore", "pipe", "pipe"],
      });
      const key = kind === "cask" ? "casks" : "formulae";
      return { found: JSON.parse(raw)[key] ?? [], missing };
    } catch (error) {
      if (error.code === "ENOENT") {
        throw error; // brew itself is absent — caller reports it
      }

      const stderr = String(error.stderr ?? "");
      const named = UNAVAILABLE.flatMap((pattern) => [...stderr.matchAll(pattern)].map((m) => m[1]));
      const fresh = named.filter((name) => remaining.includes(name));

      if (!fresh.length) {
        throw error; // failed for some other reason; don't loop forever
      }

      missing.push(...fresh);
      remaining = remaining.filter((name) => !fresh.includes(name));
    }
  }

  return { found: [], missing };
}

const casks = apps.filter((a) => a.install.kind === "cask").map((a) => a.install.package);
const formulae = apps.filter((a) => a.install.kind === "formula").map((a) => a.install.package);

const unknownKinds = apps.filter((a) => !["cask", "formula"].includes(a.install.kind));
for (const app of unknownKinds) {
  problems.push(`${app.slug}: unsupported install kind "${app.install.kind}"`);
}

let checked = 0;
try {
  for (const [kind, names] of [
    ["cask", casks],
    ["formula", formulae],
  ]) {
    const { found, missing } = brewInfo(kind, names);
    const tokens = new Set(found.map((item) => item.token ?? item.name));
    checked += names.length;

    for (const name of missing) {
      problems.push(`${kind} not found: ${name}`);
    }

    for (const name of names) {
      if (missing.includes(name) || tokens.has(name)) {
        continue;
      }
      // Homebrew resolved the query but returned a different token, meaning our
      // name is an alias it is currently redirecting.
      const target = found.find((item) => (item.old_tokens ?? []).includes(name));
      problems.push(
        target
          ? `stale ${kind} name: ${name} -> ${target.token ?? target.name}`
          : `${kind} not found: ${name}`,
      );
    }

    for (const item of found) {
      const token = item.token ?? item.name;
      if (item.disabled) {
        problems.push(`${kind} disabled: ${token} (${item.disable_reason ?? "no reason given"})`);
      } else if (item.deprecated) {
        problems.push(
          `${kind} deprecated: ${token} (${item.deprecation_reason ?? "no reason given"})`,
        );
      }
    }
  }
} catch (error) {
  console.error("Could not query Homebrew. Is brew installed and on PATH?");
  console.error(String(error.message).split("\n")[0]);
  process.exit(2);
}

// --- report ---------------------------------------------------------------

if (problems.length) {
  console.error(`${problems.length} problem(s) in catalog:\n`);
  for (const problem of problems) {
    console.error(`  - ${problem}`);
  }
  console.error("");
  process.exit(1);
}

console.log(
  `Catalog OK: ${apps.length} apps, ${checked} Homebrew packages resolve to current tokens.`,
);
