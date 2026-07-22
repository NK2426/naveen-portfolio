# Naveen Kumar N — Portfolio (Next.js)

A rich, animation-heavy portfolio for **Naveen Kumar N**, Senior Full Stack Developer & AI-Enabled Backend Engineer — built with **Next.js 15 (App Router)**, **TypeScript**, and **Framer Motion**.

## Run it

```bash
npm install      # already done
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Tech stack

- **Next.js 15** — App Router, React Server Components, `next/font` (Space Grotesk, Inter, JetBrains Mono)
- **React 19** + **TypeScript** (strict)
- **Framer Motion** — scroll-linked timeline, reveal animations, spring scroll progress
- Zero UI-kit dependency — hand-rolled design system in `app/globals.css`

## Structure

```
app/
  layout.tsx        # fonts, metadata, root shell
  page.tsx          # composes all sections
  globals.css       # design system + animations
components/
  ParticleBackground.tsx   # canvas particle network (cursor-reactive)
  CursorGlow.tsx           # trailing cursor spotlight
  ScrollProgress.tsx       # spring-driven top progress bar
  Nav.tsx                  # sticky glass nav + active section + mobile menu
  Hero.tsx                 # typing effect, orbs, floating chips
  Marquee.tsx              # infinite competency ticker
  About.tsx / Skills.tsx / Experience.tsx / Projects.tsx / Achievements.tsx / Contact.tsx
  Reveal.tsx               # Framer Motion whileInView wrapper
  TiltCard.tsx             # 3D tilt on hover
  Magnetic.tsx             # magnetic buttons
  Counter.tsx              # count-up stats
  Footer.tsx / BackToTop.tsx
lib/
  data.ts           # all resume content (single source of truth)
legacy/             # the original vanilla HTML/CSS/JS version
```

## Features

- Animated **canvas particle network** that links nodes and repels from the cursor
- **Cursor glow**, **magnetic buttons**, **3D tilt** cards (desktop, pointer-fine only)
- **Typing effect** cycling through roles; floating gradient **orbs** & tech **chips**
- Sticky **glass navigation** with scroll state, active-section highlighting, mobile slide-in menu
- Scroll-linked **career timeline** — the progress line fills and nodes light up as you scroll
- **Reveal-on-scroll** across every section; **count-up** impact stats
- Fully responsive; respects `prefers-reduced-motion`

## Editing content

All copy lives in [`lib/data.ts`](lib/data.ts) — profile, skills, experience, projects, stats and achievements. Edit there and every section updates.

## Deploy

Push to GitHub and import into **Vercel** (zero config for Next.js), or run `npm run build && npm run start` on any Node host.
