export const storyPage = {
  eyebrow: "Our story",
  title: "The chef, the idea, the fire",
  lede: "Saffron & Smoke began with a charcoal grill on a Lagos street corner and a family suya recipe. This is how it became a room.",
};

export const storySections = [
  {
    id: "chef",
    eyebrow: "The chef",
    title: "Adaeze Okonkwo",
    body: [
      "Adaeze learned to cook beside her grandmother in Enugu, where the fire was lit before sunrise and nobody measured anything. She trained in kitchens in Accra and London, then came home with one question: why do we save our best food for the roadside?",
      "She still walks the line every night, tasting each pepper sauce and turning the first skewers herself.",
    ],
    quote: "Fire is honest. It tells you right away if you rushed.",
    image: { src: "chef.jpg", alt: "Chef Adaeze Okonkwo in a dark apron with arms folded, the glow of the grill behind her", label: "The chef" },
  },
  {
    id: "idea",
    eyebrow: "The idea",
    title: "Street flavour, candle-lit room",
    body: [
      "Suya stands, bukka pots and party jollof are the heart of how Lagos eats. We wanted to cook that food with care, serve it slowly and give it a room it deserves.",
      "So the menu stays close to home. The spices are ground in-house, the plantain comes from the same market every morning, and the room is lit by candles, not screens.",
    ],
    image: { src: "interior.jpg", alt: "The dining room at night with dark wood tables, brass candle holders and warm pendant lights", label: "The room" },
  },
  {
    id: "fire",
    eyebrow: "The fire",
    title: "No gas. No shortcuts.",
    body: [
      "Our grill burns hardwood and charcoal, lit each afternoon and fed for twelve hours. Every skewer, fish and rib passes through the flame before it reaches you.",
      "Smoke takes time. It is the one ingredient we cannot buy, so we never hurry it.",
    ],
    image: { src: "story.jpg", alt: "A cook's hands turning skewers over glowing charcoal, sparks rising", label: "Over the coals" },
  },
];

export const storyValues = [
  { value: "12 hrs", label: "the fire burns each service day" },
  { value: "3", label: "spice blends ground in-house" },
  { value: "0", label: "gas burners in the kitchen" },
];

export const storyCta = {
  title: "Taste the fire for yourself",
  button: "Reserve a table",
  secondary: "See the menu",
};
