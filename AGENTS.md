# Portfolio — Agent Instructions

## What This Is

Portfolio personal de Maitén Oviedo, Desarrollador Full Stack en Mendoza, Argentina.
Sitio: https://maitendev.vercel.app

## Tech Stack

- **Framework**: Astro 5.15 (SSG, zero JS by default)
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Language**: TypeScript (strict mode)
- **Runtime**: Bun
- **Deploy**: Vercel
- **Font**: Sora (Regular 400, SemiBold 600, ExtraBold 900)

## Project Structure

```
src/
├── assets/          # Static assets (SVGs, images)
├── components/
│   ├── common/      # Reusable: Badge, ProjectCard, ExperienceCard, ProcessItem
│   ├── icons/       # SVG icon components (GitHub, LinkedIn, Mail, etc.)
│   └── sections/    # Page sections: Hero, About, Experience, Projects, Process, Contact
├── constants/       # Data files: projects.ts, experiencies.ts, process.ts
├── layouts/         # Layout.astro (SEO, fonts, schema markup)
├── pages/           # index.astro (single page app)
└── styles/          # global.css (Tailwind + animations + fonts)
public/
├── assets/fonts/    # Sora font files (.woff2)
├── assets/images/   # Background images
├── CV-MaitenOviedo.pdf
└── favicon files
```

## Key Conventions

### Components
- `.astro` files only — no React/Vue/Svelte
- Props defined with TypeScript `interface` + `Astro.props`
- Path alias `@/*` maps to `src/*`
- Sections go in `components/sections/`, reusable pieces in `components/common/`

### Data
- Portfolio content lives in `constants/*.ts` as exported arrays
- Projects: `constants/projects.ts` — title, description, url, techs, number
- Experience: `constants/experiencies.ts` — company, position, period, achievements
- Process: `constants/process.ts` — title, description

### Styling
- Tailwind CSS 4 with `@theme` custom properties
- Primary color: `#08f7b3b3` (green accent)
- Background: `#040914` (dark navy)
- Text: `#f1f5f9` (light slate)
- Animations: `fade-in-up`, `slide-in-left`, `slide-up`, `float-reverse`, `bounce-subtle`, `bounce-slow`
- Reduced motion support via `@media (prefers-reduced-motion: reduce)`

### SEO
- Every page needs `title` and `description` props on `<Layout>`
- Schema.org JSON-LD already configured in Layout.astro
- Open Graph + Twitter cards in Layout
- Canonical URLs auto-generated
- Site: `https://maitendev.vercel.app`

### Language
- Site content is in Spanish (Rioplatense: "vos", "dale")
- Code comments in English
- `lang="es"` on `<html>`

## Commands

```bash
bun run dev      # Start dev server
bun run build    # Production build
bun run preview  # Preview production build
```

## What NOT To Do

- Don't add React/Vue/Svelte — this is pure Astro
- Don't use `npm` — project uses Bun
- Don't modify the Layout SEO boilerplate without understanding the schema markup
- Don't add JS frameworks for interactivity — Astro islands only if truly needed
- Don't change the font system — Sora is intentional
- Don't create content collections — data stays in `constants/*.ts`
