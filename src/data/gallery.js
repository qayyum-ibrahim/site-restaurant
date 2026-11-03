// Order and shapes match gallery-1.jpg to gallery-8.jpg in IMAGE-PROMPTS.md.
// ratio: the photo's shape. cols/rows: tile size on the desktop grid. feature: full width on mobile.
export const galleryPage = {
  eyebrow: "Gallery",
  title: "Inside the smoke",
  lede: "The fire, the plates and the room after dark. Select any photo to see it larger.",
};

export const galleryImages = [
  { src: "gallery-1.jpg", ratio: "3 / 2", cols: 2, rows: 2, feature: true, caption: "The open kitchen", alt: "Wide view of the open kitchen, chefs in silhouette in front of the fire grill, flames and sparks" },
  { src: "gallery-2.jpg", ratio: "4 / 5", cols: 1, rows: 2, caption: "Smoked rim, orange peel", alt: "A craft cocktail with a smoked rim and an orange peel garnish on a dark bar top, candle glow behind" },
  { src: "gallery-3.jpg", ratio: "3 / 2", cols: 1, rows: 1, caption: "On the flame", alt: "Meat on a flaming grill, flames licking the food against a dark background" },
  { src: "gallery-4.jpg", ratio: "1 / 1", cols: 1, rows: 1, caption: "Table for two", alt: "A set table seen from above with dark plates, brass cutlery, linen napkins, a candle and small dishes of food" },
  { src: "gallery-5.jpg", ratio: "4 / 5", cols: 1, rows: 2, caption: "The finishing touch", alt: "A chef's hands placing herbs on a plated dish with tweezers in a dark kitchen" },
  { src: "gallery-6.jpg", ratio: "3 / 2", cols: 2, rows: 1, feature: true, caption: "The bar", alt: "Rows of bottles lit from behind with amber light while a bartender pours a drink" },
  { src: "gallery-7.jpg", ratio: "1 / 1", cols: 1, rows: 2, caption: "Plantain and gold", alt: "Close-up of a dessert plate with ice cream, caramelised plantain and gold dust" },
  { src: "gallery-8.jpg", ratio: "3 / 2", cols: 2, rows: 1, caption: "The private room", alt: "A private dining room with one long dark table set for eight and candles down the middle" },
];
