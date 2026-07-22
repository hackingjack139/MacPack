# MacPack

Mac app setup in one flow.

## Vision

MacPack is a Ninite-style installer for macOS:

- Pick apps once
- Generate one install flow
- Set up fresh Mac in minutes

## MVP

First version focuses on three things:

1. Curated app catalog
2. Batch install command generation
3. Clean onboarding flow for fresh Macs

## Product Shape

- Frontend: fast single-page app
- Backend later: app catalog, install recipes, analytics
- Installer engine: Homebrew-first, with App Store and direct-download fallbacks

## Near-Term Roadmap

1. Validate brand and landing page
2. Build selection flow
3. Add install-script generation
4. Add categories, presets, and saved packs
5. Add signed desktop wrapper or CLI

## Current Prototype

Open [index.html](index.html) in browser to view first concept.

## Install Kinds

Most apps come from Homebrew, but not everything is there. Each catalog entry
declares how it installs:

| Kind | Used for | Generated step |
| --- | --- | --- |
| `cask` | Most Mac apps | `brew install --cask` |
| `formula` | Command-line tools | `brew install` |
| `mas` | App Store only, e.g. Xcode, Things 3 | `mas install <id>` |
| `download` | Neither, e.g. Ice | `curl`, then unpack to /Applications |

The App Store and download steps are written to survive a failure: a missing
App Store sign-in or a dead download reports itself and the rest of the pack
still installs, rather than `set -euo pipefail` taking the whole run down.

## Checking the Catalog

The catalog hardcodes Homebrew package names, and Homebrew renames things.
A stale name still installs today, because Homebrew follows the old alias,
then fails once that alias is dropped, which takes the whole script down
with it under `set -euo pipefail`.

    node scripts/check-catalog.mjs

Verifies every Homebrew package still resolves under its current token and is
not deprecated, that every App Store id still exists (via Apple's public lookup
service, so no `mas` install is needed) and every download url still responds,
and that presets, the default selection, and icon mappings only point at apps
that exist. Exits 0 when clean, 1 on catalog problems, 2 if
Homebrew is unavailable. Worth running before a release.

## Icons

App icons ship in `icons/`, taken from simple-icons at the release recorded in
`iconVersion`. They are vendored rather than loaded from a CDN because setting
up a Mac is exactly when the network is least reliable, and a failed icon
request used to leave the whole catalog showing initials.

    node scripts/fetch-icons.mjs

Re-downloads them. Run it after adding an app or bumping `iconVersion`. Apps
with no mapping fall back to their initials by design: simple-icons drops brand
marks on trademark request, so a fair few Mac apps have no icon upstream.

## License

MIT. See [LICENSE](LICENSE).
