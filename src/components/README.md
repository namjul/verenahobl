# src/components/

UI building blocks. Each component owns one responsibility.

## Planned components

| Component | Purpose | PRD ref |
|---|---|---|
| `Header.astro` | Sticky header — logo left, nav center | §6.6 |
| `Footer.astro` | Copyright + bottle mascot + Impressum link | §6.6 |
| `ProjectGrid.astro` | Full project grid, receives filtered list | §6.1 |
| `ProjectCard.astro` | Single card: thumbnail + title only | §6.1 |
| `CategoryFilter.astro` | Text tag row above grid — client-side filter | §6.1 |
| `ImageGallery.astro` | Lightbox-capable gallery for project detail | §6.2 |
| `PrevNext.astro` | Zurück / Weiter project navigation | §6.2 |
| `AvailabilitySignal.astro` | "Verfügbar ab [month]" on Profil | §6.3 |
| `ProcessSection.astro` | Collapsible Entstehung section per project | §6.2 |

## Rules

- No color in any component — all color comes from images
- No external icon libraries — inline SVG or nothing
- No rounding, no shadows (`--radius-*: 0`, `--depth: 0` in tokens)
- Any decorative element must match the hand-drawn register of the logo and bottle
- Category tags: `uppercase letter-spacing` via CSS only — never an image
- Bottle (`flasche.webp`) is the only decorative element permitted in chrome
