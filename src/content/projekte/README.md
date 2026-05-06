# src/content/projekte/

One markdown file per project. 19 total.

## Frontmatter schema

```yaml
---
title: string
slug: string
year: string            # "2025" or "Since 2020"
category: string        # wandmalerei | illustration | kalligrafie | hochzeit | logo | skulpturen | leinwand
location: string        # optional
description: string     # 1–3 sentences max — brand voice rule
images: string[]        # paths relative to public/assets/projekte/[slug]/
credits:                # optional
  - label: string
    url: string
prev: string            # slug of previous project
next: string            # slug of next project
---
```

## Copy rules (brand voice)

- 1–3 sentences maximum per description
- Facts first — what, where, when
- No adjectives stacked
- German, no marketing language
- See `WEBSITE_SPEC.md` §3.2 for full rules

## Project checklist

| # | Slug | .md | Images |
|---|---|---|---|
| 1 | strandbar-herrmann-jubilaeum | ☐ | ☐ 4 images |
| 2 | goldschmiedatelier | ☐ | ☐ 4 images |
| 3 | gurkerl | ☐ | ☐ 5 images |
| 4 | gesichter-in-linien | ☐ | ☐ 7 images |
| 5 | three-legends | ☐ | ☐ 5 images |
| 6 | scheune | ☐ | ☐ 4 images |
| 7 | graffiti-portrait | ☐ | ☐ 4 images |
| 8 | the-underdogbar | ☐ | ☐ 7 items (1 GIF + 6 images) |
| 9 | strandbar-herrmann | ☐ | ☐ 9 images |
| 10 | graffiti-dschungel | ☐ | ☐ 4 images |
| 11 | kalligrafie | ☐ | ☐ 6 images |
| 12 | familien-portraits | ☐ | ☐ 4 images |
| 13 | walter-white | ☐ | ☐ 3 images |
| 14 | alpines-hochzeitsdesign | ☐ | ☐ 6 images |
| 15 | playground | ☐ | ☐ 5 items (2 GIFs + 3 images) |
| 16 | paerchen-illustration | ☐ | ☐ 1 image |
| 17 | cartoon | ☐ | ☐ 6 images |
| 18 | miniatur-schaedel | ☐ | ☐ 4 images |
| 19 | schwarz-weiss-portraet | ☐ | ☐ 3 images |

Full content for each project (descriptions, credits, prev/next) in `WEBSITE_SPEC.md` §8.

## Order is editorial

Prev/next is manually set in frontmatter. The sequence is a curatorial statement — not alphabetical, not chronological. See `WEBSITE_SPEC.md` §13.3 point 1.
