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
];

export const signatureDishes = menu
  .filter((item) => item.signature)
  .sort((a, b) => a.signature - b.signature)
  .map((item) => ({ ...item, image: `dish-${item.signature}.jpg` }));

export const formatPrice = (n) => `₦${n.toLocaleString("en-NG")}`;
