# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build
- `npm run lint` — run ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

There is no test setup in this project.

## Tech stack

- **Next.js 16.2** (App Router) with **React 19** and the **React Compiler** enabled (`reactCompiler: true` in [next.config.ts](next.config.ts)). This Next.js version has breaking changes vs. training data — consult the bundled docs in `node_modules/next/dist/docs/` (App Router docs under `01-app/`) before using framework APIs.
- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config` file; the only CSS entry is `@import "tailwindcss"` in [src/app/globals.css](src/app/globals.css). Styling is done inline with utility classes and arbitrary values (hex colors like `bg-[#0b1326]`, exact font sizes like `text-[12px]`).
- **@gravity-ui/icons** for all icons.
- Path alias `@/*` → `./src/*`.

## Architecture

This is a single-page marketing/landing site for "JobPilot AI":

- [src/app/page.tsx](src/app/page.tsx) is the only route — a client component that composes section components in fixed order: Header → Hero → Stats → Features → HowItWorks → JobCategories → Testimonials → Faq → Cta → Newsletter → Footer.
- Each section lives in its own file under [src/components/](src/components/). Components are self-contained (markup + hardcoded content + Tailwind styling in one file); there is no shared data layer or props passing between sections.
- Dark theme is baked in: the `dark` class is set on `<html>` in [src/app/layout.tsx](src/app/layout.tsx), and colors are hardcoded hex values (page background `#0b1326`, text `#dae2fd`, accent `#c0c1ff`). New sections should reuse this palette.
- Page content is constrained to `w-[80%] mx-auto`; the fixed Header mirrors this width to align with it.
