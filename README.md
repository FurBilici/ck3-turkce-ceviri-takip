# CK3AI Public Progress Site

Public, Vercel-compatible Next.js site for CK3AI translation progress.

## Data

The site reads static metadata from:

```text
public/data/status.json
```

Regenerate it from the repo root:

```bash
python3 scripts/export_public_translation_status.py
```

The exporter reads Studio `session.json`, `batch.json`, and `files.json` files, then writes only public progress metadata. It does not publish local absolute paths, API keys, prompt text, raw AI output, provider usage detail, or full translation content.

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
- `/mods/[id]`: mod detail, file progress table, Steam Workshop link
- `/about`: project method and safety notes
