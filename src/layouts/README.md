# src/layouts/

Page shell templates. Every page uses one of these.

## Planned layouts

| File | Used by |
|---|---|
| `Base.astro` | All pages — `<html>`, sticky header, footer, global styles, meta tags |
| `ProjectDetail.astro` | Project pages — extends Base, adds gallery + prev/next structure |

## Base layout responsibilities

- `<html lang="de">` — Austrian German
- `<head>`: title, meta description, Open Graph, Brevia font link
- Sticky `Header` component
- `<slot />` for page content
- `Footer` component

## Notes

- No layout should introduce color
- No layout should introduce decorative elements (only Header/Footer components do, via the bottle)
- Max content width (~1200px) is set here, not per-component
