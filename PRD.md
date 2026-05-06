# Product Requirements Document
## verenahobl.at — Rebuild

**Version:** 0.2
**Date:** 2026-05-06
**Status:** Draft — open questions resolved

---

## 1. Overview

Rebuild Verena Hobl's design portfolio from Squarespace to a custom static site. The new site must faithfully carry the existing brand identity — hand-drawn, minimal, work-first — while adding a small set of high-impact features that open business and discovery opportunities the current site forecloses.

The site is not a product. It is a curated gallery with a commission pipeline. Every decision should serve those two things.

---

## 2. Goals

- Replicate the current site's content and identity with full fidelity
- Remove Squarespace dependency and platform lock-in
- Add category filtering, email-based commission contact, and availability signal in v1
- Give Verena a CMS she can use without touching code
- Deploy to Vercel, eventually live at verenahobl.at

---

## 3. Non-Goals (v1)

- Shop / e-commerce (cart present on old site but inactive — drop for now)
- Dark mode (requires alternate logo/bottle assets not yet confirmed)
- English language layer
- Map view, timeline view, before/after slider
- Blog / journal
- User accounts or authentication of any kind

---

## 4. Users

### Primary: prospective clients
Arrive via Instagram (@verenahobl) or word of mouth. Looking to commission mural work, portraits, or wedding design. Need to see the work, understand the range, and find a way to make contact. Time on site is short — the work must convince before a word is read.

### Secondary: Verena herself
Needs to add new projects and update availability without developer help. Low technical tolerance for the CMS — it must be obvious.

### Tertiary: curious browsers
No commercial intent. Arrive via search or referral. May become future clients or send referrals.

---

## 5. Pages

| Route | Page | Priority |
|---|---|---|
| `/` | Project grid (homepage) | P0 |
| `/projekte/[slug]` | Project detail | P0 |
| `/profil` | About + contact + availability | P0 |
| `/impressum` | Legal notice + privacy policy | P0 (legal requirement) |
| `404` | Not found — bottle mascot | P1 |

---

## 6. Functional Requirements

### 6.1 Project Grid (Homepage)

- Display all projects as image cards in a grid
- Each card: thumbnail + title only — no year, category, or description
- Cards link to project detail page
- **Category filter:** row of text tags above grid — `Alle · Wandmalerei · Illustration · Hochzeit · Kalligrafie · Skulpturen · Logo`. Filter in place, no page reload.
- Grid order is manually curated (defined in content, not alphabetical or by date)
- No pagination — all 19 projects visible at once

### 6.2 Project Detail Page

- Title (h1), year, category tag (uppercase, letter-spaced)
- Description text (1–3 sentences)
- Image gallery with lightbox / fullscreen view
- Credits section (optional, project-specific, with links)
- **Process section (Entstehung):** collapsible — hidden by default, expands on click. Optional per project — only shown if content exists.
- Prev / Next navigation (Zurück / Weiter) with adjacent project title
- No sidebar, no related projects in v1

### 6.3 Profil Page

- Hero image (mural portrait — to be provided by Verena)
- Bio quote + short paragraph
- "What I do best" services list
- Client list
- **Availability signal:** "Verfügbar ab [month]" or "Aktuell verfügbar" — CMS-editable field, shown prominently
- Contact: `mailto:verena.hobl@gmail.com` link + Instagram link
- No form — email link only. Friction is intentional (see WEBSITE_SPEC.md §13.3 point 3).

### 6.4 Commission Contact

- Entry point: prominent email link on Profil page and at the end of each project detail page
- Renders as styled `mailto:` link — no backend, no form, no third-party service
- Label: "Anfrage stellen" or similar — short, German, no marketing language

### 6.5 404 Page

- Bottle mascot (`flasche.webp`) centered
- Short line of copy (German)
- Link back to Projekte

### 6.6 Navigation

- Header: logo (left) · Projekte + Profil (center) · nothing on right (cart dropped)
- Header behavior: sticky — stays visible on scroll
- Mobile: hamburger toggle, full-screen or slide menu
- Footer: copyright · bottle mascot · Impressum | Datenschutz link
- Accessibility: skip-to-content link, keyboard navigable

---

## 7. Design Requirements

### 7.1 Brand

See `WEBSITE_SPEC.md` §3 for full brand voice and identity. Summary:

- The logo is a hand-lettered image — never reproduced in text or CSS
- Reduction is the identity — fewest possible elements
- The bottle mascot (`flasche.webp`) is the only decorative element permitted in UI chrome
- Project images supply all color — UI never competes
- Copy: sparse, German, facts first, no marketing language

### 7.2 Design Tokens (DaisyUI override)

All DaisyUI components inherit these. The site will not look like DaisyUI.

```css
@plugin "daisyui/theme" {
  name: "verena";
  default: true;

  --color-base-100: oklch(100% 0 0);        /* white */
  --color-base-200: oklch(97% 0 0);         /* near-white for subtle surface */
  --color-base-300: oklch(93% 0 0);
  --color-base-content: oklch(10% 0 0);     /* near-black text */

  --color-primary: oklch(10% 0 0);          /* same as text — no brand color */
  --color-primary-content: oklch(100% 0 0);

  --radius-box: 0;                          /* no rounding anywhere */
  --radius-field: 0;
  --radius-selector: 0;

  --depth: 0;                               /* no shadows or 3D effects */
  --noise: 0;                               /* no grain */
  --border: 1px;
}
```

### 7.3 Typography

- Font: **Brevia** — one typeface throughout
- Weights: regular for body/nav, no bold except project titles
- Category tags: `text-transform: uppercase; letter-spacing: 0.15em` — the only typographic accent
- Logo: always `verenahobl_logo.webp` — never font-rendered

### 7.4 Layout

- Centered content, generous whitespace
- Grid: uniform columns
- Max content width: ~1200px (confirm)
- Fully responsive — mobile first
- No full-bleed elements except project images in detail pages

### 7.5 Interaction Rules

- No color shifts on hover — opacity or underline only
- Lightbox: simple, keyboard navigable, close on click outside or Escape
- Category filter: instant, no animation required
- Commission contact: `mailto:` link only — no form
- Transitions: minimal — this is a still site, not an animated one

---

## 8. Content Requirements

### 8.1 Existing content (documented in WEBSITE_SPEC.md §8)

All 19 project titles, slugs, years, categories, descriptions, image counts, credits, and prev/next order are fully documented. Ready to be scaffolded into markdown files.

### 8.2 To collect from Verena before launch

- [ ] All project images (19 sets — counts in WEBSITE_SPEC.md §8)
- [ ] Profil hero image (Walter White / Surfhouse mural)
- [ ] Animated GIF for The Underdogbar project
- [ ] 2 animated GIFs for Playground project
- [ ] Impressum + Datenschutz text — placeholder in build, real text before launch
- [ ] Current availability status + date
- `flasche.webp` — confirmed static, confirmed in repo ✓
- Font — confirmed: **Brevia** ✓

### 8.3 Copy tone reminder

1–3 sentences per project max. Facts first. No adjectives stacked. No English marketing phrases. See WEBSITE_SPEC.md §3.2 for full brand voice rules.

---

## 9. Technical Requirements

| Concern | Decision |
|---|---|
| Framework | Astro (static output) |
| CMS | Keystatic (Git-based, admin at `/keystatic`) |
| Styling | Tailwind CSS 4 + DaisyUI 5 (heavily token-overridden) |
| Hosting | Vercel (free tier) |
| Repo | GitHub |
| Form handling | None — mailto: links only |
| Images | Astro's built-in `<Image />` component — optimized, responsive |
| Deployment | Push to `main` → Vercel auto-deploys |
| Domain (staging) | `*.vercel.app` until veranahobl.at is transferred |
| Domain (final) | verenahobl.at — DNS transfer from Squarespace when ready |

---

## 10. Open Questions

All previously blocking questions resolved. Remaining item before launch:

| # | Question | Status |
|---|---|---|
| 1 | Font | ✓ Brevia |
| 2 | Grid type | ✓ Uniform columns |
| 3 | Header behavior | ✓ Sticky |
| 4 | flasche.webp animated? | ✓ Static |
| 5 | Impressum text | Placeholder in build — real text from Verena before launch |
| 6 | Cart | ✓ Dropped |
| 7 | Commission form | ✓ No form — mailto: only |

---

## 11. Out of Scope (v2 / v3)

See WEBSITE_SPEC.md §13.2 for full descriptions.

- Shop / print-on-demand
- Dark mode
- English language layer
- Before/after slider on murals
- Map view of mural locations
- Timeline / chronological view
- Instagram feed integration
- Gift vouchers
- Client testimonials
- Service landing pages (SEO)
- Custom cursor
- Seasonal bottle variants
