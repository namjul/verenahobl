# src/content/

All site content as markdown files with YAML frontmatter. Managed via Keystatic CMS.

## Collections

| Folder | Collection | Count |
|---|---|---|
| `projekte/` | Portfolio projects | 19 |

## Profil page

Single page — content lives directly in `src/pages/profil.astro` for now. No collection needed until it grows.

## Keystatic

The CMS schema (`keystatic.config.ts`) mirrors the frontmatter shape defined in `src/content/config.ts`. Keep both in sync when adding fields.

Admin runs at `/keystatic` locally via `astro dev`. On Vercel it runs as a hosted admin — Verena edits here without touching code.
