import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const isPath = location.pathname.startsWith('/projects/')
  return (
    <footer
      className={`${
        isPath
          ? 'bg-zinc-950 px-[2em] md:px-[4em] xl:px-[6em]'
          : 'px-2 sm:px-[1em] md:px-[2em] xl:px-[3em]'
      } text-[.7em] sm:text-[.8em] xl:text-[.9em`}
    >
      <ul className="flex flex-wrap gap-4 justify-between items-center  py-4">
        <li>
          <a href="/#" className="cursor-pointer">
            Inicio
          </a>
        </li>
        <li>
          <a href="/#projects" className="cursor-pointer">
            Proyectos
          </a>
        </li>
        <li>
          <a href="/#process" className="cursor-pointer">
            Proceso
          </a>
        </li>
        <li>
          <a href="/#about" className="cursor-pointer">
            Sobre Mí
          </a>
        </li>
        <li>
          <a href="/#contact" className="cursor-pointer">
            Contacto
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/Maiten-Oviedo"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer"
          >
            @maiten
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
