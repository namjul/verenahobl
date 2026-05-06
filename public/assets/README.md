# public/assets/

Static files served directly. Nothing here gets processed by Astro.

## Structure (target)

```
assets/
├── verenahobl_logo.webp     Hand-lettered logo — primary brand mark
├── flasche.webp             Bottle mascot — footer, 404 page
└── projekte/
    ├── strandbar-herrmann-jubilaeum/
    │   ├── 01.jpg
    │   ├── 02.jpg
    │   ├── 03.jpg
    │   └── 04.jpg
    ├── goldschmiedatelier/
    │   └── ...
    └── ... (one folder per project, named by slug)
```

## Image status

Brand assets (`verenahobl_logo.webp`, `flasche.webp`) currently at repo root — move here before build.

Project images: not yet collected. Must be manually downloaded from verenahobl.at.
See `src/content/projekte/README.md` for per-project image counts and checklist.

## Naming convention

- Project folders: exact slug from `src/content/projekte/` filename
- Images: zero-padded numbers (`01.jpg`, `02.jpg`) — order matches display order in gallery
- Animated files: keep original format (GIF) — Astro's Image component won't process GIFs
