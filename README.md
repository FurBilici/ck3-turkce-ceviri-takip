# CK3 Türkçe Çeviri Takip Merkezi

Public, Vercel-compatible Next.js site for Crusader Kings III Turkish mod translation progress.

## Data

The site reads static metadata from:

```text
public/data/status.json
```

Regenerate it from the repo root after selecting public mods in the local CK3AI Hub admin page:

```bash
python3 scripts/export_public_translation_status.py
```

The exporter reads Studio `session.json`, `batch.json`, `files.json`, and optional mod metadata from:

```text
projects/ck3/public_mod_registry.json
```

Registry entries map Steam Workshop IDs to public names, short names, descriptions, categories, Steam Workshop URLs, display priorities, public notes, optional status overrides, and file visibility. Only entries with `publish: true` are exported. Missing registry entries and `publish: false` entries are not published by default. Use `--include-unpublished-debug` only for local debugging.

Local publishing workflow:

1. Open the CK3AI dashboard.
2. Go to `/public-admin`.
3. Select the mods to publish.
4. Fill metadata.
5. Generate public status.
6. Copy `apps/ck3ai-public-site/public/data/status.json` to the public repo and push.

The exporter writes only public progress metadata. It does not publish local absolute paths, API keys, prompt text, raw AI output, provider usage detail, or full translation content. Mods with token errors are exported as `needs_review` even when progress is 100%.

## Local Development

```bash
cd apps/ck3ai-public-site
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Pages

- `/`: summary cards and mod list
- `/mods/[id]`: mod detail, file progress table, token warnings, Steam Workshop link
- `/about`: Turkish project method and safety notes
