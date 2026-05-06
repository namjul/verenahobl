# verenahobl.at — Website Specification

> Source: live site https://verenahobl.at/, crawled 2026-05-06.
> Purpose: complete reference for an agent to replicate design, structure, and content.

---

## 1. Site Identity

- **Owner:** Verena Hobl
- **Title:** Verena Hobl – Design
- **Type:** Personal portfolio — graphic design & illustration
- **Language:** German (Austrian)
- **Platform:** Squarespace
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

- Clean, minimal sans-serif throughout
- Logo/wordmark: "Verena Hobl – Design" rendered as a linked image (not text), 1500w format
- Navigation: uppercase or small-caps feel, standard weight
- Body text: regular weight, black on white
- Category tags on project pages: uppercase, spaced letters (e.g. `WANDMALEREI`, `ILLUSTRATION`)
- Year label: plain, same size as body

### 2.3 Layout

- **Overall:** Centered, clean, generous whitespace
- **Grid (projects page):** Masonry or uniform image grid — project cards are image thumbnails with title below, no description text visible in grid
- **Project detail pages:** Single-column, image-focused layout
- **Max-width:** Standard content width, not full-bleed (except images on project pages)
- **Responsive:** Yes — mobile menu toggle ("Menü öffnen / schließen")

### 2.4 Header

- Fixed-position header
- Left: Logo image linking to homepage (`verenahobl_logo.webp`)
- Center: Primary navigation (`Projekte` | `Profil`)
- Right: Shopping cart icon (shows item count, currently 0 — cart is present but shop is inactive)
- Accessibility: "Zum Inhalt springen" (skip-to-content) link

### 2.5 Footer

Present on all pages. Contains:
- Copyright notice: `© 2026 - Verena Hobl`
- Decorative animated bottle illustration (`flasche.png` / GIF)
- Link: `Impressum | Datenschutz` (single link to legal/privacy page)

### 2.6 Interactions

- Project cards: clickable, navigate to detail page
- Images on project pages: fullscreen/lightbox view available
- Prev/Next navigation on project detail pages: text links (`Zurück` / `Weiter`) with adjacent project name
- No category filtering on the projects grid
- No search

---

## 3. Site Structure

```
/                          → Projekte (homepage = project grid)
/projekte                  → same as /
/projekte/[slug]           → individual project detail page (19 projects)
/profil                    → profile / about page
/impressum                 → legal notice + privacy policy (linked in footer)
```

### 3.1 Primary Navigation

| Label | URL | Notes |
|---|---|---|
| Projekte | `/projekte` | Also the homepage `/` |
| Profil | `/profil` | About / contact |

---

## 4. Page: Projekte (Homepage / Project Grid)

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

## 5. Page: Profil

**URL:** `/profil`

**Layout:** Single column, text + images

### Hero Image
Mural portrait (filename hint: `Wandmalerei-Portraits-Surfhouse-WalterWhite`)

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

## 6. Project Detail Page Template

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

## 7. All Projects — Full Content

### 7.1 Strandbar Herrmann Jubiläum
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

### 7.2 Goldschmiedatelier
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

### 7.3 Gurkerl
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

### 7.4 Gesichter in Linien
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

### 7.5 Three Legends
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

### 7.6 Scheune
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

### 7.7 Graffiti Porträt
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

### 7.8 The Underdogbar
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

### 7.9 Strandbar Herrmann
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

### 7.10 Graffiti Dschungel
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

### 7.11 Kalligrafie (Hochzeitseinladung)
- **Slug:** `/projekte/kalligrafie`
- **Year:** Since 2016
- **Category:** KALLIGRAFIE
- **Description:** "Minimalistische Liebesbekundungen. Eine Hochzeitseinladung mit handgeschriebenen Namen im Kalligraphie-Stil." Minimalist declarations of love — wedding invitations with calligraphic handwritten names.
- **Images:** 6 (fullscreen gallery)
- **Credits:** Letterpress printing: [Schöndruck](https://www.schoendruck.at)
- **Prev:** Graffiti Dschungel
- **Next:** Familien Portraits

---

### 7.12 Familien Porträts
- **Slug:** `/projekte/familien-portraits`
- **Year:** Since 2020
- **Category:** ILLUSTRATION
- **Description:** Minimalist family, couple, and individual portraits as unique gift ideas for birthdays, weddings, or anniversaries. Recipients "recognize themselves immediately," creating a successful surprise element.
- **Images:** 4 (1 featured + 3 examples)
- **Credits:** None
- **Prev:** Kalligrafie
- **Next:** Walter White

---

### 7.13 Walter White
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

### 7.14 Alpines Hochzeitsdesign
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

### 7.15 Playground
- **Slug:** `/projekte/playground`
- **Year:** 2020
- **Category:** ILLUSTRATION UND GIFS
- **Description:** "Eine Sammlung von Illustrationen, Skizzen und Gifs" — a collection of illustrations, sketches, and animated GIFs.
- **Assets:** 5 total:
  - 1 illustration (Illustration-02.jpg)
  - 1 sketch (lefthand_sketch.jpg)
  - 2 animated GIFs (bottle animation, character animation)
  - 1 decorative graphic (flasche2.png — the same bottle that appears in the footer)
- **Credits:** None
- **Prev:** Alpines Hochzeitsdesign
- **Next:** Pärchen Illustration

---

### 7.16 Pärchen Illustration
- **Slug:** `/projekte/paerchen-illustration`
- **Year:** 2019
- **Category:** HOCHZEITSEINLADUNG
- **Description:** "Zaubert bereits beim Öffnen der Karte den Gästen ein Lächeln ins Gesicht." Illustrated couple portrait on a wedding invitation card (front and back shown).
- **Images:** 1 (primary image showing both sides of the invitation)
- **Credits:** None
- **Prev:** Playground
- **Next:** Cartoon

---

### 7.17 Cartoon
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

### 7.18 Miniatur-Schädel
- **Slug:** `/projekte/miniatur-schaedel`
- **Year:** 2013
- **Category:** SKULPTUREN
- **Description:** "Diese Serie von Miniatur-Schädeln aus Modelliermasse wurde als individuelle Erweiterung einer Privatsammlung gefertigt." Custom series of miniature clay skull sculptures created to expand a private collection.
- **Images:** 4
- **Credits:** None
- **Prev:** Cartoon
- **Next:** Schwarz-weiß Porträt

---

### 7.19 Schwarz-weiß Porträt
- **Slug:** `/projekte/schwarz-wei-portrt`
- **Year:** 2015
- **Category:** LEINWAND MALEREI
- **Description:** "Schwarz-weiß Acrylporträts auf Leinwand — ein Geschenk für besondere Anlässe oder als Dekorationselement für die eigenen vier Wände." Black-and-white acrylic portraits on canvas as gifts or home decoration.
- **Images:** 3 (1 process image + 2 finished portraits)
- **Credits:** None
- **Prev:** Miniatur-Schädel
- **Next:** (last project, no next)

---

## 8. Project Category Reference

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

## 9. Asset Notes

- **Footer bottle:** Animated GIF, filename `flasche2.png` (appears in footer on all pages and also in the Playground project gallery)
- **Logo:** Linked image at 1500w — not text-based
- **Project images:** Hosted on Squarespace CDN; all have lightbox/fullscreen capability
- **Animated content:** The Underdogbar project has an animated logo GIF; Playground project has 2 animated GIFs
- **Short film:** Goldschmiedatelier project references an externally hosted process film by Leiwand Deluxe

---

## 10. External Links Referenced on Site

| Context | Link |
|---|---|
| Goldschmiedatelier client | https://www.corneliagaenger.at |
| Goldschmiedatelier filmmaker | https://www.leiwanddeluxe.com |
| Kalligrafie letterpress | https://www.schoendruck.at |
| Alpines Hochzeitsdesign photography | http://www.julia-eileen.com |
| Graffiti Porträt documentation | https://www.spraycity.at |
| The Underdogbar / Graffiti Dschungel | Instagram @theunderdogbar |

---

## 11. Localization

- Site language: German (Austrian)
- UI strings:
  - "Projekte" = Projects
  - "Profil" = Profile / About
  - "Zum Inhalt springen" = Skip to content
  - "Menü öffnen / schließen" = Open/close menu
  - "Zurück" = Previous (project nav)
  - "Weiter" = Next (project nav)
  - "Impressum | Datenschutz" = Legal notice | Privacy policy
