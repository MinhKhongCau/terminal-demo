# Design System & UI Specifications | The Terminal

This document establishes the official design language, UI/UX regulations, color palette definitions, typography rules, and texture assets for **The Terminal** web application. This ensures strict brand consistency when processed by AI Studios or development teams.

---

## 1. Core Design Concept
* **Keywords:** *Classic, Steampunk, European Luxury, Vintage, Industrial Craftsmanship.*
* **Inspiration:** The nostalgic elegance of historic European railway stations mixed with intricate, hand-crafted mechanical details (gears, antique clocks, exposed filaments) reimagined for an upscale Fine Dining establishment.

---

## 2. Brand Color Palette Specifications

The user interface must strictly implement the specific HEX codes from the official brand guidelines:

| Brand Color | HEX Code | UI Application Role |
| :--- | :--- | :--- |
| **Rusty Brown** | `#7B3F00` | Dominant background color, primary navigation bars, and footer baselines. |
| **Bronze Gold** | `#CFA93F` | Brand logo, primary headers (Headings), borders, dividers, and high-priority Call-To-Action (CTA) buttons. |
| **Dark Iron** | `#3A3A3A` | Secondary container backgrounds (Cards, distinct page sections), and contrast elements. |
| **Patina Teal** | `#6D827D` | Accent color dedicated to interactive hover states, active indicators, and sub-icons. |

---

## 3. Typography System

### Typography for Headings & Titles
* **Font Family:** Premium serif typefaces featuring sharp, structured, classic European characteristics (e.g., *Cinzel*, *Playfair Display*, or *Cormorant Garamond*).
* **Styling Rules:** Forces uppercase text transformation (`uppercase`) with a `bold` or `semibold` weight.
* **Color Rule:** Must always render in **Bronze Gold (`#CFA93F`)**.

### Typography for Body Copy & UI Elements
* **Font Family:** Clean, highly legible Sans-serif fonts to ensure perfect readability on mobile devices (e.g., *Montserrat*, *Inter*, or *Roboto*).
* **Styling Rules:** Standard regular/medium weights with comfortable, spacious line-heights (`leading-relaxed`) to preserve an elegant, premium look.
* **Color Rule:** Quartz White (`#F5F5F5`) on dark themes, or Dark Iron (`#3A3A3A`) on light accents.

---

## 4. Textures, Materiality & Special Visual Effects

The UI layout should utilize modern CSS styles and image masks to mimic the physical textures of the restaurant premises:

* **Weathered Metal & Embossed Bronze:** Applied as subtle background textures behind key blocks or as container border-images.
* **Fired Clay Brick & Aged Wood:** Utilized explicitly for the background of the history/about section and the web footer.
* **Warm Filament Lighting Glow:** Simulate the golden, cozy glow of Edison bulbs using soft CSS `box-shadow` drops or fine `radial-gradient` rings around primary action steps.
* **Mechanical Motifs:** Place micro vector shapes of clock gears at section intersections, featuring ultra-slow rotation transitions (`animate-spin-slow`) to drive the vintage industrial theme home.

---

## 5. UI Component Specifications

### A. Action Buttons (CTAs)
* **Primary (e.g., Reserve a Table):** Solid Background in `Rusty Brown`, enclosed in a 2px `Bronze Gold` frame. Text is uppercase `Bronze Gold`. Upon interaction (`hover`), smoothly transition to a solid `Bronze Gold` background with `Dark Iron` text.
* **Secondary (e.g., View Gallery):** Transparent background with a `Bronze Gold` hairline stroke.

### B. Menu Grid Display Cards
* Background container runs on `Dark Iron` (`#3A3A3A`) adjusted with an opacity layer (`opacity: 0.85`) and an explicit `backdrop-blur` filter.
* Framed with a thin, delicate `Bronze Gold` line mimicking an elite, leather-bound dinner menu.
* Food photography must feature clean, micro-rounded corners, triggering a gentle zoom effect (`scale-105`) when targeted by pointer devices.

### C. Decorative Dividers
* Standard flat gray borders are prohibited. Instead, content components must be segregated using symmetrical vintage flourishes or a thin gold thread interrupted by a central gear glyph icon.