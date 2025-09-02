# Portfolio Personal - Maiten Oviedo

Un portfolio moderno y profesional desarrollado con Astro, TypeScript y Tailwind CSS v4, diseñado para mostrar mis habilidades como desarrollador Frontend.

## 🚀 Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno para sitios rápidos
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipado estático
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Bun](https://bun.sh/)** - Runtime y package manager ultrarrápido

## ✨ Características

### Secciones Principales
- **Hero Section** - Presentación personal con animaciones dinámicas y partículas flotantes
- **Experience** - Tarjetas de experiencia laboral con animaciones de entrada
- **Projects** - Showcase de proyectos con efectos hover sofisticados
- **Process** - Metodología de trabajo con acordeón interactivo
- **About** - Información personal con slider de imágenes
- **Contact** - Sección de contacto moderna con efectos glassmorphism

### Optimizaciones
- **Performance** - Intersection Observer nativo para animaciones optimizadas
- **SEO** - Schema markup JSON-LD en todas las secciones
- **Accessibility** - Soporte para `prefers-reduced-motion` y navegación por teclado
- **Responsive** - Diseño completamente adaptable a todos los dispositivos

### Efectos Visuales
- Animaciones de entrada escalonadas
- Partículas flotantes interactivas
- Efectos glassmorphism y backdrop-blur
- Transiciones suaves y micro-interacciones
- Gradientes animados y efectos hover

## 🛠️ Instalación y Uso

### Prerrequisitos
- [Bun](https://bun.sh/) instalado en tu sistema

### Instalación
\`\`\`bash
# Clonar el repositorio
git clone https://github.com/Maiten-Oviedo/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
bun install

# Ejecutar en modo desarrollo
bun run dev

# Construir para producción
bun run build

# Vista previa de la build
bun run preview
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
src/
├── components/
│   ├── common/
│   │   ├── ExperienceCard.astro
│   │   └── ExperiencieCard.astro
│   └── sections/
│       ├── Hero.astro
│       ├── Experience.astro
│       ├── Projects.astro
│       ├── Process.astro
│       ├── About.astro
│       ├── SliderHero.astro
│       ├── Contact.astro
│       ├── ContactSchema.astro
│       └── Footer.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
\`\`\`

## 🎨 Características de Diseño

- **Sistema de Colores**: Paleta coherente con tokens semánticos
- **Tipografía**: Jerarquía clara con fuentes web optimizadas
- **Animaciones**: CSS custom properties para máximo rendimiento
- **Layout**: Flexbox y CSS Grid para layouts responsivos
- **Efectos**: Partículas, glassmorphism y gradientes animados

## 📱 Responsive Design

El portfolio está completamente optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔧 Personalización

### Colores
Los colores principales se pueden modificar en `src/styles/global.css`:
\`\`\`css
@theme inline {
  --color-primary: /* Tu color principal */;
  --color-secondary: /* Tu color secundario */;
}
\`\`\`

### Animaciones
Las animaciones personalizadas están definidas en el mismo archivo y pueden ser modificadas según tus preferencias.

## 📞 Contacto

- **Email**: [maitenoviedo513@gmail.com](mailto:maitenoviedo513@gmail.com)
- **GitHub**: [github.com/Maiten-Oviedo](https://github.com/Maiten-Oviedo)
- **LinkedIn**: [linkedin.com/in/maiten-oviedo](https://www.linkedin.com/in/maiten-oviedo)
- **Instagram**: [@maiten_oviedo](https://www.instagram.com/maiten_oviedo)
- **WhatsApp**: [+5492613897545](https://wa.me/5492613897545)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ por Maiten Oviedo**
