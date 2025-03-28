import { useRef } from 'react'
import DownArrowIcon from '../../icons/DownArrowIcon'
import ProjectItem from '../common/ProjectItem'
import { motion, useScroll, useTransform } from 'framer-motion'

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
    urlPage: '/projects/elbuensabor',
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
    urlPage: '/projects/clondespotify',
    urlCode: 'https://github.com/Maiten-Oviedo/spotify-clone',
    img: '/assets/images/projects/green-3.webp',
  },
  {
    name: 'Portfolio Personal',
    alt: 'Imagen del proyecto de Portfolio Personal',
    description:
      'Este proyecto es un portfolio diseñado para una estudiante de administración. Se utilizó Astro y Tailwind para el frontend y se desplegó en Vercel. Incluye un formulario de contacto integrado con la API de EmailJS.',
    technologies: ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'Astro', 'Vite'],
    urlPage: '/projects/portfoliopersonal',
    urlCode: 'https://github.com/Maiten-Oviedo/portfolio-ursula',
    img: '/assets/images/projects/green-4.webp',
  },
  {
    name: 'Nine Urban',
    alt: 'Imagen del proyecto de un ecommerce',
    description:
      'Tienda de ropa moderna, con un diseño minimalista y elegante. Incluye carrito de compras utilizando localStorage. Proyecto realizado en el curso Argentina Programa - Primer Tramo.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    urlPage: '/projects/nineurban',
    urlCode: 'https://github.com/Maiten-Oviedo/Ecommerce',
    img: '/assets/images/projects/green-5.webp',
  },
]

const Projects = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['35%', '-95%'])

  return (
    <section
      ref={targetRef}
      id="projects"
      className="relative md:h-[300vh]"
      aria-label="Sección de proyectos"
    >
      <h2 className="flex flex-col justify-center gap-2 items-end md:items-start font-extrabold mb-1">
        <span className="text-[1em] md:text-[.7em]">PROYECTOS</span>
        <span className="text-white/70 text-[1.2em]">
          Diseños y desarrollos
          <span className="text-primary"> responsivos</span>
        </span>
      </h2>

      {/* Desktop (con scroll horizontal) */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
        <motion.ol style={{ x }} className="flex gap-10">
          {PROJECTS.map(project => (
            <ProjectItem key={project.id || project.name} project={project} />
          ))}
        </motion.ol>
      </div>

      {/* Móvil (lista vertical) */}
      <ol className="md:hidden grid grid-cols-1 gap-6">
        {PROJECTS.map(project => (
          <ProjectItem key={project.id || project.name} project={project} />
        ))}
      </ol>

      <a
        href="https://github.com/Maiten-Oviedo"
        className="md:absolute bottom-0 group flex w-full md:w-max gap-2 text-center justify-center md:justify-normal items-center font-bold mt-8 self-center hover:scale-105 transition-transform"
        target="_blank"
        rel="noreferrer noopener"
        aria-description="Ver más proyectos en mi perfil de GitHub"
        aria-label="Ver más proyectos en mi perfil de GitHub"
      >
        VER MÁS PROYECTOS{' '}
        <DownArrowIcon className="size-[.9em] rotate-90 group-hover:rotate-[450deg] transition-all duration-700" />
      </a>
    </section>
  )
}

export default Projects
