# AGENTS.md — Routing Guide

> Read this before touching anything. Tells you what's where and where to go for a given task.

## Reference documents (read these first)

| File | What it is |
|---|---|
| `WEBSITE_SPEC.md` | Full site reference — content, brand, design system, adjacent possible, closed doors, negative space |
| `PRD.md` | Product requirements — pages, features, decisions, open questions |
| `AGENTS.md` | This file |

## Stack (decided, not yet built)

- **Framework:** Astro
- **CMS:** Keystatic (admin at `/keystatic`, Git-based)
- **Styling:** Tailwind CSS 4 + DaisyUI 5 (token-overridden — see `src/styles/`)
- **Hosting:** Vercel
- **Font:** Brevia
- **Forms:** none — mailto: links only

## Folder map

```
public/
└── assets/          Brand assets + all project images — see README inside

src/
├── components/      UI components — see README inside
├── content/         Markdown content files (Keystatic-managed) — see README inside
│   └── projekte/    One .md per project (19 total) — see README inside
├── layouts/         Page shell templates — see README inside
├── pages/           Astro routes — see README inside
│   └── projekte/    Dynamic [slug].astro route lives here
└── styles/          Global CSS + DaisyUI token overrides — see README inside
```

## Task routing

| I need to... | Go to |
|---|---|
| Edit project text or metadata | `src/content/projekte/[slug].md` |
| Add a new project | `src/content/projekte/` — copy existing file |
| Add/edit a UI component | `src/components/` |
| Change page structure | `src/layouts/` |
| Change a route | `src/pages/` |
| Change colors, font, spacing | `src/styles/global.css` — tokens at top |
| Add a project image | `public/assets/projekte/[slug]/` |
| Check what's built vs planned | `PRD.md` |
| Check brand rules before designing | `WEBSITE_SPEC.md` §3 |

## Non-negotiable design rules

- Logo = `public/assets/verenahobl_logo.webp` always — never text or CSS
- UI palette: white + near-black only — no color in chrome under any circumstance
- Bottle = `public/assets/flasche.webp` — only permitted decorative UI element
- Font: Brevia — one typeface, no exceptions
- Category tags: uppercase + letter-spaced — the only typographic accent
- Copy: German, sparse, facts first — see `WEBSITE_SPEC.md` §3.2

## Brand assets (in repo)

| File | Status |
|---|---|
| `verenahobl_logo.webp` | ✓ root — move to `public/assets/` before build |
| `flasche.webp` | ✓ root — move to `public/assets/` before build |
