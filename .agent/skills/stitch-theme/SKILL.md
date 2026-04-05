---
name: stitch-theme
description: >
  Design Tokens and Layout rules for the "Bioluminescent Architect" theme.
  Trigger: When modifying styles, adding components, or reviewing PRs in the Maitén Oviedo portfolio.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Creating new Astro components in the portfolio.
- Changing Tailwind CSS classes.
- Structuring new layout sections.

## Critical Patterns (The "Bioluminescent Architect" Manifesto)

### 1. Colors & Depth
- **Primary / Bioluminescence:** `#43dfa9` (Spark) and `#00c18e` (Emphasis).
- **Background / Surface:** `#06151c`. Always use this for the base html/body background. Avoid pure black `#000000`.
- **Nesting Tiers:**
  - Base: `surface`
  - Cards/Sections: `surface-container-low` (`#0f1d25`)
  - Details/Popovers: `surface-container-high` (`#1d2c33`)
- **Text:** `on-surface` (`#d5e5ef`) for readability. Never use pure white for long text.

### 2. The "No-Line" Rule
- **NEVER use 1px solid borders**.
- Separations must be defined by Tonal Layering (background shifts).
- If a border is absolutely required for accessibility, use a "Ghost Border" (e.g., `border-b border-[#3c4a43]/20`).

### 3. Glassmorphism & Elevation
- Floating elements (Navbars, tooltips) must use Glassmorphism: `bg-[#28373e]/60 backdrop-blur-xl`.
- Do NOT use standard Material Design drop shadows (`shadow-md`, `shadow-lg`). They look cheap here.
- If floating is mandatory, use an ambient glow: shadow color `#002115` at 8% with 40px blur instead of standard shadow.

### 4. Typography Constraints
- **Main Engine:** `font-sora` (Sora Font). This is the hard project rule.
- Do NOT use external fonts or load them unnecessarily. Rely on standard weights (400, 600, 900).

## Tailwind Mapped Variables
The `global.css` exposes these variables under `@theme`.
- `--color-surface`: `#06151c`
- `--color-surface-container-low`: `#0f1d25`
- `--color-surface-container-high`: `#1d2c33`
- `--color-primary-spark`: `#43dfa9`
- `--color-primary-container`: `#00c18e`
- `--color-on-surface`: `#d5e5ef`
- `--color-on-surface-variant`: `#bbcac1`
- `--color-outline-variant`: `#3c4a43`

## Code Examples

### Card Component
```html
<article class="bg-surface-container-low p-8 rounded-2xl flex flex-col gap-4">
  <!-- Content here -->
</article>
```

### Floating Header
```html
<header class="fixed w-full bg-surface-variant/60 backdrop-blur-xl">
  <!-- Nav -->
</header>
```

### Primary Button
```html
<button class="bg-gradient-to-r from-primary-spark to-primary-container text-surface-container-lowest font-bold rounded-full px-6 py-3">
  Action
</button>
```
