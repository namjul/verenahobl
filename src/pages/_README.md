# src/pages/

Astro file-based routing. Each file is a route.

## Routes

| File | Route | Notes |
|---|---|---|
| `index.astro` | `/` | Project grid — homepage |
| `projekte/[slug].astro` | `/projekte/[slug]` | Dynamic project detail page |
| `profil.astro` | `/profil` | About + availability + contact |
| `impressum.astro` | `/impressum` | Legal — placeholder text until Verena provides copy |
| `404.astro` | `404` | Bottle mascot + link home |

## Notes

- `/projekte` redirects to `/` — same page, both routes valid
- Profil page content lives inline here (no separate content collection needed)
- Impressum: ship with placeholder, replace before going live at verenahobl.at
