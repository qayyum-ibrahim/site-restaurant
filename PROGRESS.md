# Progress log

Claude Code: read this at the start of every session. Update it at the end of every phase.

## Current status
- Site: Saffron & Smoke (Restaurant Website)
- Last completed phase: Phase 1
- Next phase: Phase 2
- Live URL: (owner fills in after the first Vercel deploy)

## Phase checklist
- [x] Phase 1: Scaffold, deploy and design system
- [ ] Phase 2: Home page
- [ ] Phase 3: Main feature pages
- [ ] Phase 4: Remaining pages
- [ ] Phase 5: Polish and hand-off

## Decisions
(Write each choice you made without asking. One line each, with the phase number.)
- P1: Page split. Phase 3 = Menu, Our Story, Gallery (with lightbox). Phase 4 = Reservations (form), Contact ("Open now" badge, map placeholder) + not-found page.
- P1: Site-wide features: sticky header with scroll background and mobile menu built in Phase 1. Scroll reveal (CSS `.reveal` class ready in base.css) gets its hook in Phase 2.
- P1: Routes: `/`, `/menu`, `/our-story`, `/gallery`, `/reservations`, `/contact`, `*` (not found). Reservations is the header CTA button, not a nav link.
- P1: Fictional contact details in `src/data/site.js`: 14 Ember Lane, Victoria Island, Lagos; +234 800 000 0000; hello@saffronandsmoke.example.
- P1: Fonts imported: Cormorant Garamond 400, 400 italic, 500, 600; DM Sans 400, 500.
- P1: Header overlaps the page top (negative margin) so heroes sit under it; pages must add `--header-h` top padding.
- P1: Kept Vite's default oxlint dev dependency (installed by `npm create vite`).

## Blockers
(Write anything that stopped you. Say exactly what the owner must do.)

## Notes for next session
(Short. Only what the next session needs to know.)
- Shared components in `src/components/`: Header, Footer, Logo, Img (fallback), Button (`to`/`href`/button), Section (`tone="surface"`, `narrow`), PageTitle, Layout, Placeholder (temporary).
- Pages are placeholders. Replace `Placeholder` usage as each page is built.
