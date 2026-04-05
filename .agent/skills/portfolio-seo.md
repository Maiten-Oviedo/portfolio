---
name: portfolio-seo
description: Maintain and optimize SEO configuration for the portfolio. Trigger: When updating meta tags, SEO settings, schema markup, or when the user mentions SEO, search engine, Google ranking, or visibility.
---

# Portfolio SEO Management

## When to Use
User wants to update SEO config, meta tags, schema markup, or improve search visibility.

## SEO Configuration Location
- **Main config**: `src/layouts/Layout.astro` — all meta tags, OG, Twitter, Schema.org
- **Sitemap**: `public/sitemap.xml`
- **Robots**: `public/robots.txt`
- **Canonical**: Auto-generated from `Astro.url.pathname`

## Layout.astro SEO Structure

### Required Props
```typescript
interface Props {
  title: string        // Page title: "Maitén Oviedo - Desarrollador Full Stack | Portfolio"
  description: string  // Meta description (150-160 chars ideal)
}
```

### Meta Tags Already Configured
- `viewport`, `theme-color`, `robots`, `author`
- `canonical` URL (auto-generated)
- Open Graph: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:url`, `og:locale`
- Twitter Card: `summary_large_image`
- Google Site Verification
- Favicons: `.ico`, `.png` (96x96), `.svg`, apple-touch-icon
- Preloaded fonts (Sora woff2)

### Schema.org JSON-LD
Two schemas configured in Layout.astro:
1. **WebSite** — site identity
2. **Person** — Maitén Oviedo with contact, location, job title

### Keywords
Extensive keyword meta tag in Layout.astro — update when adding new tech skills or changing focus areas.

## When Adding New Content

### New Project
- Check if the project URL is already in sitemap
- Consider if it needs its own meta description

### New Experience
- Review if keywords should be updated to include new technologies
- No structural changes needed — data is rendered dynamically

### New Section
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Add `aria-label` for section landmarks
- Consider if Schema.org needs new types (e.g., `ItemList` for projects)

## Common SEO Tasks

### Update Keywords
Edit the `<meta name="keywords">` in `Layout.astro`. Keep relevant, don't keyword-stuff.

### Add New Schema Type
Add to the `@graph` array in the JSON-LD script. Common additions:
- `ItemList` for projects
- `WebPage` for subpages
- `BreadcrumbList` for navigation

### Update OG Image
Change the `og:image` meta URL. Must be absolute URL, recommended 1200x630px.

## Rules
- Don't remove existing meta tags without reason
- Keep descriptions under 160 characters
- Title format: `"Maitén Oviedo - [Page] | Portfolio"`
- All content in Spanish
- `og:locale` stays `es_AR`
- Don't change `google-site-verification` without confirming the new code
- Canonical URLs are auto-generated — don't hardcode them
