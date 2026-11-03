# Progress log

Claude Code: read this at the start of every session. Update it at the end of every phase.

## Current status
- Site: Saffron & Smoke (Restaurant Website)
- Last completed phase: Phase 5
- Next phase: none. Site complete.
- Live URL: (owner fills in after the first Vercel deploy)

## Phase checklist
- [x] Phase 1: Scaffold, deploy and design system
- [x] Phase 2: Home page
- [x] Phase 3: Main feature pages
- [x] Phase 4: Remaining pages
- [x] Phase 5: Polish and hand-off

## Decisions
(Write each choice you made without asking. One line each, with the phase number.)
- P1: Page split. Phase 3 = Menu, Our Story, Gallery (with lightbox). Phase 4 = Reservations (form), Contact ("Open now" badge, map placeholder) + not-found page.
- P1: Site-wide features: sticky header with scroll background and mobile menu built in Phase 1. Scroll reveal (CSS `.reveal` class ready in base.css) gets its hook in Phase 2.
- P1: Routes: `/`, `/menu`, `/our-story`, `/gallery`, `/reservations`, `/contact`, `*` (not found). Reservations is the header CTA button, not a nav link.
- P1: Fictional contact details in `src/data/site.js`: 14 Ember Lane, Victoria Island, Lagos; +234 800 000 0000; hello@saffronandsmoke.example.
- P1: Fonts imported: Cormorant Garamond 400, 400 italic, 500, 600; DM Sans 400, 500.
- P1: Header overlaps the page top (negative margin) so heroes sit under it; pages must add `--header-h` top padding.
- P1: Kept Vite's default oxlint dev dependency (installed by `npm create vite`).
- P2: Fictional opening hours in `src/data/site.js` (`hours` per day for the Phase 4 "Open now" badge, `hoursSummary` for strips): Mon closed; Tue to Thu 17:00 to 23:00; Fri and Sat 12:00 to 00:30; Sun 12:00 to 22:00.
- P2: Signature dish prices (₦): suya 9,500; jollof 14,500; catfish 24,000; lamb ribs 28,500; prawns 26,000; plantain 7,500. Categories: plantain = Desserts, jollof = Mains, the rest = Grill.
- P2: Home copy lives in `src/data/home.js`. Story teaser stat "12 hrs the fire burns each service day" is fictional copy.
- P2: Home final call to action uses `interior.jpg` as its background.
- P3: Full menu (fictional dishes, prices, descriptions) in `src/data/menu.js`: 4 to 6 items per category, the 6 signatures kept and marked with a flame. Selected tab is kept in the URL (`/menu?c=grill`).
- P3: Our Story copy in `src/data/story.js`. Fictional chef "Adaeze Okonkwo", her background, quote and the numbers strip (12 hrs, 3 spice blends, 0 gas burners) are invented copy. Images: chef = chef.jpg, idea = interior.jpg, fire = story.jpg.
- P3: Gallery captions and tile shapes in `src/data/gallery.js`, following IMAGE-PROMPTS.md ratios. Lightbox uses native `<dialog>` (focus trap + Escape), arrow keys and swipe.
- P3: Owner-supplied `public/images/hero.jpg` committed with this phase.
- P4: Reservations copy, 30-minute time slots, max 8 guests and last seating 60 min before close in `src/data/reservations.js`. Time list only shows slots for the chosen day; Mondays are rejected (closed). Phone must have 10 to 15 digits. Note max 300 characters.
- P4: Validation shows errors on blur and on submit; submit focuses the first invalid field. The success message replaces the form, names the booking and says nothing was sent.
- P4: "Open now" badge uses Lagos time (`Africa/Lagos` via Intl), handles the 00:30 Friday/Saturday close and says when it next opens. Logic in `src/utils/openStatus.js`, badge in `OpenBadge`.
- P4: Contact copy in `src/data/contact.js` ("Find the fire", kitchen closing note, valet parking line are fictional). Map placeholder is an inline SVG street pattern with an ember pin.
- P4: Not-found page: "This plate has left the kitchen" with an outlined 404 and links home, menu and reservations. `Placeholder` component removed.
- P5: Fixed both lint warnings: footer year computed once at module level; header closes the mobile menu on route change during render (previous-path state) instead of in an effect.
- P5: Our Story chapters overflowed by 29px at 1280px (flipped chapter media had no width). Gave `.chapter__media` `width: 100%` and grid children `min-width: 0`.
- P5: Checked every route at 360, 768, 1024, 1280 and 1920 in headless Chrome (iframe test, no horizontal scroll), one h1 per page, a title per route, all routes 200 in `npm run preview`.

## Blockers
(Write anything that stopped you. Say exactly what the owner must do.)

## Notes for next session
(Short. Only what the next session needs to know.)
- Site complete.
- Owner: run `/site-done restaurant <live url>` in the projects folder.
- Owner: add the missing photos listed in `README.md` (only `hero.jpg` is in `public/images/` now).
- Shared components in `src/components/`: Header, Footer, Logo, Img (fallback), Button, Section, PageTitle, PageHero, Layout, Lightbox, OpenBadge.
- Inner pages start with `PageHero` (eyebrow, h1, lede; handles header padding). `Arrow` component and `.text-link` (now in base.css) are shared.
- `src/data/menu.js` has `categories`, full `menu`, `signatureDishes`, `tagLabels`, `menuPage`, `formatPrice`.
- Scroll reveal: call `useReveal()` (src/hooks) in a page, add class `reveal` and optional `style={{"--d": "100ms"}}` delay.
