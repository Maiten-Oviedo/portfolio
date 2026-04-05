# Skill Registry — Portfolio Project

## Project: Maitén Oviedo Portfolio (Astro 5 + Tailwind CSS 4)

### Compact Rules (inject into sub-agents)

```
## Project Standards
- Stack: Astro 5.15 + Tailwind CSS 4 + TypeScript strict + Bun
- Components: .astro only, no React/Vue/Svelte
- Path alias: @/* → src/*
- Content: constants/*.ts (plain arrays, no content collections)
- Styling: Tailwind utilities, theme colors: primary #08f7b3b3, bg #040914, text #f1f5f9
- Font: Sora (400/600/900), loaded via @font-face
- Animations: fade-in-up, slide-in-left, slide-up, float-reverse, bounce-subtle, bounce-slow
- SEO: Schema.org JSON-LD, OG + Twitter cards in Layout.astro
- Deploy: Vercel, site: https://maitendev.vercel.app
- Language: Spanish (Rioplatense) for content, English for code comments
- Commands: bun run dev/build/preview
```

### User Skills (trigger table)

| Skill | Description | Trigger Keywords |
|-------|-------------|-----------------|
| `add-project` | Add new project to portfolio | "add project", "nuevo proyecto", "agregar proyecto", "proyecto al portfolio" |
| `add-experience` | Add work experience entry | "add experience", "nueva experiencia", "agregar trabajo", "actualizar experiencia" |
| `create-component` | Create Astro component following patterns | "create component", "crear componente", "nueva sección", "new section", "nuevo componente" |
| `portfolio-seo` | SEO management and optimization | "seo", "meta tags", "schema", "search engine", "google ranking", "visibilidad" |

### Skill Files

- `.agent/skills/add-project.md`
- `.agent/skills/add-experience.md`
- `.agent/skills/create-component.md`
- `.agent/skills/portfolio-seo.md`

### Conventions Files

- `.agent/conventions/astro-stack.md` — Full stack conventions and patterns
