# AGENTS.md

This file provides guidance to OpenCode sessions working on this repository.

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build
- `npm run lint` — run ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

No test setup exists.

## Tech Stack

- **Next.js 16.2** (App Router) with **React 19** and **React Compiler** enabled (`reactCompiler: true` in `next.config.ts`)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config` file; only CSS entry is `@import "tailwindcss"` in `src/app/globals.css`
- **@gravity-ui/icons** for icons
- Path alias `@/*` → `./src/*`
- Dark theme forced via `dark` class on `<html>` in `src/app/layout.tsx`

## Architecture

Single-page marketing/landing site for "JobPilot AI":

- `src/app/page.tsx` — only route, a client component composing section components in fixed order
- `src/components/` — each section is a self-contained component (markup + hardcoded content + Tailwind styling)
- Dark theme baked in: `dark` class on `<html>`, hex palette (`#0b1326` bg, `#dae2fd` text, `#c0c1ff` accent)
- Content constrained to `w-[80%] mx-auto`; fixed Header mirrors this width

## Key Conventions

- **No shared data layer** — sections are self-contained with hardcoded content
- **Inline Tailwind** with arbitrary values (hex colors like `bg-[#0b1326]`, exact sizes like `text-[12px]`)
- **No `tailwind.config.js`** — all styling via CSS `@import "tailwindcss"` + utility classes
- **React Compiler enabled** — avoid manual `useMemo`/`useCallback`; rely on compiler
- Path alias `@/*` maps to `src/*`

## Key Files

- `src/app/layout.tsx` — root layout, sets `dark` class, includes Header/Footer
- `src/app/page.tsx` — single page composing all sections
- `src/app/globals.css` — Tailwind import + shared glassmorphism/AI accent utilities
- `src/components/` — section components (Header, Hero, Stats, Features, HowItWorks, JobCategories, Testimonials, Faq, Cta, Footer)
- `src/lib/` — auth (`auth.ts`, `auth-client.ts`), db (`db.ts`)

## Commands to Run After Changes

```bash
npm run lint
npm run build
```