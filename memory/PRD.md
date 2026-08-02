# LÀ·BA — Art of Dining · Product Requirements

## Original Problem
Cinematic single-page luxury restaurant website for LÀ·BA (Riyadh, KSA). Tagline "Art of Dining".
Red (#8B0000 / #1A0000) + Gold (#C9A84C) theatre aesthetic (Moulin Rouge meets fine dining).
Fonts: Cormorant Garamond (display) + Montserrat (body). EN default + Arabic RTL toggle.
Deliverable: full React codebase (deployable to GitHub). Reservations saved to DB + WhatsApp.

## Architecture
- Frontend: React 19 (CRA/craco), Tailwind, framer-motion, lenis smooth scroll, shadcn/ui, sonner toasts.
- Backend: FastAPI + MongoDB (motor). Routes prefixed /api.
- Real photos in /app/frontend/public/images (arch-neon, exterior-night, interior-main, stage, hero-dining).
- Food category/gallery images sourced from Unsplash.

## User Personas
- Diners in Riyadh (EN/AR) browsing menu + booking a table.
- Owner viewing reservations via GET /api/reservations.

## Core Requirements (static)
- Sections: Hero (curtain reveal + particles), Marquee, Story+stats, Menu (8 tabs, split layout, per-category canvas FX), Experience (6 cards), About (parallax + gold badge), Gallery (masonry + lightbox), Reservation, Footer (Designed by MYFRIX).
- Features: EN/AR RTL toggle, gold cursor, Lenis smooth scroll, navbar solid on scroll, WhatsApp float button, page loader, scroll-reveal animations.

## Implemented (2026-08-02)
- Full SPA with all 9 sections, all menu items/prices, bilingual EN/AR content.
- Reservation form -> POST /api/reservations (Mongo) + WhatsApp deep link (wa.me/966582266333). Guests/Date/Time use shadcn Select + Calendar.
- Backend: GET /api/, POST/GET /api/reservations.
- Loader dismissal made event-driven (window load) to be robust to throttled clocks.
- Tested: backend 100%, frontend 100% (iteration_1, iteration_2).

## Backlog / Next
- P1: Admin view for reservations; email/Resend confirmation on booking.
- P2: Menu item photos per dish; Instagram feed embed; SEO/OG tags + sitemap.
- P2: Persist language preference; add subtle audio ambience toggle.
