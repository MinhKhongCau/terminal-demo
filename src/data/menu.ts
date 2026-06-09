/**
 * Non-translatable menu structure: stable ids, category, price (’000 VND),
 * image, and allergen keys. All human-readable copy (name / description /
 * chef notes / pairing / allergen labels) lives in locales/{en,vi}.json and
 * is looked up by these ids — see useMenuItem() in the menu components.
 *
 * Images are local assets served from `public/images/` (Vite serves `public/`
 * at the site root, so the path is `/images/<file>.jpg`). The `img()` Unsplash
 * helper below remains only as a fallback for dishes that have no local photo.
 */

export type MenuCategory =
  | "appetizers"
  | "salads"
  | "soups"
  | "mains"
  | "desserts"
  | "pizzas"
  | "tacos";

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
];

export const MENU_ITEMS: MenuItem[] = [
  // ── Appetizers ──
  { id: "cold-cut-plate", category: "appetizers", price: 279, allergens: ["gluten", "dairy", "nuts"], image: "/images/cold_cut_plate.jpg" },
  { id: "cheese-plate", category: "appetizers", price: 249, allergens: ["gluten", "dairy", "nuts"], image: "/images/cheese_plate.jpg" },
  { id: "parma-burrata", category: "appetizers", price: 349, allergens: ["gluten", "dairy"], image: "/images/parma_burrata.jpg" },
  { id: "beef-carpaccio", category: "appetizers", price: 199, allergens: ["dairy"], image: "/images/beef_carpaccio.jpg" },
  { id: "bruschetta-smoked-salmon", category: "appetizers", price: 79, allergens: ["gluten", "dairy", "fish"], image: "/images/banh_mi_ca_hoi_xong_khoi.jpg" },
  { id: "bruschetta-parma", category: "appetizers", price: 89, allergens: ["gluten", "dairy"], image: "/images/banh_mi_thit_heo_muoi.jpg" },

  // ── Salads ──
  { id: "garden-salad", category: "salads", price: 89, allergens: [], image: "/images/garden_salad.jpg" },
  { id: "tropical-fruit-salad-burrata", category: "salads", price: 249, allergens: ["dairy"], image: "/images/tropical_fruit_burata_salad.jpg" },
  { id: "smoked-salmon-salad", category: "salads", price: 139, allergens: ["fish"], image: "/images/xalad_ca_hoi_xong_khoi.jpg" },

  // ── Soups ──
  { id: "pumpkin-soup", category: "soups", price: 59, allergens: ["gluten", "dairy"], image: "/images/xoup_bi_do.jpg" },
  { id: "mushroom-soup", category: "soups", price: 59, allergens: ["gluten", "dairy"], image: "/images/xoup_kem_nam.jpg" },

  // ── Mains ──
  { id: "spinach-stuffed-chicken-breast", category: "mains", price: 139, allergens: ["dairy", "nuts"], image: "/images/uc_ga_nhoi_cai_bo_xoi.jpg" },
  { id: "pan-seared-salmon", category: "mains", price: 239, allergens: ["fish", "dairy"], image: "/images/ca_hoi_ap_chao.jpg" },
  { id: "ribeye-hokube-steaks", category: "mains", price: 499, allergens: [], image: "/images/rib_eye_hokube_steak.jpg" },
  { id: "usda-striploin-steaks", category: "mains", price: 549, allergens: [], image: "/images/usda_striploin.jpg" },
  { id: "top-blade-aukube-steaks", category: "mains", price: 299, allergens: ["dairy"], image: "/images/top_blade_steaks.jpg" },
  { id: "german-sausage", category: "mains", price: 179, allergens: ["gluten"], image: "/images/xucxich3loai.jpg" },
  { id: "lamb-sausage", category: "mains", price: 209, allergens: ["gluten"], image: "/images/xucxich3loai.jpg" },
  { id: "hickory-sausage", category: "mains", price: 199, allergens: ["gluten"], image: "/images/xucxich3loai.jpg" },
  { id: "crispy-chicken-burger", category: "mains", price: 119, allergens: ["gluten", "dairy", "egg"], image: "/images/burger_ga.jpg" },
  { id: "beef-burger", category: "mains", price: 139, allergens: ["gluten", "dairy", "egg"], image: "/images/burger_bo.jpg" },
  { id: "seafood-pasta", category: "mains", price: 199, allergens: ["gluten", "shellfish", "dairy"], image: "/images/sea_food_pasta.jpg" },
  { id: "shrimp-pasta", category: "mains", price: 159, allergens: ["gluten", "shellfish", "dairy"], image: "/images/shrimp_pasta.jpg" },
  { id: "bolognese-pasta", category: "mains", price: 99, allergens: ["gluten", "dairy"], image: "/images/bolognese_pasta.jpg" },
  { id: "pesto-pasta-chicken-panko", category: "mains", price: 159, allergens: ["gluten", "dairy", "nuts"], image: "/images/pesto_pasta_chicken_panko.jpg" },
  { id: "carbonara-pasta", category: "mains", price: 139, allergens: ["gluten", "dairy", "egg"], image: "/images/carbonara_pasta.jpg" },

  // ── Desserts ── (no local photo yet — Unsplash fallback)
  { id: "pannacotta", category: "desserts", price: 59, allergens: ["dairy"], image: img("1488477181946-6281dee33e6d") },
  { id: "tiramisu", category: "desserts", price: 79, allergens: ["gluten", "dairy", "egg"], image: img("1488477181946-6281dee33e6d") },

  // ── Pizzas ──
  { id: "pizza-four-cheese", category: "pizzas", price: 139, allergens: ["gluten", "dairy"], image: "/images/four_cheese_pizza.jpg" },
  { id: "pizza-chicken-unagi", category: "pizzas", price: 139, allergens: ["gluten", "dairy", "fish", "soy"], image: "/images/chicken_unagi_pizza.jpg" },
  { id: "pizza-shrimp-mayo", category: "pizzas", price: 199, allergens: ["gluten", "dairy", "shellfish", "egg"], image: "/images/shrimp_mayo_pizza.jpg" },
  { id: "pizza-soy-beef", category: "pizzas", price: 179, allergens: ["gluten", "dairy", "soy"], image: "/images/beef_pizza.jpg" },
  { id: "pizza-meatlove", category: "pizzas", price: 189, allergens: ["gluten", "dairy"], image: "/images/meatlove_pizza.jpg" },
  { id: "pizza-njuda-mushroom", category: "pizzas", price: 149, allergens: ["gluten", "dairy"], image: "/images/njuda_mushroom_pizza.jpg" },
  { id: "pizza-margherita", category: "pizzas", price: 99, allergens: ["gluten", "dairy"], image: "/images/margherita_pizza.jpg" },
  { id: "pizza-veggie", category: "pizzas", price: 119, allergens: ["gluten", "dairy"], image: "/images/veggie_pizza.jpg" },
  { id: "pizza-parma-burrata", category: "pizzas", price: 349, allergens: ["gluten", "dairy"], image: "/images/parma_burrata_pizza.jpg" },
  { id: "pizza-seafood", category: "pizzas", price: 209, allergens: ["gluten", "dairy", "shellfish"], image: "/images/seafood_pizza.jpg" },

  // ── Tacos & Fries ──
  { id: "smoked-beef-quesadillas", category: "tacos", price: 149, allergens: ["gluten", "dairy"], image: "/images/chicken_quesidilas.jpg" },
  { id: "chicken-quesadillas", category: "tacos", price: 149, allergens: ["gluten", "dairy"], image: "/images/chicken_quesidilas.jpg" },
  { id: "smoked-beef-burrito", category: "tacos", price: 179, allergens: ["gluten", "dairy"], image: "/images/beef_smoke_burito.jpg" },
  { id: "chicken-burritos", category: "tacos", price: 149, allergens: ["gluten", "dairy"], image: "/images/chicken_burito.jpg" },
  { id: "smoked-beef-nachos", category: "tacos", price: 189, allergens: ["gluten", "dairy"], image: "/images/smoke_beef_nachos.jpg" },
  { id: "chicken-nachos", category: "tacos", price: 169, allergens: ["gluten", "dairy"], image: "/images/chicken_nachos.jpg" },
  { id: "smoked-beef-tapas", category: "tacos", price: 109, allergens: ["gluten", "egg"], image: "/images/beef_tapas.jpg" },
  { id: "smoked-beef-taco", category: "tacos", price: 99, allergens: ["gluten"], image: "/images/beef_tacos.jpg" },
  { id: "chicken-taco", category: "tacos", price: 79, allergens: ["gluten"], image: "/images/chicken_tacos.jpg" },
  { id: "french-fries", category: "tacos", price: 69, allergens: ["egg"], image: img("1488477181946-6281dee33e6d") },
  { id: "chicken-unagi", category: "tacos", price: 89, allergens: ["fish", "soy"], image: "/images/chicken_unagi.jpg" },
  { id: "chicken-popcorn", category: "tacos", price: 79, allergens: ["gluten", "egg"], image: "/images/chicken_popcorn.jpg" },
];

export const MENU_BY_CATEGORY: Record<MenuCategory, MenuItem[]> =
  MENU_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = MENU_ITEMS.filter((item) => item.category === cat);
    return acc;
  }, {} as Record<MenuCategory, MenuItem[]>);
