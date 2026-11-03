# Brief: Restaurant Website

**Name:** Saffron & Smoke. A modern West African grill restaurant, fictional, in Lagos.
**Mood:** warm, dark, candle-lit. Ember glow on near-black. Feels premium but welcoming.
**Colors:** background #14100d, surface #1e1814, text #f3ebe0, muted text #b9a99a, accent ember #e0722f, gold #c9a35b.
**Fonts:** `@fontsource/cormorant-garamond` (headings), `@fontsource/dm-sans` (body).
**Pages:**
- Home: hero with the restaurant name and a "Reserve a table" button, short story teaser, 6 signature dishes, hours and location strip, final reservation call to action.
- Menu: category tabs (Starters, Grill, Mains, Sides, Desserts, Drinks). At least 4 items per category from `src/data/menu.js`. Each item has a name, a short description, a price in ₦, and optional tags (spicy, vegetarian).
- Our Story: the chef, the idea, the fire. About 3 short sections.
- Gallery: image grid with a lightbox (keyboard and touch friendly).
- Reservations: form with name, phone, date, time, number of guests and a note. Front-end validation. A success message replaces the form on submit. No data is sent anywhere.
- Contact: opening hours table, fake address and phone, an "Open now" badge computed from the hours, and a styled map placeholder box.
**Features:** sticky header that gets a background on scroll, accessible mobile menu, "Open now" badge, scroll reveal animation, lightbox.
**Images:** `hero.jpg`, `story.jpg`, `chef.jpg`, `interior.jpg`, `dish-1.jpg` to `dish-6.jpg`, `gallery-1.jpg` to `gallery-8.jpg`.

**Signature dishes (the six on the home page, in this order, matching `dish-1.jpg` to `dish-6.jpg`):** 1) Suya-spiced beef skewers, 2) Smoked jollof rice with grilled chicken, 3) Whole fire-roasted catfish with pepper sauce, 4) Charred lamb ribs with yaji glaze, 5) Grilled king prawns with garlic butter and chili, 6) Caramelised plantain with vanilla ice cream. Use these exact dishes and put them in `src/data/menu.js` too.

