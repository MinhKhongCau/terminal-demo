/**
 * Non-translatable menu structure: stable ids, category, price (’000 VND),
 * image, and allergen keys. All human-readable copy (name / description /
 * chef notes / pairing / allergen labels) lives in locales/{en,vi}.json and
 * is looked up by these ids — see useMenuItem() in the menu components.
 *
 * Images are local assets served from `public/images/` (Vite serves `public/`
 * at the site root, so the path is `/images/<file>.avif`). The `img()` Unsplash
 * helper below remains only as a fallback for dishes that have no local photo.
 */

export type MenuCategory =
  | "appetizers"
  | "salads"
  | "soups"
  | "mains"
  | "desserts"
  | "pizzas"
  | "tacos"
  | "beers"
  | "softdrinks";

export type AllergenKey =
  | "gluten"
  | "dairy"
  | "nuts"
  | "fish"
  | "shellfish"
  | "egg"
  | "soy";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  price: number;
  image: string;
  allergens: AllergenKey[];
}

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

export const MENU_CATEGORIES: MenuCategory[] = [
  "appetizers",
  "salads",
  "soups",
  "mains",
  "desserts",
  "pizzas",
  "tacos",
  "beers",
  "softdrinks",
];

export const MENU_ITEMS: MenuItem[] = [
  // ── Appetizers ──
  { id: "cold-cut-plate", category: "appetizers", price: 279, allergens: ["gluten", "dairy", "nuts"], image: "/images/cold_cut_plate.avif" },
  { id: "cheese-plate", category: "appetizers", price: 249, allergens: ["gluten", "dairy", "nuts"], image: "/images/cheese_plate.avif" },
  { id: "parma-burrata", category: "appetizers", price: 349, allergens: ["gluten", "dairy"], image: "/images/parma_burrata.avif" },
  { id: "beef-carpaccio", category: "appetizers", price: 199, allergens: ["dairy"], image: "/images/beef_carpaccio.avif" },
  { id: "bruschetta-smoked-salmon", category: "appetizers", price: 79, allergens: ["gluten", "dairy", "fish"], image: "/images/banh_mi_ca_hoi_xong_khoi.avif" },
  { id: "bruschetta-parma", category: "appetizers", price: 89, allergens: ["gluten", "dairy"], image: "/images/banh_mi_thit_heo_muoi.avif" },

  // ── Salads ──
  { id: "garden-salad", category: "salads", price: 89, allergens: [], image: "/images/garden_salad.avif" },
  { id: "tropical-fruit-salad-burrata", category: "salads", price: 249, allergens: ["dairy"], image: "/images/tropical_fruit_burata_salad.avif" },
  { id: "smoked-salmon-salad", category: "salads", price: 139, allergens: ["fish"], image: "/images/xalad_ca_hoi_xong_khoi.avif" },

  // ── Soups ──
  { id: "pumpkin-soup", category: "soups", price: 59, allergens: ["gluten", "dairy"], image: "/images/xoup_bi_do.avif" },
  { id: "mushroom-soup", category: "soups", price: 59, allergens: ["gluten", "dairy"], image: "/images/xoup_kem_nam.avif" },

  // ── Mains ──
  { id: "spinach-stuffed-chicken-breast", category: "mains", price: 139, allergens: ["dairy", "nuts"], image: "/images/uc_ga_nhoi_cai_bo_xoi.avif" },
  { id: "pan-seared-salmon", category: "mains", price: 239, allergens: ["fish", "dairy"], image: "/images/ca_hoi_ap_chao.avif" },
  { id: "ribeye-hokube-steaks", category: "mains", price: 499, allergens: [], image: "/images/rib_eye_hokube_steak.avif" },
  { id: "usda-striploin-steaks", category: "mains", price: 549, allergens: [], image: "/images/usda_striploin.avif" },
  { id: "top-blade-aukube-steaks", category: "mains", price: 299, allergens: ["dairy"], image: "/images/top_blade_steaks.avif" },
  { id: "german-sausage", category: "mains", price: 179, allergens: ["gluten"], image: "/images/xucxich3loai.avif" },
  { id: "lamb-sausage", category: "mains", price: 209, allergens: ["gluten"], image: "/images/xucxich3loai.avif" },
  { id: "hickory-sausage", category: "mains", price: 199, allergens: ["gluten"], image: "/images/xucxich3loai.avif" },
  { id: "crispy-chicken-burger", category: "mains", price: 119, allergens: ["gluten", "dairy", "egg"], image: "/images/burger_ga.avif" },
  { id: "beef-burger", category: "mains", price: 139, allergens: ["gluten", "dairy", "egg"], image: "/images/burger_bo.avif" },
  { id: "seafood-pasta", category: "mains", price: 199, allergens: ["gluten", "shellfish", "dairy"], image: "/images/sea_food_pasta.avif" },
  { id: "shrimp-pasta", category: "mains", price: 159, allergens: ["gluten", "shellfish", "dairy"], image: "/images/shrimp_pasta.avif" },
  { id: "bolognese-pasta", category: "mains", price: 99, allergens: ["gluten", "dairy"], image: "/images/bolognese_pasta.avif" },
  { id: "pesto-pasta-chicken-panko", category: "mains", price: 159, allergens: ["gluten", "dairy", "nuts"], image: "/images/pesto_pasta_chicken_panko.avif" },
  { id: "carbonara-pasta", category: "mains", price: 139, allergens: ["gluten", "dairy", "egg"], image: "/images/carbonara_pasta.avif" },

  // ── Desserts ── (no local photo yet — Unsplash fallback)
  { id: "pannacotta", category: "desserts", price: 59, allergens: ["dairy"], image: img("1488477181946-6281dee33e6d") },
  { id: "tiramisu", category: "desserts", price: 79, allergens: ["gluten", "dairy", "egg"], image: img("1488477181946-6281dee33e6d") },

  // ── Pizzas ──
  { id: "pizza-four-cheese", category: "pizzas", price: 139, allergens: ["gluten", "dairy"], image: "/images/four_cheese_pizza.avif" },
  { id: "pizza-chicken-unagi", category: "pizzas", price: 139, allergens: ["gluten", "dairy", "fish", "soy"], image: "/images/chicken_unagi_pizza.avif" },
  { id: "pizza-shrimp-mayo", category: "pizzas", price: 199, allergens: ["gluten", "dairy", "shellfish", "egg"], image: "/images/shrimp_mayo_pizza.avif" },
  { id: "pizza-soy-beef", category: "pizzas", price: 179, allergens: ["gluten", "dairy", "soy"], image: "/images/beef_pizza.avif" },
  { id: "pizza-meatlove", category: "pizzas", price: 189, allergens: ["gluten", "dairy"], image: "/images/meatlove_pizza.avif" },
  { id: "pizza-njuda-mushroom", category: "pizzas", price: 149, allergens: ["gluten", "dairy"], image: "/images/njuda_mushroom_pizza.avif" },
  { id: "pizza-margherita", category: "pizzas", price: 99, allergens: ["gluten", "dairy"], image: "/images/margherita_pizza.avif" },
  { id: "pizza-veggie", category: "pizzas", price: 119, allergens: ["gluten", "dairy"], image: "/images/veggie_pizza.avif" },
  { id: "pizza-parma-burrata", category: "pizzas", price: 349, allergens: ["gluten", "dairy"], image: "/images/parma_burrata_pizza.avif" },
  { id: "pizza-seafood", category: "pizzas", price: 209, allergens: ["gluten", "dairy", "shellfish"], image: "/images/seafood_pizza.avif" },

  // ── Tacos & Fries ──
  { id: "smoked-beef-quesadillas", category: "tacos", price: 149, allergens: ["gluten", "dairy"], image: "/images/chicken_quesidilas.avif" },
  { id: "chicken-quesadillas", category: "tacos", price: 149, allergens: ["gluten", "dairy"], image: "/images/chicken_quesidilas.avif" },
  { id: "smoked-beef-burrito", category: "tacos", price: 179, allergens: ["gluten", "dairy"], image: "/images/beef_smoke_burito.avif" },
  { id: "chicken-burritos", category: "tacos", price: 149, allergens: ["gluten", "dairy"], image: "/images/chicken_burito.avif" },
  { id: "smoked-beef-nachos", category: "tacos", price: 189, allergens: ["gluten", "dairy"], image: "/images/smoke_beef_nachos.avif" },
  { id: "chicken-nachos", category: "tacos", price: 169, allergens: ["gluten", "dairy"], image: "/images/chicken_nachos.avif" },
  { id: "smoked-beef-tapas", category: "tacos", price: 109, allergens: ["gluten", "egg"], image: "/images/beef_tapas.avif" },
  { id: "smoked-beef-taco", category: "tacos", price: 99, allergens: ["gluten"], image: "/images/beef_tacos.avif" },
  { id: "chicken-taco", category: "tacos", price: 79, allergens: ["gluten"], image: "/images/chicken_tacos.avif" },
  { id: "french-fries", category: "tacos", price: 69, allergens: ["egg"], image: img("1488477181946-6281dee33e6d") },
  { id: "chicken-unagi", category: "tacos", price: 89, allergens: ["fish", "soy"], image: "/images/chicken_unagi.avif" },
  { id: "chicken-popcorn", category: "tacos", price: 79, allergens: ["gluten", "egg"], image: "/images/chicken_popcorn.avif" },

  // ── Beers & Wine ──
  { id: "ruou-vang-uccello-dl-sole", category: "beers", price: 899, allergens: [], image: img("1510812431401-41d2bd2722f3") },
  { id: "corona-extra", category: "beers", price: 89, allergens: ["gluten"], image: img("1535958636474-b021ee887b13") },
  { id: "kistoffel-brune", category: "beers", price: 99, allergens: ["gluten"], image: img("1566633806827-5b5dd14ae24a") },
  { id: "arcobrau-zwicklbier", category: "beers", price: 139, allergens: ["gluten"], image: img("1566633806827-5b5dd14ae24a") },
  { id: "schnerider-weisse-tap", category: "beers", price: 199, allergens: ["gluten"], image: img("1566633806827-5b5dd14ae24a") },
  { id: "budweiser-budvar-dark", category: "beers", price: 139, allergens: ["gluten"], image: img("1535958636474-b021ee887b13") },
  { id: "kronenbourg-1664-blanc", category: "beers", price: 89, allergens: ["gluten"], image: img("1535958636474-b021ee887b13") },

  // ── Soft Drinks ──
  { id: "nuoc-khoang-vikola", category: "softdrinks", price: 55, allergens: [], image: img("1548839140-29a749e1cf4d") },
  { id: "nuoc-khoang-co-gas-vikoda", category: "softdrinks", price: 55, allergens: [], image: img("1558618666-fcd25c85cd64") },
  { id: "coca-cola", category: "softdrinks", price: 35, allergens: [], image: img("1554866585-cd94860890b7") },
];

export const MENU_BY_CATEGORY: Record<MenuCategory, MenuItem[]> =
  MENU_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = MENU_ITEMS.filter((item) => item.category === cat);
    return acc;
  }, {} as Record<MenuCategory, MenuItem[]>);
