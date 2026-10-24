# Implementation Plan - Abdelrhman Kabbary Video Editor Portfolio

A production-ready, highly aesthetic, dark-themed cinematic portfolio single-page web application for remote video editor **Abdelrhman Kabbary**. Inspired by modern Framer portfolio sites with smooth scroll, interactive video modals, responsive design, accordion FAQs, client marquees, and dual CTAs.

## User Review Required

> [!NOTE]
> - **Tech Stack**: React + Vite with pure CSS styling, modern CSS variables, animations, and glassmorphism.
> - **Primary Accent**: Cinematic Amber/Red Accent (`#E50914` / `#FF334B`) with dark charcoal glass cards (`#121318`) and glowing gradients.
> - **Video Interactivity**: Fast-loading video cards with custom video preview modals (YouTube embeds + direct Behance links).

## Open Questions

None. All details (contact, social links, project URLs, sections, and technical requirements) are fully provided.

## Proposed Structure & Components

### Project Base (`package.json`, `index.html`, `vite.config.js`)
- Initialize Vite React project structure.
- Add Google Fonts (`Plus Jakarta Sans` & `Inter`), Lucide icons, and SEO Open Graph meta tags.

### Design System (`src/index.css`)
- **Theme Variables**: Midnight background (`#08080a`), card surfaces (`#12131b`), borders (`rgba(255,255,255,0.08)`), accent glow (`#FF2E55` & `#E50914`), text hierarchy.
- **Animations**: Subtle glow effects, smooth entrance fades, infinite marquee scrolling, modal scale-in, accordion toggle transitions.

### Key Components (`src/components/`)
1. **`Navbar.jsx`**: Sticky blur header with logo, section links, WhatsApp ("Message Me Now") & Meeting buttons, social links, mobile drawer menu.
2. **`Hero.jsx`**: Headline "Make Your Content Stand Out", short pitch, large dual CTA buttons, experience badges, smooth scroll-down indicator.
3. **`ClientMarquee.jsx`**: Continuous auto-scrolling marquee of past clients & platforms (YouTube Creators, Brands, Agencies, Podcasts).
4. **`Portfolio.jsx`**: 4 categorized tabs / subsections:
   - *Short-Form Content* (Reels / TikTok / Shorts)
   - *Long-Form Content* (YouTube Storytelling - includes *Data Science Roadmap 2026*)
   - *Videography & Event Coverage* (Includes *Science Festivity Event*)
   - *Motion Graphics & Chroma Key*
   Each card features custom thumbnails, badges, Behance project link, and optional quick-play video modal.
5. **`VideoModal.jsx`**: Lightbox modal for viewing embedded YouTube video showcase clips.
6. **`Testimonials.jsx`**: Grid/Carousel of 4 client review cards with 5-star ratings, client avatars, role descriptions, and quotes.
7. **`StatsBar.jsx`**: High-impact metrics (150+ Projects, 99% Satisfaction, 5+ Years Experience, 10M+ Views).
8. **`FAQ.jsx`**: Accordion-style QA section covering turnaround, software, revisions, workflow, pricing, and industries.
9. **`FooterCTA.jsx`**: High-conversion footer section with "Stop Looking for Average Edits!", quick contact info (email, WhatsApp, location), social links, and copyright.

## Verification Plan

### Automated Tests / Validation
- Run `npm run build` to verify clean compilation without linting or bundle errors.
- Validate HTML semantics and responsive viewport boundaries.

### Manual Verification
- Test all navigation scroll links, WhatsApp redirect link, Calendly placeholder link, and Behance links.
- Test mobile responsive hamburger drawer menu.
- Verify modal lightbox popups for video previews.
- Verify accordion state toggles in FAQ section.
