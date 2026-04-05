---
name: create-component
description: Create new Astro components following project conventions. Trigger: When creating a new component, section, or UI element for the portfolio.
---

# Create Astro Component

## When to Use
User wants to create a new component, section, or reusable UI element.

## Component Types & Locations

| Type | Location | Example |
|------|----------|---------|
| Page section | `src/components/sections/` | `Skills.astro`, `Testimonials.astro` |
| Reusable piece | `src/components/common/` | `Badge.astro`, `SkillBar.astro` |
| SVG icon | `src/components/icons/` | `TwitterIcon.astro` |
| Layout-level | `src/components/` | `Header.astro`, `Footer.astro` |

## Component Template

```astro
---
// Imports
import SomeIcon from '@/components/icons/SomeIcon.astro'

// Props interface
interface Props {
  title: string
  description?: string
  class?: string
}

// Destructure props
const { title, description, class: className } = Astro.props
---

<section class:list={['container mx-auto', className]}>
  <h2 class="text-3xl font-bold text-foreground">{title}</h2>
  {description && <p class="text-muted-foreground">{description}</p>}
  <slot />
</section>
```

## Icon Component Template

```astro
---
interface Props {
  className?: string
  'aria-label'?: string
}
const { className, ...rest } = Astro.props
---

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
  {...rest}
>
  <!-- SVG paths here -->
</svg>
```

## Styling Rules
- Use Tailwind utility classes — NO custom CSS unless absolutely necessary
- Colors: `text-primary` (#08f7b3b3), `bg-background` (#040914), `text-foreground` (#f1f5f9)
- Animations available: `animate-fade-in-up`, `animate-slide-in-left`, `animate-slide-up`
- All animations auto-disabled for `prefers-reduced-motion: reduce`
- Use `text-balance` for long headings

## Section Integration
When creating a new section:
1. Create the component in `src/components/sections/`
2. Import it in `src/pages/index.astro`
3. Add it in the correct position in the page layout
4. If it has data, create a constants file in `src/constants/`

## Rules
- NO React/Vue/Svelte — pure Astro only
- Props always typed with TypeScript `interface`
- Use `@/*` path alias for imports (maps to `src/*`)
- Components in Spanish for user-facing text, English for code
- NO JavaScript unless using Astro islands (`client:load`, etc.)
- Always use semantic HTML (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Include `aria-label` for accessible navigation
