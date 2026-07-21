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
- Installer engine later: Homebrew-first with direct-download fallback

## Near-Term Roadmap

1. Validate brand and landing page
2. Build selection flow
3. Add install-script generation
4. Add categories, presets, and saved packs
5. Add signed desktop wrapper or CLI

## Current Prototype

Open [index.html](index.html) in browser to view first concept.

## Checking the Catalog

The catalog hardcodes Homebrew package names, and Homebrew renames things.
A stale name still installs today, because Homebrew follows the old alias,
then fails once that alias is dropped, which takes the whole script down
with it under `set -euo pipefail`.

    node scripts/check-catalog.mjs

Verifies every package still resolves under its current token and is not
deprecated, and that presets, the default selection, and icon mappings only
point at apps that exist. Exits 0 when clean, 1 on catalog problems, 2 if
Homebrew is unavailable. Worth running before a release.

Add `--icons` to also check every icon against the simple-icons CDN. Those
rot too: simple-icons drops brand marks on trademark request, and a dead
mapping costs a request that can never succeed. Apps with no mapping fall
back to initials by design, which is why this is opt-in rather than default.

## License

MIT. See [LICENSE](LICENSE).
