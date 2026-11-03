# Saffron & Smoke

A demo website for a fictional modern West African grill in Lagos. Front end only: no backend, no real bookings.
Demo project. This is not a real business.

Built with Vite, React, React Router and plain CSS. Hosted on Vercel.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Add real photos

Put JPG files in `public/images/` with these exact names. Until a file exists, the site shows a branded ember fallback in its place, so nothing breaks.

| File | Used on | Shape |
| --- | --- | --- |
| `hero.jpg` | Home hero | landscape |
| `story.jpg` | Home story teaser, Our Story "The fire" | portrait 4:5 |
| `chef.jpg` | Our Story "The chef" | portrait 4:5 |
| `interior.jpg` | Our Story "The idea", Home final call to action | landscape |
| `dish-1.jpg` to `dish-6.jpg` | Home signature dishes (same order as the menu signatures) | see `IMAGE-PROMPTS.md` |
| `gallery-1.jpg` to `gallery-8.jpg` | Gallery grid and lightbox | see `IMAGE-PROMPTS.md` |

Keep each file under about 400 KB. Prompts for every image are in `IMAGE-PROMPTS.md`.

## Edit the content

All copy and data live in `src/data/`. Components only read from these files.

- `site.js`: name, address, phone, email, navigation, opening hours (also drive the "Open now" badge).
- `home.js`: home page copy.
- `menu.js`: categories, every dish (name, description, price in ₦, tags), the six signature dishes.
- `story.js`: Our Story sections and the numbers strip.
- `gallery.js`: gallery images, captions and tile shapes.
- `reservations.js`: form copy, time slots, max guests.
- `contact.js`: contact page copy.

Colors, fonts and spacing are CSS variables in `src/styles/tokens.css`.
