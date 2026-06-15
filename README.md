# THE TERMINAL — Next.js Landing Page

A faithful migration of `classic/index.html` (a vintage railway / steampunk-themed
café & European kitchen) to a production Next.js App Router project, with a full
design-token system, dark/light theming, English/Vietnamese i18n, and a
component-driven architecture.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v3.4** with semantic tokens driven by CSS variables
- **next-themes** — dark / light theme
- **framer-motion** — dish-detail modal transitions
- **lucide-react** — icons

## Scripts

```bash
npm run dev      # dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## How the requirements are met

### Design tokens in CSS → Tailwind

Every colour, font, radius, button and border style is declared **once** as a CSS
variable in [`src/app/index.css`](src/app/index.css) and exposed to Tailwind in
[`tailwind.config.ts`](tailwind.config.ts). Components only use semantic / brand
utilities — never raw hex:

```tsx
<h2 className="text-foreground" />
<button className="btn-brass" />
<div className="bg-card border-border text-primary" />
```

Colours are stored as `R G B` channels so Tailwind's `/<alpha>` opacity modifiers
keep working (`text-quartz/65`, `border-brass/30`).

### Dark & light theme

`next-themes` toggles a `.dark` class on `<html>`. Semantic tokens
(`--background`, `--foreground`, `--card`, `--accent`, …) flip in `.dark`, while
the brand steampunk palette (brass / rust) stays constant as accent. The
inherently "night" sections (hero, menu, footer) stay dark in both themes by
design; the "paper" sections (about, reservation, location) shift from warm
parchment (light) to lantern-lit metal (dark). Toggle lives in the navbar and the
mobile sheet.

### Internationalisation (EN / VI)

**All copy** — including the entire menu (49 dishes: names, descriptions, chef's
notes, pairings, allergens) — lives in [`locales/en.json`](locales/en.json) and
[`locales/vi.json`](locales/vi.json). Non-translatable data (ids, prices, images,
allergen keys) lives in [`src/data/menu.ts`](src/data/menu.ts) and is joined to
the translated copy by id. A lightweight `LocaleProvider` (context +
`localStorage`, browser-language detection) serves the active messages; the two
files have verified 1:1 key parity.

### Responsive

Mobile-first throughout: a slide-down `NavigationSheet` replaces the desktop nav
under `lg`, fluid `clamp()` type scales, and grids collapse from 3/2 columns to 1.

## Component map

```
src/components/
├── ui/               Button (asChild via Slot)
├── providers/        ThemeProvider · LocaleProvider · AppProviders
├── navigation/       Navbar · NavigationSheet · BrandWordmark · Theme/Locale toggles
├── sections/         Hero · About · Menu · Reservation · Location · Footer
├── menu/             MenuTabs · MenuCategoryPanel · DishCard · DishModal
└── decorative/       Rivets · Steam · dividers · Reveal (scroll-in)
```
