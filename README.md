# NovaMind AI — Marketing Site

A premium, animation-heavy SaaS marketing site built with Next.js (App Router),
TypeScript, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger, React Three
Fiber, and Lenis smooth scrolling.

This repo is a **real, runnable scaffold** — not a mockup. It includes a
fully wired loading screen, custom cursor, glass navbar, a 3D hero scene, and
four complete sections that establish the patterns for the rest of the
original spec. Everything below "What's built" is a clear roadmap for
extending it, written so you (or an AI coding agent like Claude Code) can
pick it up section by section.

## 1. Setup

Requires **Node.js 18.18+** (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000. That's it — no environment variables or backend
are required for the site to render.

> If `npm install` complains about peer dependencies between
> `@react-three/fiber` and React, run `npm install --legacy-peer-deps`.

## 2. What's built

| Area | File | Notes |
|---|---|---|
| Loading screen | `components/layout/LoadingScreen.tsx` | Morphing logo, eased percentage counter, blur fade-out |
| Custom cursor | `components/layout/CustomCursor.tsx` | Spring-lagged ring, hover expansion, click ripple, disabled on touch |
| Smooth scroll | `components/layout/SmoothScroll.tsx` | Lenis wired into GSAP's ticker + ScrollTrigger, disabled under `prefers-reduced-motion` |
| Navbar | `components/layout/Navbar.tsx` | Glass, scroll-aware, mega menu, language switch, theme toggle, mobile drawer |
| Theme toggle | `components/layout/ThemeToggle.tsx` | `next-themes`, dark by default |
| Footer | `components/layout/Footer.tsx` | Newsletter, link columns, socials |
| 3D hero scene | `components/three/HeroScene.tsx` | Distorted glowing "AI core" sphere, wireframe shell, particle sparkles, mouse-reactive light |
| Hero section | `components/sections/Hero.tsx` | Headline, CTAs, live animated stats, floating glass cards, logo marquee |
| AI Solutions | `components/sections/AISolutions.tsx` | 6-card grid, staggered reveal, hover glow border |
| Why Choose Us | `components/sections/WhyChooseUs.tsx` | Comparison table + animated counters |
| Testimonials | `components/sections/Testimonials.tsx` | Infinite marquee, pauses on hover |
| CTA | `components/sections/CTA.tsx` | Aurora-glow closing banner |
| Reusable UI | `components/ui/GlassCard.tsx`, `MagneticButton.tsx`, `AnimatedCounter.tsx` | The core primitives every new section should reuse |

Design tokens (colors, fonts, glass/aurora utilities, keyframes) live in
`tailwind.config.ts` and `app/globals.css` — every new component should pull
from these rather than hardcoding values.

## 3. Design tokens quick reference

```
primary   #6C63FF   secondary #00D4FF   accent #A855F7
background #070B18  card      rgba(255,255,255,0.06)
fonts: Space Grotesk (display, --font-space-grotesk) / Inter (body, --font-inter)
```

Utility classes: `.glass`, `.glass-card`, `.text-gradient`, `.btn-primary`,
`.btn-secondary`, `.eyebrow`, `.section-pad`, `.noise-overlay`.
Animations: `animate-float`, `animate-aurora-move`, `animate-pulse-glow`,
`animate-marquee`, `animate-reveal-up`.

**Note on Satoshi:** the brief calls for Satoshi, which isn't on Google
Fonts. The config already falls back to it — to enable it for real, grab the
free license from Fontshare (https://www.fontshare.com/fonts/satoshi) and
either self-host the woff2 files in `public/fonts` with `@font-face` in
`globals.css`, or use their CDN `<link>` in `app/layout.tsx`.

## 4. Roadmap — sections still to build

Each of these follows the same recipe used above: a `'use client'` section
component in `components/sections/`, built from `GlassCard` / `glass-card`,
revealed with the `whileInView` + `viewport={{ once: true }}` Framer Motion
pattern already used in `AISolutions.tsx`, then dropped into `app/page.tsx`.

- **About** — Mission / Vision / Timeline / Achievements. Good fit for a GSAP
  `ScrollTrigger.create({ pin: true })` section that steps through timeline
  years as the user scrolls, since this is a real sequence.
- **Features grid** — reuse `AISolutions.tsx`'s card grid pattern with
  `react-icons` swapped per feature; add a hover micro-interaction (icon
  rotate/scale) via `whileHover`.
- **Workflow** — numbered process steps connected by an animated SVG line;
  animate the `stroke-dashoffset` of the connecting path with GSAP
  ScrollTrigger `scrub: true` so it "draws" as the user scrolls.
- **Case Studies** — `GlassCard` grid with a before/after metric pair per
  card; drive the metric numbers with `AnimatedCounter`.
- **Pricing** — monthly/yearly toggle (local `useState`), three `GlassCard`
  columns, the middle one gets `shadow-glow` + a "Recommended" badge.
- **FAQ** — accordion built with plain `useState` + `AnimatePresence`
  height animation (same expand/collapse pattern as the Navbar mobile
  drawer); add a simple client-side text filter for "search inside FAQ."
- **Blog Preview** — one large featured `GlassCard` + a row of smaller ones;
  category filter as a pill button group.
- **Contact** — floating-label form fields (label animates up on focus/fill),
  inline validation state, plus a map — either an embedded Google Maps
  iframe or a static styled illustration if you don't want the API
  dependency.
- **Command palette (⌘K)** — a `Dialog`-style overlay (`role="dialog"`,
  trap focus) toggled by a `keydown` listener for `metaKey/ctrlKey + "k"`;
  filter a flat list of {section, page} entries as the user types.
- **Horizontal scroll section** — wrap a row of cards in a container pinned
  with GSAP ScrollTrigger and tween `xPercent` as the user scrolls
  vertically; there's a well-known recipe for this in GSAP's own
  ScrollTrigger docs if you want the canonical implementation.
- **Page transitions** — wrap `{children}` in `app/layout.tsx` with
  `AnimatePresence mode="wait"` keyed on the pathname (`usePathname()`), for
  when you add more routes beyond the single-page site.
- **Scroll progress indicator / back-to-top** — a fixed `motion.div` whose
  `scaleX` is bound to Framer Motion's `useScroll` + `useSpring`.

## 5. Performance & accessibility notes already in place

- `prefers-reduced-motion` disables Lenis inertia and shortens all CSS
  animations globally (`app/globals.css`).
- Custom cursor auto-disables on touch/coarse-pointer devices.
- All interactive elements keep a visible `:focus-visible` ring even with
  the custom cursor active.
- The 3D scene (`HeroScene.tsx`) is loaded with `next/dynamic(..., { ssr:
  false })` so it never blocks first paint or runs on the server.

Remaining performance work before shipping: run `next/image` for any real
photography you add, audit with Lighthouse, and consider lazy-mounting the
Three.js canvas only once the hero scrolls into view if you add more
`Canvas` instances elsewhere on the page.
