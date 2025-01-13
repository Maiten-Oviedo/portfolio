import DownArrowIcon from '../../icons/DownArrowIcon'
import ProjectItem from '../common/ProjectItem'

const PROJECTS = [
  {
    name: 'El Buen Sabor',
    alt: 'Imagen del proyecto de un ecommerce',
    description:
      'Ecommerce completo con métodos de pago mediante Mercado Pago y criptomonedas. El frontend fue desarrollado con React Vite y diversas librerías. Para el backend se utilizó Firebase y Node.js, integrando Mercado Pago y obteniendo datos de Google Analytics.',
    technologies: [
      'HTML',
      'CSS',
      'Tailwind',
      'Javascript',
      'TypeScript',
      'React',
      'Vite',
      'Firebase',
      'GoogleAnalytics',
      'MercadoPago',
      'NodeJs',
    ],
    urlPage: '/projects/el-buen-sabor',
    img: '/assets/images/projects/green-1.webp',
    outstanding: true,
  },
  {
    name: 'API REST de Mutantes',
    alt: 'Imagen del proyecto API de Mutantes',
    description:
      'Desarrollo de una API REST con Spring Boot siguiendo una arquitectura de microservicios, diseñada para detectar si una secuencia de ADN corresponde a un mutante mediante una lógica específica de identificación de patrones. ¡Te invito a leer el README del repositorio para más detalles! 😄',
    technologies: ['Java', 'SpringBoot', 'Hibernate', 'JUnit5'],
    urlCode: 'https://github.com/Maiten-Oviedo/ApiRestMutantesSpringBoot',
    img: '/assets/images/projects/green-2.webp',
    outstanding: true,
  },
  {
    name: 'Clon de Spotify',
    alt: 'Imagen del proyecto de un clon de Spotify',
    description:
      'El proyecto es una aplicación web que simula la interfaz de usuario de Spotify. Incluye funcionalidades como la visualización de listas de reproducción, reproducción de canciones y control de volumen.',
    technologies: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'React', 'Astro'],
    urlPage: '/projects/spotify-clone',
    urlCode: 'https://github.com/Maiten-Oviedo/spotify-clone',
    img: '/assets/images/projects/green-3.webp',
  },
  {
    name: 'Portfolio Personal',
    alt: 'Imagen del proyecto de Portfolio Personal',
    description:
      'Este proyecto es un portfolio diseñado para una estudiante de administración. Se utilizó Astro y Tailwind para el frontend y se desplegó en Vercel. Incluye un formulario de contacto integrado con la API de EmailJS.',
    technologies: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'Astro', 'Vite'],
    urlPage: 'https://adm-ursula.vercel.app/',
    urlCode: 'https://github.com/Maiten-Oviedo/portfolio-ursula',
    img: '/assets/images/projects/green-4.webp',
  },
  {
    name: 'Ecommerce',
    alt: 'Imagen del proyecto de un ecommerce',
    description:
      'Tienda de ropa moderna, con un diseño minimalista y elegante. Incluye carrito de compras utilizando localStorage. Proyecto realizado en el curso Argentina Programa - Primer Tramo.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    urlPage: 'https://maiten-oviedo.github.io/Ecommerce/',
    urlCode: 'https://github.com/Maiten-Oviedo/Ecommerce',
    img: '/assets/images/projects/green-5.webp',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col scroll-m-3">
      <h2 className="flex flex-col justify-center gap-2  items-end md:items-start font-extrabold mb-1">
        <span className="text-[1em] md:text-[.7em]">PROYECTOS</span>
        <span className="text-white/70 text-[1.2em]">
          Diseños y desarrllos
          <span className="text-emerald-700/70">responsivos</span>
        </span>
      </h2>
      <ol className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </ol>
      <a
        href="https://github.com/Maiten-Oviedo"
        className="group flex w-max gap-2 text-center items-center font-bold mt-8 self-center hover:scale-105 transition-transform"
        target="_blank"
        rel="noreferrer noopener"
      >
        VER MÁS PROYECTOS{' '}
        <DownArrowIcon className="size-[.9em] rotate-90 group-hover:rotate-[450deg] transition-all duration-700" />
      </a>
    </section>
  )
}

export default Projects
