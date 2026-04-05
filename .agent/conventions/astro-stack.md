# Astro Stack Conventions

## Stack Identity
- **Framework**: Astro 5.15 (Static Site Generator)
- **CSS**: Tailwind CSS 4 via `@tailwindcss/vite` plugin
- **Language**: TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Package Manager**: Bun (NOT npm/yarn/pnpm)
- **Deployment**: Vercel (auto-deploy on push)
- **Zero JS by default**: Only add JavaScript via Astro islands when absolutely necessary

## Path Aliases
```json
"@/*": ["src/*"]
```
Always use `@/components/...`, `@/constants/...` instead of relative `../../` paths.

## Theme Tokens (via Tailwind `@theme`)
```css
--color-primary: #08f7b3b3;    /* Green accent — used for CTAs, highlights */
--color-background: #040914;   /* Dark navy — main background */
--breakpoint-xs: 380px;        /* Extra small breakpoint */
```
Text color: `#f1f5f9` (light slate). Set globally on body.

## Typography
- Font: Sora (loaded via `@font-face` in `global.css`)
- Weights: 400 (Regular), 600 (SemiBold), 900 (ExtraBold)
- Font files: `/assets/fonts/Sora-*.woff2` in public/

## Component Patterns

### Props Declaration
Always TypeScript interface:
```astro
---
interface Props {
  title: string
  description?: string
  class?: string
}
const { title, description, class: className } = Astro.props
---
```

### Slot Usage
Components use `<slot />` for children. Named slots for specific areas.

### Class Merging
Use `class:list={[baseClasses, className]}` for conditional/merged classes.

## Animation System
CSS keyframes defined in `global.css`. Available classes:
- `animate-fade-in-up` — 0.8s ease-out
- `animate-slide-in-left` — 0.8s ease-out
- `animate-slide-up` — 0.8s ease-out
- `animate-float-reverse` — 8s infinite
- `animate-bounce-subtle` — 2s infinite
- `animate-bounce-slow` — 2s infinite
- `animate-pulse-slow` — 4s infinite

Animation delays via inline `style="animation-delay: Xs;"`.
All animations auto-disabled for `prefers-reduced-motion: reduce`.

## Content Architecture
```
src/constants/
├── projects.ts     → Array of project objects
├── experiencies.ts → Array of experience objects
└── process.ts      → Array of process step objects
```
NO content collections. Data is plain exported arrays.

## Section Pattern
Sections in `src/components/sections/`:
- Full-width by default
- Use semantic `<section>` with `aria-label`
- Import in `index.astro` and place in order

## Common Mistakes to Avoid
- Using `npm` instead of `bun`
- Adding React/Vue/Svelte components
- Creating `src/content/` collections
- Writing raw CSS instead of Tailwind utilities
- Hardcoding content that should be in `constants/`
- Breaking the single-page layout (all content on `index.astro`)
- Changing the Sora font system
