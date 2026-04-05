---
name: add-project
description: Add a new project to the portfolio projects list. Trigger: When adding a new project, portfolio work, or updating projects section.
---

# Add Project to Portfolio

## When to Use
User wants to add a new project to their portfolio, or mentions updating/modifying the projects list.

## Quick Reference
- Data file: `src/constants/projects.ts`
- Component: `src/components/common/ProjectCard.astro`
- Section: `src/components/sections/Projects.astro`

## Project Schema

```typescript
{
  number: string      // Sequential: '01.', '02.', etc.
  title: string       // Project name
  description: string // 1-2 sentence summary in Spanish
  url: string         // Live demo or GitHub repo URL
  techs: string[]     // Tech stack badges
  delay: number       // Animation delay in ms: 200, 400, 600, 800...
}
```

## Workflow

1. **Read current projects** from `src/constants/projects.ts`
2. **Determine next number** — increment the last project's number
3. **Calculate delay** — last delay + 200
4. **Ask user for missing info**:
   - Project title
   - Description (in Spanish, 1-2 sentences)
   - URL (live demo preferred, GitHub as fallback)
   - Techs used (will appear as Badge components)
5. **Add to array** in `constants/projects.ts`
6. **Keep array ordered** by number

## Tech Name Conventions
Use these exact names for consistency:
- `'React'`, `'React 19'`, `'React Native'`
- `'Typescript'` (not "TypeScript" — matches existing)
- `'Tailwind Css'` (not "Tailwind CSS")
- `'Astro'`, `'Vercel'`, `'Node.js'`
- `'Java'`, `'Spring Boot'`, `'Hibernate'`, `'JUnit5'`

## Example Entry
```typescript
{
  number: '05.',
  title: 'Mi Nuevo Proyecto',
  description: 'Descripción breve del proyecto en una o dos oraciones.',
  url: 'https://github.com/Maiten-Oviedo/nuevo-proyecto',
  techs: ['Astro', 'Typescript', 'Tailwind Css'],
  delay: 1000,
}
```

## Rules
- Descriptions in Spanish — site language is Rioplatense
- Don't modify existing project entries unless user explicitly asks
- Don't reorder the array
- Don't create separate files per project — all data stays in `constants/projects.ts`
