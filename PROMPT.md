Act as an elite Senior Frontend Developer, UI/UX Architect, and Creative Director specializing in luxury digital dining experiences.

Your task is to generate a single, completely self-contained, and production-ready HTML file (`index.html`) that functions as a high-fidelity frontend prototype for "The Terminal - Cafe & European Kitchen". This file will be utilized as a direct client demo and must run flawlessly across devices out of the box with zero external build systems.

### 🏛️ BRAND IDENTITY & DESIGN SYSTEM (Strict Color & Font Compliance)
You must strictly use ONLY the colors, gradients, and font properties defined below (extracted directly from the brand's approved signboard asset):

- **Core Typography:** Must use the **"Oswald", sans-serif** font family loaded via Google Fonts CDN.
- **Color Palette & Finishes:**
  - **Outer Canvas (Body Background):** `#E0C9A6` (Solid flat finish).
  - **Signboard Background:** A combination of a radial gradient and a linear gradient replicating the exact wood/metal plate styling:
    `radial-gradient(circle at top, rgba(255,255,255,.08), transparent 35%)` combined with `linear-gradient(180deg, #5a3427 0%, #4a2d22 45%, #3b241b 100%)`.
  - **Signboard Inset Shadows:** `inset 0 0 25px rgba(0,0,0,.35), 0 10px 30px rgba(0,0,0,.45)`.
  - **Wood Grain Micro-Texture Overlay:** Implement a repeating linear gradient overlay matching:
    `repeating-linear-gradient(90deg, rgba(255,255,255,.02) 0px, rgba(255,255,255,.02) 2px, transparent 2px, transparent 6px)` at `0.25` opacity.
  - **Core Component Backdrops (Dark Iron Canvas):** `#3A3A3A` (For structural layout content containment cards, navigation rows, and modal backplates).
  - **Secondary Accent (Fired Brick Earth):** `#A0522D`.

- **Typography Color & Lighting Gradient Effects:**
  - **Primary Title Gradient ("THE TERMINAL" Style):** Apply a linear gradient precisely using:
    `linear-gradient(0deg, #b97716 0%, #fcd16e 20%, #fcf2d6 50%, #fcda8c 80%, #b97716 100%)` mapped via `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent`. Drop a subtle text shadow of `0 0 10px rgba(255, 215, 120, 0.15), 0 3px 10px rgba(0,0,0,.25)`.
  - **Subtitles & Content Accent Gradient ("CAFE & EUROPEAN KITCHEN" Style):** Apply a linear gradient using:
    `linear-gradient(0deg, #b97716 0%, #f4c14f 20%, #fff1b3 50%, #f4c14f 80%, #b97716 100%)` mapped via `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent`.
  - **Decorative Dividers:** Must use a 4px height bar using:
    `linear-gradient(0deg, #c88d2b 0%, #ffe9a3 50%, #c88d2b 100%)` with a shadow glow of `0 0 8px rgba(255,220,120,.25)`.
  - **Body Descriptions Text:** Use `#3A3A3A` when placed over light backgrounds, or clean white/quartz tints over the dark iron blocks to sustain clear visual hierarchy.

### 🛠️ TECHNICAL ARCHITECTURE
- **Framework:** Include Tailwind CSS Play CDN (`<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`).
- **Icons:** Include FontAwesome or Lucide Icons via CDN for sharp vector mechanics (gears, clocks, steam elements).
- **Interactions:** Inject modern Vanilla JavaScript inside a `<script>` tag at the baseline to drive structural menu tab swapping, interactive item highlights, and dynamic popup detail modals.

---

### 🗺️ DETAILED FRONTEND COMPONENT SPECIFICATIONS

#### A. Header Component
- **Layout:** Symmetric Flexbox layout (Split-pane layout on desktop/tablet, stacked on mobile).
- **Left Side:** Large "THE TERMINAL" primary brand title utilizing the exact Oswald Bold Primary Title Gradient effect.
- **Right Side:** Metadata column using clean vertical typography:
  - Branch Locations (The Villa, Độc Lập, Diamond Plaza)
  - Operating Hours: 11:00 - 22:00 EVERYDAY
  - Hotline: 1900 6403

#### B. Category Section Navigation Component
- A premium tab selection row containing: `Appetizers`, `Salads`, `Soups`.
- Titles must be styled using the Subtitle Gradient system when selected, and a muted, flat gold tint when unselected. Swapping tabs dynamically filters the item grid without page refreshes.

#### C. Interactive MenuItem Component (The Core Grid)
- **Layout Responsiveness (Mandatory Layout Constraint):**
  - Mobile viewports: Clean, stackable 1-column layout (`grid-cols-1`).
  - Tablet & Desktop viewports: **Must explicitly remain locked in a symmetric 2-column layout (`sm:grid-cols-2 md:grid-cols-2`)** so users can scan the full menu layout layout simultaneously on an iPad, tablet, or laptop.
- **Structure:**
  - Implement a flex layout grid using `justify-between` and `items-start` enclosed within a structural `Dark Iron` (`#3A3A3A`) container block.
  - Left Item Content: **Dish Name** (Oswald, uppercase, bold, rendering in the gold-accent gradient) and a secondary line underneath for **Description** (smaller text size, readable tone).
  - Right Item Content: **Price** (Bold Oswald tracking right, rendered using the explicit title color gradient).
- **Interaction/State Handling:**
  - Each item container must be a clickable layout block (`<button>` or `<div>` with standard pointer cursor mechanics).
  - On Hover/Tap: Smoothly highlight the container background box with a soft transition. Clicking any item launches the modal overlay.

#### D. Interactive Dish Detail Modal (JavaScript Powered)
- Clicking any specific menu item card triggers a full screen overlay modal (`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm`).
- The modal box is constructed on a `Dark Iron` (#3A3A3A) canvas rimmed with a gold gradient divider line.
- Features a close button in the top-right corner, a food layout content layout grid on the left, and micro ingredient list analytics on the right.

---

### 🗂️ PRODUCTION MENU DATA TO HARDCODE
- **Appetizers (Khai vị):**
  - CALAMARI (85) - Mực chiên giòn dùng kèm với salad & sốt Tartar
  - GRILLED BEEF W. SPRING ONION OIL (95) - Bò nướng mỡ hành thơm nức vị truyền thống ga tàu
  - HOI AN BRUSCHETTA (85) - Bánh mì nướng phủ pate gà, đùi heo muối & ớt rim độc bản
  - BEEF BRUSCHETTA (95) - Bánh mì nướng dùng kèm thịt bò xào kiểu Nhật thanh lịch
  - FORACCIA & CIABATTA (45) - Bánh mì dẹt & bánh mì tổ kén kiểu Ý dùng kèm với bơ miso
  - CHICKEN PATE & BREAD (55) - Bánh mì đen dùng kèm sốt Pate gà béo mịn
  - SEA URCHIN PATE & BREAD (75) - Bánh mì đen đặc sản dùng kèm với Pate nhum biển
  - COLD CUTS (245) - Đùi heo muối Tây Ban Nha, phô mai thượng hạng, Pate nhum trải Olive & bánh mì đen
- **Salads (Salad):**
  - BALSAMIC SALAD (55) - Xà lách ô liu trộn sốt dầu giấm kiểu Âu quý tộc
  - CAESAR SALAD (75) - Salad romaine sốt caesar, crouton bơ tỏi & ba rọi xông khói áp chảo
  - SEAWEED SALAD (75) - Salad rong biển tươi mát kết hợp sốt mè rang đậm vị
  - FRUIT SALAD (85) - Salad trái cây theo mùa, hạt hạnh nhân bùi béo & sốt ya-ua thanh nhẹ
  - GRILLED BEEF SALAD (95) - Salad bò Mỹ nướng góc cạnh, đậm đà nước sốt đặc trưng
- **Soups (Súp):**
  - PUMPKIN SOUP (45) - Súp bí đỏ hoàng gia mịn màng dùng kèm bánh mì nướng bơ tỏi
  - CORN SOUP (55) - Súp bắp ngọt nấu cùng cần tây & hành baro thanh dịu
  - PRAWN SOUP (65) - Súp kem tôm áp chảo béo ngậy dùng kèm bánh mì bơ tỏi giòn rụm
  - MUSHROOM CREAM SOUP (65) - Súp kem nấm cục béo ngậy đậm đà hương vị ẩm thực Tây Âu

### 🚨 OUTPUT CONSTRAINT
Return ONLY the full, unified, and compilation-free HTML code block. Do not provide partial snippets, omissions, or generic code comments. Ensure all Tailwind setups, CSS gradients, SVG gear motifs, and JS overlay selectors are written out completely so it is ready for an immediate, high-end presentation.