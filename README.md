# CK3 Türkçe Çeviri Takip Merkezi

Public, Vercel-compatible Next.js site for Crusader Kings III Turkish mod translation progress.

## Data

The site reads static metadata from:

```text
public/data/status.json
```

Regenerate it from the repo root:

```bash
python3 scripts/export_public_translation_status.py
```

The exporter reads Studio `session.json`, `batch.json`, `files.json`, and optional mod metadata from:

```text
projects/ck3/public_mod_registry.json
```

Registry entries map Steam Workshop IDs to public names, short names, descriptions, categories, Steam Workshop URLs, and display priorities. If the registry is missing, export still works and unknown mods fall back to `Workshop <id>`.

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
