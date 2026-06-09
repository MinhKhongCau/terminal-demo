/**
 * Non-translatable menu structure: stable ids, category, price (’000 VND),
 * image, and allergen keys. All human-readable copy (name / description /
 * chef notes / pairing / allergen labels) lives in locales/{en,vi}.json and
 * is looked up by these ids — see useMenuItem() in the menu components.
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
  { id: "cold-cut-plate", category: "appetizers", price: 279, allergens: ["gluten", "dairy", "nuts"], image: img("1541529086526-db283c563270") },
  { id: "cheese-plate", category: "appetizers", price: 249, allergens: ["gluten", "dairy", "nuts"], image: img("1589985643862-6b19e87edb48") },
  { id: "parma-burrata", category: "appetizers", price: 349, allergens: ["gluten", "dairy"], image: img("1514432324607-2e467f4af445") },
  { id: "beef-carpaccio", category: "appetizers", price: 199, allergens: ["dairy"], image: img("1546069901-ba9599a7e63c") },
  { id: "bruschetta-smoked-salmon", category: "appetizers", price: 79, allergens: ["gluten", "dairy", "fish"], image: img("1572656631137-7935297eff55") },
  { id: "bruschetta-parma", category: "appetizers", price: 89, allergens: ["gluten", "dairy"], image: img("1504674900247-0877df9cc836") },

  // ── Salads ──
  { id: "garden-salad", category: "salads", price: 89, allergens: [], image: img("1512621776951-a57141f2eefd") },
  { id: "tropical-fruit-salad-burrata", category: "salads", price: 249, allergens: ["dairy"], image: img("1490645935967-10de6ba17061") },
  { id: "smoked-salmon-salad", category: "salads", price: 139, allergens: ["fish"], image: img("1546069901-ba9599a7e63c") },

  // ── Soups ──
  { id: "soup-of-the-day", category: "soups", price: 59, allergens: ["gluten", "dairy"], image: img("1476718406336-bb5a9690ee2a") },

  // ── Mains ──
  { id: "spinach-stuffed-chicken-breast", category: "mains", price: 139, allergens: ["dairy", "nuts"], image: img("1598103442097-8b74394b95c6") },
  { id: "pan-seared-salmon", category: "mains", price: 239, allergens: ["fish", "dairy"], image: img("1546069901-ba9599a7e63c") },
  { id: "ribeye-hokube-steaks", category: "mains", price: 499, allergens: [], image: img("1544025162-d76694265947") },
  { id: "usda-striploin-steaks", category: "mains", price: 499, allergens: [], image: img("1600888675559-8d3d20c3d4e7") },
  { id: "top-blade-aukube-steaks", category: "mains", price: 299, allergens: ["dairy"], image: img("1544025162-d76694265947") },
  { id: "german-sausage", category: "mains", price: 179, allergens: ["gluten"], image: img("1555939594-58d7cb561ad1") },
  { id: "lamb-sausage", category: "mains", price: 209, allergens: ["gluten"], image: img("1555939594-58d7cb561ad1") },
  { id: "hickory-sausage", category: "mains", price: 199, allergens: ["gluten"], image: img("1555939594-58d7cb561ad1") },
  { id: "crispy-chicken-burger", category: "mains", price: 119, allergens: ["gluten", "dairy", "egg"], image: img("1550547659-c8a38175e3a7") },
  { id: "beef-burger", category: "mains", price: 139, allergens: ["gluten", "dairy", "egg"], image: img("1568901346375-23c9450c58cd") },
  { id: "seafood-pasta", category: "mains", price: 199, allergens: ["gluten", "shellfish", "dairy"], image: img("1621996346565-e3dbc646d9a9") },
  { id: "shrimp-pasta", category: "mains", price: 159, allergens: ["gluten", "shellfish", "dairy"], image: img("1621996346565-e3dbc646d9a9") },
  { id: "bolognese-pasta", category: "mains", price: 99, allergens: ["gluten", "dairy"], image: img("1621996346565-e3dbc646d9a9") },
  { id: "pesto-pasta-chicken-panko", category: "mains", price: 159, allergens: ["gluten", "dairy", "nuts"], image: img("1621996346565-e3dbc646d9a9") },
  { id: "carbonara-pasta", category: "mains", price: 139, allergens: ["gluten", "dairy", "egg"], image: img("1621996346565-e3dbc646d9a9") },

  // ── Desserts ──
  { id: "pannacotta", category: "desserts", price: 59, allergens: ["dairy"], image: img("1488477181946-6281dee33e6d") },
  { id: "tiramisu", category: "desserts", price: 79, allergens: ["gluten", "dairy", "egg"], image: img("1571115177098-24ec42ed204d") },

  // ── Pizzas ──
  { id: "pizza-four-cheese", category: "pizzas", price: 139, allergens: ["gluten", "dairy"], image: img("1604068549290-dea0e4a305ca") },
  { id: "pizza-chicken-unagi", category: "pizzas", price: 139, allergens: ["gluten", "dairy", "fish", "soy"], image: img("1604068549290-dea0e4a305ca") },
  { id: "pizza-shrimp-mayo", category: "pizzas", price: 199, allergens: ["gluten", "dairy", "shellfish", "egg"], image: img("1604068549290-dea0e4a305ca") },
  { id: "pizza-soy-beef", category: "pizzas", price: 179, allergens: ["gluten", "dairy", "soy"], image: img("1604068549290-dea0e4a305ca") },
  { id: "pizza-meatlove", category: "pizzas", price: 189, allergens: ["gluten", "dairy"], image: img("1604068549290-dea0e4a305ca") },
  { id: "pizza-njuda-mushroom", category: "pizzas", price: 149, allergens: ["gluten", "dairy"], image: img("1604068549290-dea0e4a305ca") },
  { id: "pizza-margherita", category: "pizzas", price: 99, allergens: ["gluten", "dairy"], image: img("1604068549290-dea0e4a305ca") },
  { id: "pizza-veggie", category: "pizzas", price: 119, allergens: ["gluten", "dairy"], image: img("1604068549290-dea0e4a305ca") },
  { id: "pizza-parma-burrata", category: "pizzas", price: 349, allergens: ["gluten", "dairy"], image: img("1604068549290-dea0e4a305ca") },
  { id: "pizza-seafood", category: "pizzas", price: 209, allergens: ["gluten", "dairy", "shellfish"], image: img("1604068549290-dea0e4a305ca") },

  // ── Tacos & Fries ──
  { id: "smoked-beef-quesadillas", category: "tacos", price: 149, allergens: ["gluten", "dairy"], image: img("1565299585323-38d6b0865b47") },
  { id: "chicken-quesadillas", category: "tacos", price: 149, allergens: ["gluten", "dairy"], image: img("1565299585323-38d6b0865b47") },
  { id: "smoked-beef-burrito", category: "tacos", price: 179, allergens: ["gluten", "dairy"], image: img("1565299585323-38d6b0865b47") },
  { id: "chicken-burritos", category: "tacos", price: 149, allergens: ["gluten", "dairy"], image: img("1565299585323-38d6b0865b47") },
  { id: "smoked-beef-nachos", category: "tacos", price: 189, allergens: ["gluten", "dairy"], image: img("1535797993636-21bbd80d7a7f") },
  { id: "chicken-nachos", category: "tacos", price: 169, allergens: ["gluten", "dairy"], image: img("1535797993636-21bbd80d7a7f") },
  { id: "smoked-beef-tapas", category: "tacos", price: 109, allergens: ["gluten", "egg"], image: img("1585238341710-4dd0e06a3c91") },
  { id: "smoked-beef-taco", category: "tacos", price: 99, allergens: ["gluten"], image: img("1565299585323-38d6b0865b47") },
  { id: "chicken-taco", category: "tacos", price: 79, allergens: ["gluten"], image: img("1565299585323-38d6b0865b47") },
  { id: "french-fries", category: "tacos", price: 69, allergens: ["egg"], image: img("1585238341710-4dd0e06a3c91") },
  { id: "chicken-unagi", category: "tacos", price: 89, allergens: ["fish", "soy"], image: img("1598103442097-8b74394b95c6") },
  { id: "chicken-popcorn", category: "tacos", price: 79, allergens: ["gluten", "egg"], image: img("1598103442097-8b74394b95c6") },
];

export const MENU_BY_CATEGORY: Record<MenuCategory, MenuItem[]> =
  MENU_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = MENU_ITEMS.filter((item) => item.category === cat);
    return acc;
  }, {} as Record<MenuCategory, MenuItem[]>);
