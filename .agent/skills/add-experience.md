---
name: add-experience
description: Add or update work experience entries. Trigger: When adding experience, updating job history, or modifying the experience section.
---

# Add Work Experience

## When to Use
User wants to add a new job/experience, or update existing experience entries.

## Quick Reference
- Data file: `src/constants/experiencies.ts`
- Component: `src/components/common/ExperiencieCard.astro`
- Section: `src/components/sections/Experience.astro`

## Experience Schema

```typescript
{
  id: number           // Unique sequential ID
  company: string      // Company name (UPPERCASE)
  position: string     // Job title with separator: "Role | Tech"
  period: string       // Date range: "Mes YYYY - Presente" or "Mes YYYY - Mes YYYY"
  description: string  // One-line summary of the role
  technologies: string[] // Tech stack used
  achievements: string[] // Bullet points of accomplishments
  url: string          // LinkedIn post or company URL
}
```

## Workflow

1. **Read current experiences** from `src/constants/experiencies.ts`
2. **Ask user for**:
   - Company name
   - Position/title
   - Period (use "Presente" for current job)
   - Description (one sentence)
   - Technologies used
   - Key achievements (3-5 bullet points)
   - URL (LinkedIn post about the role preferred)
3. **Determine next ID** — max existing ID + 1
4. **Insert at top** — most recent experience first

## Naming Conventions
- Company names in UPPERCASE: `'APEQUA SAS'`, `'OSELECTRIC SAS'`
- Position format: `"Role | Main Tech"` — e.g., `"Frontend Developer | React"`
- Period in Spanish: `'May 2025 - Presente'`, `'Ene 2024 - Jun 2025'`
- Achievements start with action verb in past tense: `'Desarrollé...'`, `'Implementé...'`

## Example Entry
```typescript
{
  id: 3,
  company: 'NUEVA EMPRESA',
  position: 'Full Stack Developer | Astro',
  period: 'Sep 2025 - Presente',
  description: 'Desarrollo de aplicaciones web modernas',
  technologies: ['Astro', 'Typescript', 'TailwindCss', 'Vercel'],
  achievements: [
    'Lideré el desarrollo del frontend',
    'Implementé sistema de autenticación',
    'Alcancé 100% en Lighthouse',
  ],
  url: 'https://www.linkedin.com/posts/...',
}
```

## Rules
- Newest experiences go FIRST in the array
- Descriptions and achievements in Spanish (Rioplatense)
- Don't remove experiences — only add or update
- All data stays in `constants/experiencies.ts`
