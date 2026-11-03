export const categories = ["Starters", "Grill", "Mains", "Sides", "Desserts", "Drinks"];

// Each item: id, category, name, description, price (₦), tags (spicy, vegetarian).
// `signature` items show on the home page, in `signatureOrder`, with dish-N.jpg.
export const menu = [
  {
    id: "suya-skewers",
    category: "Grill",
    name: "Suya-spiced beef skewers",
    description: "Thin-cut beef rubbed in house yaji, kissed by open flame, with raw onion, tomato and charred lime.",
    price: 9500,
    tags: ["spicy"],
    signature: 1,
  },
  {
    id: "smoked-jollof",
    category: "Mains",
    name: "Smoked jollof rice with grilled chicken",
    description: "Party-style jollof finished over firewood smoke, topped with a flame-grilled chicken thigh and sweet plantain.",
    price: 14500,
    tags: [],
    signature: 2,
  },
  {
    id: "fire-roasted-catfish",
    category: "Grill",
    name: "Whole fire-roasted catfish with pepper sauce",
    description: "A whole catfish roasted over coals, blistered skin, glossy red pepper sauce and grilled yam.",
    price: 24000,
    tags: ["spicy"],
    signature: 3,
  },
  {
    id: "lamb-ribs",
    category: "Grill",
    name: "Charred lamb ribs with yaji glaze",
    description: "Slow-cooked, then charred hard. A sticky yaji and honey glaze, sesame and spring onion.",
    price: 28500,
    tags: ["spicy"],
    signature: 4,
  },
  {
    id: "king-prawns",
    category: "Grill",
    name: "Grilled king prawns with garlic butter and chili",
    description: "Shell-on king prawns over high heat, basted in garlic butter with fresh chili and a charred lemon.",
    price: 26000,
    tags: ["spicy"],
    signature: 5,
  },
  {
    id: "caramelised-plantain",
    category: "Desserts",
    name: "Caramelised plantain with vanilla ice cream",
    description: "Ripe plantain caramelised in the pan, vanilla ice cream, a drizzle of honey and a pinch of sea salt.",
    price: 7500,
    tags: ["vegetarian"],
    signature: 6,
  },
  // Starters
  {
    id: "peppered-snails",
    category: "Starters",
    name: "Peppered snails",
    description: "Giant snails braised soft, then tossed in a smoky scotch bonnet and onion pepper.",
    price: 8500,
    tags: ["spicy"],
  },
  {
    id: "akara-bites",
    category: "Starters",
    name: "Akara bites with pepper mayo",
    description: "Crisp black-eyed bean fritters, light inside, with a whipped pepper mayonnaise.",
    price: 5000,
    tags: ["vegetarian"],
  },
  {
    id: "gizdodo",
    category: "Starters",
    name: "Gizdodo",
    description: "Grilled chicken gizzards and sweet plantain in a rich tomato and pepper sauce.",
    price: 6500,
    tags: ["spicy"],
  },
  {
    id: "charred-corn",
    category: "Starters",
    name: "Charred corn with yaji butter",
    description: "Sweet corn blackened over coals, brushed with yaji butter and finished with lime.",
    price: 4500,
    tags: ["vegetarian"],
  },
  {
    id: "pepper-soup",
    category: "Starters",
    name: "Goat pepper soup",
    description: "A clear, fragrant broth of tender goat, uziza and scent leaf. Warming and bold.",
    price: 7000,
    tags: ["spicy"],
  },
  // Grill
  {
    id: "asun",
    category: "Grill",
    name: "Asun goat",
    description: "Smoked goat cut small, fire-charred and tossed with onion and roasted peppers.",
    price: 12500,
    tags: ["spicy"],
  },
  {
    id: "half-chicken",
    category: "Grill",
    name: "Flame-grilled half chicken",
    description: "Marinated overnight in ginger, garlic and thyme, grilled over hardwood until the skin crackles.",
    price: 16000,
    tags: [],
  },
  // Mains
  {
    id: "ofada-stew",
    category: "Mains",
    name: "Ofada rice with ayamase",
    description: "Local ofada rice with a deep green pepper stew, assorted meats and boiled egg.",
    price: 13500,
    tags: ["spicy"],
  },
  {
    id: "egusi-pounded-yam",
    category: "Mains",
    name: "Egusi with smoked fish and pounded yam",
    description: "Melon seed soup with spinach and smoked fish, served with soft pounded yam.",
    price: 15000,
    tags: [],
  },
  {
    id: "banga-seabass",
    category: "Mains",
    name: "Sea bass in banga sauce",
    description: "Pan-roasted sea bass fillet in a palm fruit sauce with beletete leaf and starch.",
    price: 22000,
    tags: [],
  },
  {
    id: "beans-plantain",
    category: "Mains",
    name: "Ewa agoyin with fried plantain",
    description: "Slow-cooked honey beans under a dark, smoky pepper oil, with golden plantain and agege bread.",
    price: 9000,
    tags: ["vegetarian", "spicy"],
  },
  // Sides
  {
    id: "dodo",
    category: "Sides",
    name: "Dodo",
    description: "Ripe plantain, fried until the edges caramelise.",
    price: 3000,
    tags: ["vegetarian"],
  },
  {
    id: "grilled-yam",
    category: "Sides",
    name: "Fire-roasted yam",
    description: "Thick-cut yam roasted in the embers, with palm oil and pepper dip.",
    price: 3500,
    tags: ["vegetarian", "spicy"],
  },
  {
    id: "smoky-jollof-side",
    category: "Sides",
    name: "Side of smoked jollof",
    description: "Our party-style jollof, finished over firewood smoke.",
    price: 4500,
    tags: ["vegetarian"],
  },
  {
    id: "garden-salad",
    category: "Sides",
    name: "Charred garden salad",
    description: "Grilled tomatoes, cucumber, red onion and leaves with a citrus and pepper dressing.",
    price: 4000,
    tags: ["vegetarian"],
  },
  {
    id: "moi-moi",
    category: "Sides",
    name: "Moi moi",
    description: "Steamed bean pudding with red pepper and onion, soft and savoury.",
    price: 3500,
    tags: ["vegetarian"],
  },
  // Desserts
  {
    id: "puff-puff",
    category: "Desserts",
    name: "Puff puff with chocolate sauce",
    description: "Warm, airy dough balls dusted with nutmeg sugar, for dipping in dark chocolate.",
    price: 5500,
    tags: ["vegetarian"],
  },
  {
    id: "chin-chin-cheesecake",
    category: "Desserts",
    name: "Coconut cheesecake with chin chin crumb",
    description: "Baked coconut cheesecake on a crunchy chin chin base, with pineapple compote.",
    price: 7000,
    tags: ["vegetarian"],
  },
  {
    id: "zobo-sorbet",
    category: "Desserts",
    name: "Zobo sorbet",
    description: "Hibiscus, ginger and clove sorbet. Bright, cold and clean after the fire.",
    price: 5000,
    tags: ["vegetarian"],
  },
  // Drinks
  {
    id: "chapman",
    category: "Drinks",
    name: "House Chapman",
    description: "Our take on the classic: citrus, bitters and grenadine over crushed ice, with cucumber.",
    price: 4500,
    tags: [],
  },
  {
    id: "zobo",
    category: "Drinks",
    name: "Spiced zobo",
    description: "Chilled hibiscus with ginger, clove and pineapple. Alcohol-free.",
    price: 3000,
    tags: ["vegetarian"],
  },
  {
    id: "smoked-old-fashioned",
    category: "Drinks",
    name: "Smoke & Saffron old fashioned",
    description: "Bourbon, saffron honey and orange bitters, smoked at the table under a glass cloche.",
    price: 9500,
    tags: [],
  },
  {
    id: "palm-wine-spritz",
    category: "Drinks",
    name: "Palm wine spritz",
    description: "Fresh palm wine, sparkling water and a twist of lime. Light and gently sour.",
    price: 6000,
    tags: [],
  },
  {
    id: "tigernut",
    category: "Drinks",
    name: "Kunun aya",
    description: "Creamy tiger nut milk with dates and coconut, served cold.",
    price: 3500,
    tags: ["vegetarian"],
  },
];

export const signatureDishes = menu
  .filter((item) => item.signature)
  .sort((a, b) => a.signature - b.signature)
  .map((item) => ({ ...item, image: `dish-${item.signature}.jpg` }));

export const tagLabels = {
  spicy: "Spicy",
  vegetarian: "Vegetarian",
};

export const menuPage = {
  eyebrow: "The menu",
  title: "Fire, smoke and spice",
  lede: "Everything is cooked to order over hardwood and charcoal. Dishes marked with the flame are signatures.",
  note: "Prices include VAT. Please tell your server about any allergies before you order.",
};

export const formatPrice = (n) => `₦${n.toLocaleString("en-NG")}`;
