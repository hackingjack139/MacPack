#!/usr/bin/env node
// Downloads every icon named in app.js's iconMap into icons/, so the page does
// not depend on a CDN at run time.
//
//   node scripts/fetch-icons.mjs
//
// Re-run after adding an app or bumping iconVersion. Icons that no longer exist
// upstream are reported and left out, matching how the app behaves anyway: an
// app with no icon falls back to its initials.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "app.js"), "utf8");

const version = source.match(/const iconVersion = "([^"]+)"/)?.[1];
if (!version) {
  console.error("Could not read iconVersion from app.js");
  process.exit(2);
}

const mapMatch = source.match(/const iconMap = \{[\s\S]*?\n\};/);
if (!mapMatch) {
  console.error("Could not read iconMap from app.js");
  process.exit(2);
}
const iconMap = eval(`(${mapMatch[0].replace("const iconMap =", "").replace(/;$/, "")})`);

const wanted = [...new Set(Object.values(iconMap))];
const dir = join(root, "icons");
mkdirSync(dir, { recursive: true });

const results = await Promise.all(
  wanted.map(async (slug) => {
    const url = `https://cdn.jsdelivr.net/npm/simple-icons@${version}/icons/${slug}.svg`;
    try {
      const res = await fetch(url);
      if (!res.ok) return { slug, ok: false, status: res.status };
      const svg = await res.text();
      if (!svg.trimStart().startsWith("<svg")) return { slug, ok: false, status: "not an svg" };
      writeFileSync(join(dir, `${slug}.svg`), svg.trimEnd() + "\n");
      return { slug, ok: true, bytes: svg.length };
    } catch (error) {
      return { slug, ok: false, status: error.message };
    }
  }),
);

const saved = results.filter((r) => r.ok);
const failed = results.filter((r) => !r.ok);

// Drop any file that is no longer mapped, so the directory cannot accumulate
// icons for apps that have since been removed.
const keep = new Set(saved.map((r) => `${r.slug}.svg`));
let removed = 0;
for (const file of readdirSync(dir)) {
  if (file.endsWith(".svg") && !keep.has(file)) {
    unlinkSync(join(dir, file));
    removed += 1;
  }
}

const bytes = saved.reduce((sum, r) => sum + r.bytes, 0);
console.log(`Saved ${saved.length} icons from simple-icons@${version} (${(bytes / 1024).toFixed(1)} KB).`);
if (removed) console.log(`Removed ${removed} unmapped icon file(s).`);
if (failed.length) {
  console.error(`\n${failed.length} icon(s) unavailable upstream:`);
  for (const f of failed) console.error(`  - ${f.slug} (${f.status})`);
  process.exit(1);
}
