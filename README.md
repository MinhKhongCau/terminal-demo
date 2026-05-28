# The Terminal - Cafe & European Kitchen | Frontend Landing Page

Welcome to the repository for **The Terminal** — a premium Western-style European restaurant utilizing a luxury, vintage aesthetic inspired by 19th-century train stations.

## Overview
This focuses on building a high-conversion Landing Page and an interactive Online Menu for customers. The user interface follows a **Steampunk Luxury / Vintage European** design language, ensuring high aesthetic value, fluid animations, and a fully responsive experience across all device form factors.

* **Brand Identity:** The Terminal - Cafe & European Kitchen
* **Established:** 2024
* **Core Aesthetics:** Elegant, classic, Western European luxury incorporating weathered metals, embossed bronze, and fired clay brick elements.

---

## Technical Specifications (Recommended Tech Stack)
To guarantee top-tier performance while rendering complex visual assets and cinematic effects:
* **Framework:** Next.js 14+ (App Router) or React.js
* **Styling:** Tailwind CSS combined with Styled Components or SASS
* **Animation:** Framer Motion (for smooth mechanical gear rotations and elegant fade-ins)
* **Icons:** Lucide React / FontAwesome (custom-tinted to match the brand color palette)

---

## User Experience Flow

The frontend system structures user navigation into two core flows: the Brand Presentation and the Digital Menu Exploration.

### 1. Landing Page Flow (Brand Introduction)

```
[Hero Section: Cinematic background video/imagery of the vintage station ambiance]
⬇
[Story Section: Established 2024 - Journey into European culinary art]
⬇
[Signature Dishes: Smooth carousel displaying curated, best-selling entrees]
⬇
[Ambience Gallery: Immersive look at the interior (Fired brick, Edison bulbs, iron gears)]
⬇
[Call To Action: Book a Table / Explore Full Menu]
```

### 2. Digital Menu Flow (QR Code / Direct Access)

```
[User visits /menu or scans the table-top QR Code]
⬇
[Category Filter Tabs: Coffee & Beverages | Appetizers | European Mains | Desserts | Wine Cellar]
⬇
[Menu List View: Clean grids detailing names, premium ingredients, portion sizes, and pricing]
⬇
[Item Detail Modal (Popup): In-depth ingredient breakdown, pairing suggestions, and dish backstory]
```
---

## Local Setup Guide

1. Clone the repository:
```bash
git clone [https://github.com/your-repo/the-terminal-frontend.git](https://github.com/your-repo/the-terminal-frontend.git)
cd the-terminal-frontend
```
2. Install dependencies:
```
npm install
```
3. Configure your local environment variables (.env.local sample):
```
NEXT_PUBLIC_API_URL=[https://api.theterminal.vn/v1](https://api.theterminal.vn/v1)
NEXT_PUBLIC_RESTAURANT_EST=2024
```
4. Spin up the local development server:

```
npm run dev
```

