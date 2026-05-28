/* Sample menu data — three categories */
const APPETIZERS = [
  { name: 'CALAMARI',                       price: '85',  desc: 'Mực chiên giòn dùng kèm với salad & sốt Tartar', allergens: ['Gluten','Shellfish'], pairing: 'Crisp Sauvignon Blanc to cut the batter.' },
  { name: 'GRILLED BEEF W. SPRING ONION OIL', price: '95', desc: 'Bò nướng mỡ hành', allergens: ['Soy'], pairing: 'A glass of light Pinot Noir.' },
  { name: 'HOI AN BRUSCHETTA',              price: '85',  desc: 'Bánh mì nướng phủ pate gà, đùi heo muối & ớt rim', allergens: ['Gluten','Egg'], pairing: 'Sparkling rosé, served chilled.' },
  { name: 'BEEF BRUSCHETTA',                price: '95',  desc: 'Bánh mì nướng dùng kèm thịt bò xào kiểu Nhật', allergens: ['Gluten','Soy'], pairing: 'A bold Malbec.' },
  { name: 'FORACCIA & CIABATTA',            price: '45',  desc: 'Bánh mì dẹt & bánh mì tổ kén kiểu Ý dùng kèm với bơ miso', allergens: ['Gluten','Soy','Dairy'], pairing: 'House espresso or a green tea.' },
  { name: 'CHICKEN PATE & BREAD',           price: '55',  desc: 'Bánh mì đen dùng kèm Pate gà', allergens: ['Gluten','Egg'], pairing: 'Dry Riesling.' },
  { name: 'SEA URCHIN PATE & BREAD',        price: '75',  desc: 'Bánh mì đen dùng kèm Pate nhum', allergens: ['Gluten','Shellfish'], pairing: 'Brut Champagne.' },
  { name: 'COLD CUTS',                      price: '245', desc: 'Đùi heo muối, phô mai, Pate nhum trải Olive & bánh mì đen', allergens: ['Gluten','Dairy','Shellfish'], pairing: 'A board of charcuterie deserves Barolo.' },
];

const SALADS = [
  { name: 'BALSAMIC SALAD',     price: '55', desc: 'Salad dầu giấm kiểu Âu', allergens: [], pairing: 'A light Pinot Grigio.' },
  { name: 'CAESAR SALAD',       price: '75', desc: 'Salad romain sốt ceasar, crouton & thịt muối', allergens: ['Gluten','Egg','Dairy','Fish'], pairing: 'Chardonnay, lightly oaked.' },
  { name: 'SEAWEED SALAD',      price: '75', desc: 'Salad rong biển sốt mè', allergens: ['Soy','Sesame'], pairing: 'Cold Junmai sake.' },
  { name: 'FRUIT SALAD',        price: '85', desc: 'Salad trái cây theo mùa, hạnh nhân & sốt ya-ua', allergens: ['Dairy','Nuts'], pairing: 'A mimosa for brunch.' },
  { name: 'GRILLED BEEF SALAD', price: '95', desc: 'Salad bò Mỹ nướng', allergens: ['Soy'], pairing: 'Côtes du Rhône.' },
];

const SOUPS = [
  { name: 'PUMPKIN SOUP',        price: '45', desc: 'Súp bí đỏ dùng kèm bánh mì bơ tỏi', allergens: ['Gluten','Dairy'], pairing: 'Buttery Chardonnay.' },
  { name: 'CORN SOUP',           price: '55', desc: 'Súp bắp nấu cùng cần tây & baro', allergens: ['Dairy'], pairing: 'A glass of cool Riesling.' },
  { name: 'PRAWN SOUP',          price: '65', desc: 'Súp kem tôm dùng kèm bánh mì bơ tỏi', allergens: ['Gluten','Dairy','Shellfish'], pairing: 'Albariño.' },
  { name: 'MUSHROOM CREAM SOUP', price: '65', desc: 'Súp kem nấm', allergens: ['Dairy'], pairing: 'Earthy Pinot Noir.' },
];

const BRANCHES = [
  { name: 'THE TERMINAL · CENTRAL',  address: '47 Old Freight Lane, District 1, HCMC', phone: '+84 28 5512 0924' },
  { name: 'THE TERMINAL · RIVERSIDE', address: '12 Bến Vân Đồn, District 4, HCMC',     phone: '+84 28 5512 0925' },
  { name: 'THE TERMINAL · GARDEN',   address: '90 Phan Xích Long, Phú Nhuận, HCMC',    phone: '+84 28 5512 0926' },
];

const CATEGORIES = [
  { id: 'appetizer', label: 'Appetizer', items: APPETIZERS, icon: <CatIcon kind="bruschetta"/> },
  { id: 'salad',     label: 'Salad',     items: SALADS,     icon: <CatIcon kind="salad"/> },
  { id: 'soup',      label: 'Soup',      items: SOUPS,      icon: <CatIcon kind="soup"/> },
];

function CatIcon({ kind }) {
  const props = { width: 32, height: 32, viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 1.6, className: "text-brass shrink-0 hidden sm:block" };
  if (kind === 'bruschetta') return (
    <svg {...props} aria-hidden="true">
      <path d="M10 32c4-6 12-10 22-10s18 4 22 10"/>
      <path d="M10 32c0 6 8 12 22 12s22-6 22-12"/>
      <path d="M22 26c2-2 6-2 8 0M34 24c2-2 6-2 8 0"/>
    </svg>
  );
  if (kind === 'salad') return (
    <svg {...props} aria-hidden="true">
      <path d="M8 30h48c-2 16-14 22-24 22S10 46 8 30z"/>
      <path d="M20 28c-2-8 4-12 8-8M30 26c2-10 12-8 12 0M40 28c0-6 8-6 10 0"/>
    </svg>
  );
  if (kind === 'soup') return (
    <svg {...props} aria-hidden="true">
      <ellipse cx="32" cy="28" rx="22" ry="6"/>
      <path d="M10 28v6c0 8 10 14 22 14s22-6 22-14v-6"/>
      <path d="M24 18c-2-4 2-6 4-4M32 16c0-4 4-4 4 0M40 18c0-3 4-3 4 0"/>
    </svg>
  );
  return null;
}

Object.assign(window, { APPETIZERS, SALADS, SOUPS, BRANCHES, CATEGORIES, CatIcon });
