# verenahobl.at — Website Specification

> Source: live site https://verenahobl.at/, crawled 2026-05-06.
> Purpose: complete reference for an agent to replicate design, structure, and content.

---

## 1. Site Identity

- **Owner:** Verena Hobl
- **Title:** Verena Hobl – Design
- **Type:** Personal portfolio — graphic design & illustration
- **Language:** German (Austrian)
- **Copyright:** © 2026 - Verena Hobl

---

## 2. Design System

### 2.1 Color Palette

| Role | Value |
|---|---|
| Background | White (`#ffffff`) |
| Text | Black |
| Navigation | Black on white |
| Accents | None (image-driven; no brand accent color) |

The site is intentionally minimal — color comes entirely from project photography and illustrations.

### 2.2 Typography

- Logo/wordmark: **hand-lettered calligraphy** — lowercase "verena hobl" in a single-weight ink line, loose and organic. Not a typeface. Cannot be replicated with a font; must use the image file (`verenahobl_logo.webp`). This is the primary brand differentiator.
- Site body/nav font: clean, minimal sans-serif — `⚠ UNKNOWN` (identify via WhatFont or ask Verena)
- Navigation: standard weight, no uppercase
- Body text: regular weight, black on white
- Category tags on project pages: uppercase, letter-spaced (e.g. `WANDMALEREI`, `ILLUSTRATION`) — only typographic decoration on the site
- Year label: plain, same size as body

### 2.3 Layout

- **Overall:** Centered, clean, generous whitespace
- **Grid (projects page):** Image grid — cards are thumbnails with title below, no description visible. Grid type (masonry vs uniform columns) `⚠ UNKNOWN` — confirm by eye or ask Verena
- **Grid column count:** `⚠ UNKNOWN` — likely 2–3 columns desktop, 1–2 mobile
- **Image aspect ratio in grid:** `⚠ UNKNOWN` — likely consistent square or 4:3; confirm from source images
- **Project detail pages:** Single-column, image-focused layout
- **Max-width:** `⚠ UNKNOWN` exact value — visually standard content width (~1200px), not full-bleed
- **Responsive:** Yes — mobile menu toggle ("Menü öffnen / schließen")

### 2.4 Header

- Header position: `⚠ UNKNOWN` — appears fixed or sticky; confirm scroll behavior
- Left: Logo image linking to homepage (`verenahobl_logo.webp`, confirmed in repo)
- Center: Primary navigation (`Projekte` | `Profil`)
- Right: Shopping cart icon (0 items; shop inactive — rebuild decision: keep or drop `⚠ DECIDE`)
- Accessibility: "Zum Inhalt springen" (skip-to-content) link

### 2.5 Footer

Present on all pages. Contains:
- Copyright notice: `© 2026 - Verena Hobl`
- Bottle character illustration (`flasche.webp`, confirmed in repo — static webp; animated version may exist separately `⚠ CONFIRM`)
- Link: `Impressum | Datenschutz` (single link to legal/privacy page)

### 2.6 Interactions

- Project cards: clickable, navigate to detail page
- Images on project pages: fullscreen/lightbox view available
- Prev/Next navigation on project detail pages: text links (`Zurück` / `Weiter`) with adjacent project name
- No category filtering on the projects grid
- No search

---

## 3. Brand Voice & Visual Identity

### 3.1 Core Philosophy

The brand is defined by a single principle that runs through both the copy and the visual design:

> **"Mit wenigen Linien das Wesentliche einzufangen"** — capturing the essential with few lines.

This is not just a personal quote; it describes the site itself. The fewest possible UI elements, the fewest possible words, maximum image surface area.

### 3.2 Brand Voice

**Register:** Warm, direct, understated. First-person implied but rarely stated. Zero marketing language.

**Patterns in the copy:**
- Descriptions are 1–3 sentences maximum. Never padded.
- Facts come first: what, where, year. Emotion is implicit in the work, not the text.
- German, no anglicisms except for proper names (Selfie-Spots, Walter White, The Underdogbar).
- No calls-to-action, no "contact me", no "book now" — the contact info is just there.
- The bio doesn't list achievements; it states a preference ("bin ich in meinem Element").

**What to avoid in new copy:**
- Adjectives stacked on adjectives ("innovative, creative, unique")
- English marketing phrases
- Explaining the work in words that the images already say

### 3.3 Visual Identity

**Reduction as identity:** The minimal white/black UI is not a neutral backdrop — it is the brand statement. The contrast between the controlled, sparse interface and the expressive, colourful artwork is intentional and deliberate.

**The bottle motif:** `flasche.webp` — a hand-drawn bottle character with dot eyes and a smile (a face). Same single-weight ink-line style as the logo. Appears in the site footer (every page) and as a Playground project asset. It shares the exact visual language of the logo — both are drawn, not designed. Treat as a secondary brand mascot, not random decoration. The hand-drawn quality of both logo and bottle is the clearest expression of the brand: the designer's hand is literally present in the identity.

**Image as primary content:** The grid IS the homepage. There are no headlines, hero banners, or introductory text on the homepage — the visitor lands directly in the work.

**Typography hierarchy (inferred, exact font unknown):**
- Single typeface throughout (`⚠ UNKNOWN` — identify before build)
- Three visible weights/treatments:
  1. Navigation links — light/regular
  2. Project titles in grid and on detail pages — likely medium or regular
  3. Category tags — uppercase, letter-spaced (the only decorative typographic element)
- No decorative or display typefaces anywhere

**Color philosophy:**
- UI palette: `#ffffff` background, near-black text — never softened to grey
- The only "brand colors" are those that appear in the work itself (murals, illustrations)
- Hover states: `⚠ UNKNOWN` — likely subtle (opacity or underline); no color shifts expected given aesthetic
- Transition speed on lightbox/nav: `⚠ UNKNOWN`

### 3.4 Identity Summary for Rebuilding

| Dimension | Decision |
|---|---|
| Voice | Sparse German; facts, no fluff |
| Color | White + black only (UI); all color from artwork |
| Layout | Work-first; zero decorative chrome |
| Typography | One font, three treatments; uppercase tags only |
| Personality | Handmade precision — art quality in a grid |
| Signature element | Animated bottle in footer |
| What the site doesn't do | Filter, search, animate, upsell, explain |

---

## 4. Site Structure

```
/                          → Projekte (homepage = project grid)
/projekte                  → same as /
/projekte/[slug]           → individual project detail page (19 projects)
/profil                    → profile / about page
/impressum                 → legal notice + privacy policy (linked in footer) — ⚠ CONTENT UNKNOWN (404 on crawl; get text from Verena)
```

### 4.1 Primary Navigation

| Label | URL | Notes |
|---|---|---|
| Projekte | `/projekte` | Also the homepage `/` |
| Profil | `/profil` | About / contact |

---

## 5. Page: Projekte (Homepage / Project Grid)

**URL:** `/` and `/projekte`

**Layout:** Image grid of all 19 projects. Each card shows:
- Thumbnail image (fills card)
- Project title below image
- No year, category, or description visible in grid

**Order of projects (top-left to bottom-right):**

| # | Title | Slug |
|---|---|---|
| 1 | Strandbar Herrmann Jubiläum | `/projekte/strandbar-herrmann-jubilaeum` |
| 2 | Goldschmiedatelier | `/projekte/goldschmiedatelier` |
| 3 | Gurkerl | `/projekte/gurkerl` |
| 4 | Gesichter in Linien | `/projekte/gesichter-in-linien` |
| 5 | Three Legends | `/projekte/three-legends` |
| 6 | Scheune | `/projekte/scheune` |
| 7 | Graffiti Portrait | `/projekte/graffiti-portrait` |
| 8 | The Underdogbar | `/projekte/the-underdogbar` |
| 9 | Strandbar Herrmann | `/projekte/strandbar-herrmann` |
| 10 | Graffiti Dschungel | `/projekte/graffiti-dschungel` |
| 11 | Kalligrafie | `/projekte/kalligrafie` |
| 12 | Familien Portraits | `/projekte/familien-portraits` |
| 13 | Walter White | `/projekte/walter-white` |
| 14 | Alpines Hochzeitsdesign | `/projekte/alpines-hochzeitsdesign` |
| 15 | Playground | `/projekte/playground` |
| 16 | Pärchen Illustration | `/projekte/paerchen-illustration` |
| 17 | Cartoon | `/projekte/cartoon` |
| 18 | Miniatur-Schädel | `/projekte/miniatur-schaedel` |
| 19 | Schwarz-weiß Porträt | `/projekte/schwarz-wei-portrt` |

---

## 6. Page: Profil

**URL:** `/profil`

**Layout:** Single column, text + images

### Hero Image
Mural portrait — Walter White / Surfhouse mural. `⚠ IMAGE TO SOURCE FROM VERENA`

### Bio
> "Wenn es darum geht, mit wenigen Linien das Wesentliche einzufangen, bin ich in meinem Element."

Verena Hobl is a Vienna-based graphic designer and illustrator working in both realistic and abstract styles, on paper and on walls. She takes on international projects, including mural work abroad (e.g. France).

### Section: "What I do best!"

- Portraits in various styles (minimaler Linienstil, realistisch, bunt, abstrakt)
- Wandmalerei (Mural painting)
- Illustrationen
- Hochzeitseinladungen (Wedding invitations)
- Kalligrafie (Calligraphy)

### Notable Clients

- Gurkerl.at
- Herrmann Strandbar
- Carwyn's Surfhouse
- The Underdogbar
- Rebel Meat

### Contact

| Channel | Value |
|---|---|
| Email | verena.hobl@gmail.com |
| Instagram | @verenahobl |

---

## 7. Project Detail Page Template

All 19 projects share this template:

```
[Header]
[Project Title]          ← h1
[Year]  [CATEGORY TAG]   ← metadata row, category in uppercase
[Description text]       ← paragraph(s)
[Image gallery]          ← fullscreen/lightbox capable
[Credits/links]          ← optional, project-specific
[← Zurück: PrevTitle]   [Weiter: NextTitle →]   ← prev/next nav
[Footer]
```

---

## 8. All Projects — Full Content

### 8.1 Strandbar Herrmann Jubiläum
- **Slug:** `/projekte/strandbar-herrmann-jubilaeum`
- **Year:** 2025
- **Category:** WANDMALEREI
- **Location:** Strandbar Herrmann, Vienna
- **Description:** The bar turned 20, and the wall became the canvas again. The mural includes sections functioning as "Selfie-Spots" to invite guests into the artwork. Color palette drawn from Ottakringer's branding: dark green and yellow, supplemented with additional accent colors.
- **Images:** 4
- **Credits:** None
- **Prev:** (first project, no prev)
- **Next:** Goldschmiedatelier

---

### 8.2 Goldschmiedatelier
- **Slug:** `/projekte/goldschmiedatelier`
- **Year:** 2024
- **Category:** WANDMALEREI
- **Location:** Vienna, 2. Bezirk — goldsmith studio of Cornelia Gänger
- **Description:** Quiet, reduced wall design for a goldsmith studio. Vertical organic forms enhance spatial perception of the high-ceilinged room. A circular motif — inspired by goldsmithing techniques — appears as a perfect circle from one specific vantage point and shifts perspective from other angles, reflecting the material transformation inherent to the craft.
- **Images:** 4
- **Credits:**
  - Filmmaker: Pouya Abhari / [Leiwand Deluxe](https://www.leiwanddeluxe.com) documented the process in a short film
  - Client site: [corneliagaenger.at](https://www.corneliagaenger.at)
- **Prev:** Strandbar Herrmann Jubiläum
- **Next:** Gurkerl

---

### 8.3 Gurkerl
- **Slug:** `/projekte/gurkerl`
- **Year:** 2021
- **Category:** WANDMALEREI
- **Location:** Vienna — Gurkerl.at employee cafeteria
- **Description:** "Die Illustration fängt die Lieferung von regionalen Lebensmitteln frisch vom Bauernhof ein." Colorful mural with characters and rural landscape elements (farm, house, chickens) for the regional food delivery service's employee cafeteria.
- **Images:** 5 (including in-progress shots of artist working)
- **Credits:** None
- **Prev:** Goldschmiedatelier
- **Next:** Gesichter in Linien

---

### 8.4 Gesichter in Linien
- **Slug:** `/projekte/gesichter-in-linien`
- **Year:** Since 2020
- **Category:** ILLUSTRATION
- **Description:** "Mit viel Zeit und Liebe zum Detail wird durch den minimalistischen Porträt-Stil die Charakteristiken dieser Berühmtheiten eingefangen." Minimalist line-portrait series of famous personalities.
- **Subjects (7 portraits):**
  - The Beatles
  - Walter White (Bryan Cranston)
  - Jane Fonda & Lily Tomlin
  - Bud Spencer
  - The Golden Girls
  - Billie Eilish
  - Leonardo DiCaprio
- **Images:** 7
- **Credits:** None
- **Prev:** Gurkerl
- **Next:** Three Legends

---

### 8.5 Three Legends
- **Slug:** `/projekte/three-legends`
- **Year:** 2022
- **Category:** WANDMALEREI
- **Location:** Carwyn's Surfhouse, western coast of France
- **Description:** Tribute to three iconic figures of the 1980s: Bob Marley, Mick Jagger, and Peter Tosh. Realistic black-and-white portrait mural, permanently installed.
- **Images:** 5 (finished mural from various angles, artist during creation, close-up details)
- **Credits:** None
- **Prev:** Gesichter in Linien
- **Next:** Scheune

---

### 8.6 Scheune
- **Slug:** `/projekte/scheune`
- **Year:** 2019
- **Category:** WANDMALEREI
- **Location:** Kärnten (Carinthia)
- **Description:** "Das Bergpanorama der Umgebung schmückt jetzt die Fassade dieser alten Scheune in Kärnten. Auch ein paar Hühner haben sich hierhin verirrt." Mountain landscape panorama painted on the exterior facade of an old barn, with a few decorative chickens.
- **Images:** 4
- **Credits:** None
- **Prev:** Three Legends
- **Next:** Graffiti Portrait

---

### 8.7 Graffiti Porträt
- **Slug:** `/projekte/graffiti-portrait`
- **Year:** 2021
- **Category:** WANDMALEREI
- **Location:** Wienerwand Nordbrücke, Vienna (legal graffiti wall)
- **Description:** Realistic black-and-white graffiti portrait created as a surprise 30th birthday gift. "Ein einzigartiges Geschenk für den Moment."
- **Images:** 4 (finished portrait, in-progress with grid overlay, during creation, additional finished views)
- **Credits:** Reference link to [spraycity.at](https://www.spraycity.at) gallery documentation
- **Prev:** Scheune
- **Next:** The Underdogbar

---

### 8.8 The Underdogbar
- **Slug:** `/projekte/the-underdogbar`
- **Year:** 2018
- **Category:** LOGO DESIGN UND ANIMATION
- **Location:** The Underdog Bar, Vienna
- **Description:** Visual identity for a Vienna bar known for "unique cocktails, creative hot dogs and colorful light effects." Logo design and accompanying animation. Process documented from initial sketches to final branded physical installations (LED signage).
- **Images:** 7 total — 1 animated logo GIF + 6 static (sketches, design process, final logo, physical applications)
- **Credits:** Instagram: @theunderdogbar
- **Prev:** Graffiti Porträt
- **Next:** Strandbar Herrmann

---

### 8.9 Strandbar Herrmann
- **Slug:** `/projekte/strandbar-herrmann`
- **Year:** 2021
- **Category:** WANDMALEREI
- **Location:** Strandbar Herrmann, Vienna (60-meter wall)
- **Description:** Mural on the "impressive 60-meter wall" of Vienna's legendary Strandbar Herrmann. Features blue-footed boobies — the bar's emblem animal — that "conquered" the wall. Character designs drew inspiration from the individual characteristics of the bar staff.
- **Images:** 9
- **Credits:** None
- **Prev:** The Underdogbar
- **Next:** Graffiti Dschungel

---

### 8.10 Graffiti Dschungel
- **Slug:** `/projekte/graffiti-dschungel`
- **Year:** 2020
- **Category:** WANDMALEREI
- **Location:** The Underdog Bar courtyard, Vienna (restroom doors)
- **Description:** "Ein bunter Graffiti-Dschungel voller verrückter Tiere" — colorful graffiti jungle full of crazy animals, painted on restroom doors in the bar's courtyard.
- **Images:** 4
- **Credits:** Instagram: @theunderdogbar
- **Prev:** Strandbar Herrmann
- **Next:** Kalligrafie

---

### 8.11 Kalligrafie (Hochzeitseinladung)
- **Slug:** `/projekte/kalligrafie`
- **Year:** Since 2016
- **Category:** KALLIGRAFIE
- **Description:** "Minimalistische Liebesbekundungen. Eine Hochzeitseinladung mit handgeschriebenen Namen im Kalligraphie-Stil." Minimalist declarations of love — wedding invitations with calligraphic handwritten names.
- **Images:** 6 (fullscreen gallery)
- **Credits:** Letterpress printing: [Schöndruck](https://www.schoendruck.at)
- **Prev:** Graffiti Dschungel
- **Next:** Familien Portraits

---

### 8.12 Familien Porträts
- **Slug:** `/projekte/familien-portraits`
- **Year:** Since 2020
- **Category:** ILLUSTRATION
- **Description:** Minimalist family, couple, and individual portraits as unique gift ideas for birthdays, weddings, or anniversaries. Recipients "recognize themselves immediately," creating a successful surprise element.
- **Images:** 4 (1 featured + 3 examples)
- **Credits:** None
- **Prev:** Kalligrafie
- **Next:** Walter White

---

### 8.13 Walter White
- **Slug:** `/projekte/walter-white`
- **Year:** 2018
- **Category:** WANDMALEREI
- **Location:** Carwyn's Surfhouse, western coast of France
- **Description:** Wall mural featuring Bryan Cranston as Walter White from Breaking Bad.
- **Images:** 3
- **Credits:** Client: [Carwyn's Surfhouse](linked in description)
- **Prev:** Familien Portraits
- **Next:** Alpines Hochzeitsdesign

---

### 8.14 Alpines Hochzeitsdesign
- **Slug:** `/projekte/alpines-hochzeitsdesign`
- **Year:** 2019
- **Category:** HOCHZEITSDESIGN
- **Description:** "Das minimalistische Design zieht sich als roter Faden durch die Save-the-date-Karte und Hochzeitseinladung. Namen sind im Signature-Stil handgeschrieben, die Bergillustration mit Save-the-date zeigt den Ort auf illustrative Weise. Handbemalte Willkommens- und Ablaufschilder auf Holz sowie ein Cake-Topper bilden ein stimmiges Gesamtkonzept." Cohesive alpine wedding concept: save-the-date, invitation, hand-painted wooden welcome and schedule signs, cake topper.
- **Images:** 6
- **Credits:**
  - Cake & cake topper: Natürlich Bauer (Instagram link)
  - Photography: Julia-eileen ([website link](http://www.julia-eileen.com))
- **Prev:** Walter White
- **Next:** Playground

---

### 8.15 Playground
- **Slug:** `/projekte/playground`
- **Year:** 2020
- **Category:** ILLUSTRATION UND GIFS
- **Description:** "Eine Sammlung von Illustrationen, Skizzen und Gifs" — a collection of illustrations, sketches, and animated GIFs.
- **Assets:** 5 total — 1 illustration, 1 sketch, 2 animated GIFs (bottle animation + character animation), 1 bottle graphic (same character as footer `flasche.webp`). `⚠ ALL TO SOURCE FROM VERENA`
- **Credits:** None
- **Prev:** Alpines Hochzeitsdesign
- **Next:** Pärchen Illustration

---

### 8.16 Pärchen Illustration
- **Slug:** `/projekte/paerchen-illustration`
- **Year:** 2019
- **Category:** HOCHZEITSEINLADUNG
- **Description:** "Zaubert bereits beim Öffnen der Karte den Gästen ein Lächeln ins Gesicht." Illustrated couple portrait on a wedding invitation card (front and back shown).
- **Images:** 1 (primary image showing both sides of the invitation)
- **Credits:** None
- **Prev:** Playground
- **Next:** Cartoon

---

### 8.17 Cartoon
- **Slug:** `/projekte/cartoon`
- **Year:** 2008
- **Category:** ILLUSTRATION
- **Description:** "Cartoon-Kreationen aus dem Alltag" — cartoon creations from everyday life.
- **Images:** 6 illustrations:
  - Pancakes-themed cartoon
  - Giraffe illustration
  - Seek-and-find scene
  - Doctor/medical scene
  - Carpet-related cartoon
  - Sports-themed illustration
- **Credits:** None
- **Prev:** Pärchen Illustration
- **Next:** Miniatur-Schädel

---

### 8.18 Miniatur-Schädel
- **Slug:** `/projekte/miniatur-schaedel`
- **Year:** 2013
- **Category:** SKULPTUREN
- **Description:** "Diese Serie von Miniatur-Schädeln aus Modelliermasse wurde als individuelle Erweiterung einer Privatsammlung gefertigt." Custom series of miniature clay skull sculptures created to expand a private collection.
- **Images:** 4
- **Credits:** None
- **Prev:** Cartoon
- **Next:** Schwarz-weiß Porträt

---

### 8.19 Schwarz-weiß Porträt
- **Slug:** `/projekte/schwarz-wei-portrt`
- **Year:** 2015
- **Category:** LEINWAND MALEREI
- **Description:** "Schwarz-weiß Acrylporträts auf Leinwand — ein Geschenk für besondere Anlässe oder als Dekorationselement für die eigenen vier Wände." Black-and-white acrylic portraits on canvas as gifts or home decoration.
- **Images:** 3 (1 process image + 2 finished portraits)
- **Credits:** None
- **Prev:** Miniatur-Schädel
- **Next:** (last project, no next)

---

## 9. Project Category Reference

| Category Label (as displayed) | Type |
|---|---|
| WANDMALEREI | Mural / wall painting |
| ILLUSTRATION | Digital or hand-drawn illustration |
| ILLUSTRATION UND GIFS | Illustration + animated GIFs |
| KALLIGRAFIE | Calligraphy |
| HOCHZEITSEINLADUNG | Wedding invitation |
| HOCHZEITSDESIGN | Full wedding design system |
| LOGO DESIGN UND ANIMATION | Logo + motion |
| SKULPTUREN | Sculpture |
| LEINWAND MALEREI | Canvas painting (acrylic) |

---

## 10. Asset Notes

### Confirmed in repo
- `verenahobl_logo.webp` — hand-lettered logo, ready to use
- `flasche.webp` — bottle mascot character, ready to use (static; animated version may also exist — `⚠ CONFIRM WITH VERENA`)

### To source from Verena
- All 19 project image sets (count per project documented in §8)
- Profil page hero image (Walter White / Surfhouse mural)
- Animated logo GIF for The Underdogbar project
- 2 animated GIFs for the Playground project
- Impressum + Datenschutz page text

### Notes
- Lightbox/fullscreen on project images: implement in rebuild (behavior existed on old site)
- Goldschmiedatelier process film: externally hosted at leiwanddeluxe.com — link only, no file needed

---

## 11. External Links Referenced on Site

| Context | Link |
|---|---|
| Goldschmiedatelier client | https://www.corneliagaenger.at |
| Goldschmiedatelier filmmaker | https://www.leiwanddeluxe.com |
| Kalligrafie letterpress | https://www.schoendruck.at |
| Alpines Hochzeitsdesign photography | http://www.julia-eileen.com |
| Graffiti Porträt documentation | https://www.spraycity.at |
| The Underdogbar / Graffiti Dschungel | Instagram @theunderdogbar |

---

## 13. Adjacent Possible — Feature Ideas

Ideas grounded in what already exists on the site. Not a roadmap — a map of directions the site could grow into. Implement in order of impact vs. effort; don't do all at once.

### 13.1 Primary (v1 candidates — close to current state, high value)

1. **Shop activation** — cart already wired in; store marked inactive. Natural products: fine art prints, custom portrait commissions. No new infrastructure needed beyond activating it.
2. **Commission configurator** — lightweight form: style selector → format → contact. Familien Porträts, Kalligrafie, and Graffiti Porträt are all proven repeatable services with zero CTA currently.
3. **Category filter** — single row of text tags above grid: `Alle · Wandmalerei · Illustration · Hochzeit · Kalligrafie`. Pure CSS or minimal JS. Grid stays, metadata is already there.
4. **Process layer per project** — collapsible "Entstehung" section per project; sketch-to-wall arc. Only Goldschmiedatelier has this currently. Adds depth without cluttering the default view.
5. **Before/after slider** — blank wall → finished mural. 10 of 19 projects are murals; this is the core drama of the work. Interactive swipe comparison.
6. **Dark mode** — UI palette is already black/white; trivial to invert. Colorful artwork pops harder on dark. System-preference auto-switch or manual toggle.
7. **Bottle as more** — `flasche.webp` is a ready-made mascot sitting in the footer basement. Use on 404 page, as animated page loader, or as a cursor easter egg on the homepage.
8. **English layer** — toggle that switches bio and project descriptions to English; keeps German UI. International client track already exists (France twice). Not a full localization — a practical minimum.
9. **Headless CMS rebuild** — move content to Sanity or similar; static frontend (Astro, Next.js). Verena edits content without touching code. Spec document already contains the full CMS schema.
10. **Availability signal** — "Verfügbar ab [month]" on Profil page or sticky banner. Mural commissions need months of lead time; sets expectations and creates urgency without a booking system.

---

### 13.2 Secondary (v2/v3 — later iterations, higher complexity or lower urgency)

> These are directionally interesting but should not block a v1 rebuild. Revisit once the core site is stable and live.

11. **Timeline view** — projects span 2008–2025 (17 years). Chronological mode alongside the grid shows the arc of the practice.
12. **Map view** — most murals have specific locations (Vienna districts, Kärnten, France). A map makes the geographic range and density visible; useful for prospective mural clients.
13. **Related projects** — 2–3 thumbnails by same category at the bottom of each detail page. Keeps visitors inside the work longer.
14. **Random project button** — "überrasch mich" entry point. Small, low-effort, high personality.
15. **Mural-specific inquiry form** — scoped: wall dimensions, indoor/outdoor, location, timeline, style reference. Different from a general commission form; reduces back-and-forth for the highest-value commissions.
16. **Gift voucher** — "commission a portrait as a gift" is the origin story of the Graffiti Porträt project. Already a validated use case.
17. **Waitlist** — if booked out, collect email. One field, one button. Turns away-traffic into future leads.
18. **Client logo wall** — Gurkerl, Strandbar Herrmann, Rebel Meat are recognizable Vienna brands. Visual social proof without needing testimonial copy.
19. **Hand-drawn UI elements** — borders, dividers, button outlines in the same single-weight ink style as the logo and bottle mascot. The chrome itself becomes part of the handmade identity rather than generic boxes.
20. **Seasonal bottle variants** — the mascot changes slightly for seasons or occasions. Low effort, high personality signal.
21. **Custom cursor** — drawing pen or brush on hover over images. Communicates "artist's site" without stating it.
22. **Instagram feed on Profil** — @verenahobl already linked; pulling recent posts keeps the site feeling alive between project updates without a full CMS workflow.
23. **"Work in progress" state** — murals take days or weeks. A current-project page or banner ("gerade in Arbeit: ...") makes the site feel inhabited and active.
24. **Print-on-demand** — line portrait series (Gesichter in Linien, Familien Porträts) are natural candidates for art prints. Integrates with the dormant cart.
25. **Service landing pages** — "Wandmalerei Wien", "Portraitillustration Wien", "Hochzeitseinladung Wien". Currently the site has no keyword surface for people who don't already know Verena's name. SEO entry points for each service type.

---

### 13.3 Generative Constraints — limitations that produce something better than their absence

> These are not problems to solve. They are constraints worth keeping deliberately — or even hardening into rules. Each one, when embraced, produces a sharper identity than the unconstrained alternative.

1. **Sequential prev/next as curatorial voice** — the artist controls the order visitors experience the work. Removing jump navigation isn't a missing feature; it's editorial authority. The sequence is a statement. Make the order deliberate and meaningful, not just reverse-chronological.
2. **No homepage text** — the grid lands with zero copy. Could be made a hard rule: no text anywhere on the homepage, ever. Forces every image to be immediately legible on its own terms. Makes every image selection high-stakes — and therefore high-quality.
3. **Email-only contact as quality filter** — friction screens clients. Someone who writes an email is already more committed than someone who fills a form. The constraint removes low-effort, low-quality inquiries before they happen. Worth keeping deliberately, not fixing.
4. **No pricing as positioning** — works the same way as architecture and bespoke craft. The absence of a price signals "not a commodity." Forces a conversation before a transaction. Places the work in a different category than commission marketplaces.
5. **Black/white UI as a hard rule** — currently implicit, could be made explicit and unbreakable. No color in the UI under any circumstance — buttons, hover states, form fields, tags. All color judgment falls entirely on the artwork. The constraint means the work can never be upstaged by the chrome.
6. **Hand-drawn only for UI decoration** — logo and bottle are both hand-drawn. Could become a rule: any decorative element in the UI must be drawn by Verena's hand. No stock icons, no SVG libraries. Makes the identity inimitable — impossible to replicate with a template.
7. **Fixed or maximum project count** — 19 is odd and non-round. Could be made meaningful: a hard ceiling (say 20). New work in, old work out. Forces a quality gate. Signals the collection is curated, not accumulated. Gallery logic: finite wall space.
8. **30-word maximum per project description** — currently 1–3 sentences by convention. Could be a hard rule. Forces precision — every word chosen because no other would do. Matches the brand philosophy ("wenigen Linien") at the level of language.
9. **No testimonials as a trust signal** — the absence of quotes says: the work doesn't need endorsement. For the right kind of client, this reads as confidence, not oversight. The constraint is itself the statement.
10. **German-only as local identity depth** — being explicitly not-English makes the site legibly Viennese. In a globalized internet, being local is a positioning choice. The constraint makes her "the Vienna mural artist" rather than "a mural artist." International clients who find her through word of mouth arrive already sold — the site doesn't need to convert cold traffic.

---

## 14. Closed Doors

### 14.1 Content — what's there that works against it

**Old work mixed with new.** The grid presents 2008–2025 without hierarchy. Cartoon (2008), Miniatur-Schädel (2013), and Schwarz-weiß Porträt (2015) sit alongside the 2024–2025 murals. A first-time visitor has no signal that the older work is not representative of current output. Consider whether these projects stay, move to an archive, or get dropped.

**No curation signal.** Grid order is roughly reverse-chronological but not strictly so. Nothing communicates "this is the best work" vs. "this is older work." Every project carries equal visual weight.

### 14.2 Assets — what's missing and must be gathered

**All project images must be manually downloaded.** Every image lives on the live site; there is no export. Will be done manually before the rebuild. Count per project is documented in §8 — use it as a checklist. Also needed: the Profil hero image, the animated logo GIF (Underdogbar), and 2 animated GIFs (Playground).

**Animated bottle unconfirmed.** `flasche.webp` in the repo is static. The footer on the live site may have shown an animated version — unclear. If only the static file exists, the footer character is still but loses some personality. Confirm with Verena.

**Logo has no "– Design" suffix.** The image `verenahobl_logo.webp` reads "verena hobl" only. The full site title is "Verena Hobl – Design." The suffix is either rendered as adjacent text in the header or missing from the image. Needs to be resolved before the header is built.

### 14.3 Legal — what's required and currently absent

**Impressum + Datenschutz content unknown.** Austrian law requires an Impressum. The footer links to it but the page returned 404 on crawl — content never captured. Cannot go live without it. Get text from Verena before launch.

### 14.4 Brand — where the identity works against growth

**The reduction philosophy is also a ceiling.** "Mit wenigen Linien das Wesentliche einzufangen" describes the brand — and limits it. Every feature addition is a potential violation of the brand promise. Features from §13 that add words, chrome, or interaction need to earn their place carefully or they erode what makes the site work.

**Good SEO requires words. The brand minimizes words.** These are in direct tension. Service landing pages, descriptions, alt text — all necessary for discoverability, all pulling against the sparse aesthetic.

**Generic UI components will clash.** Forms, filters, buttons designed with standard component libraries will look out of place next to hand-lettered calligraphy and a smiley bottle mascot. Every UI addition needs to be considered against the handmade visual register.

### 14.5 Business — structural gaps in the commission pipeline

**Single person, no studio framing.** The brand is entirely Verena — her name, her hand, her face. No "studio" layer. If she collaborates, scales, or steps back, the identity has no room to accommodate it.

**Email only.** Contact is a single email address. For mural commissions — which require site visits, measurements, quotes, scheduling — this is a bottleneck that filters out clients who want friction-free engagement.

**No pricing anywhere.** Deliberate artistic positioning, but it filters clients who need budget signals before reaching out. High-value commissions may never start the conversation.

### 14.6 Discovery — where the site is invisible

**No English, no international search surface.** International clients (Carwyn's Surfhouse, France) found her through personal networks or Instagram, not search. Without an English layer the site is invisible to anyone searching outside the German-speaking market.

**No SEO surface for service terms.** Someone searching "Wandmalerei Wien" or "Portraitillustration Wien" will not find this site. The portfolio-only structure has no keyword entry points for people who don't already know her name.

**Discovery depends on Instagram.** @verenahobl is the primary inbound channel. If the platform shifts, changes its algorithm, or she stops posting, the pipeline breaks with no fallback.

---

## 15. Negative Space

> In drawing, negative space is what you draw instead of the subject — the surrounding void that reveals the shape of what's there. These are the deliberate absences on this site that do positive work. Each one is load-bearing: remove it and something in the identity collapses.

**Verena's face never appears.**
The artist is invisible. Only her hand shows up — in the logo, the bottle, the work itself. The absence of a portrait makes the work the face. You encounter the art before you encounter the person.

**No credentials, no press, no awards.**
No CV, no "as seen in," no accolades. The absence of external validation places all trust in direct perception. The work either convinces or it doesn't — no third-party endorsement mediates that.

**No client names in the grid.**
Gurkerl, Strandbar Herrmann, Carwyn's Surfhouse — all hidden until you click in. The grid strips commercial context entirely. The work stands without its client. A mural and a wedding invitation look equivalent on the surface.

**No description in the grid.**
Image + title only. No category, no year, no teaser. The absence forces image literacy — the thumbnail has to earn the click on its own terms.

**No hero, no splash, no landing moment.**
The grid is the first thing. No introductory screen, no transition ritual. You're inside the work before you've decided to be.

**No social links in the navigation.**
Instagram is buried on the Profil page. The header has no social icons. The absence seals the site from the stream — a gallery doesn't have a live feed on the wall.

**No dates in the grid.**
Years exist on project detail pages but are invisible in the overview. The absence of chronology makes time irrelevant to quality judgment. A 2008 cartoon and a 2025 mural compete on equal terms.

**No color in the UI.**
The UI's absence of color means every color in every image feels authored and intentional — never competing with a brand accent. The whiteness is a frame that makes the work's colors more saturated by contrast.

---

## 12. Localization

- Site language: German (Austrian)
- UI strings:
  - "Projekte" = Projects
  - "Profil" = Profile / About
  - "Zum Inhalt springen" = Skip to content
  - "Menü öffnen / schließen" = Open/close menu
  - "Zurück" = Previous (project nav)
  - "Weiter" = Next (project nav)
  - "Impressum | Datenschutz" = Legal notice | Privacy policy
