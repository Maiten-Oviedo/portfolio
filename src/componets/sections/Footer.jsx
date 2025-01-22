import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isPath = location.pathname !== '/'

  const toSection = homeSection => {
    if (isPath) {
      navigate('/') // Navega a la página de inicio
    }
    // Siempre hacemos scroll a la sección "nosotros"
    setTimeout(() => {
      //setTimeOut espera 100ms antes de hacer scroll
      const section = document.getElementById(homeSection)
      section?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
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
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={e => {
              e.preventDefault()
              toSection('projects')
            }}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="/process"
            onClick={e => {
              e.preventDefault()
              toSection('process')
            }}
          >
            Proceso
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={e => {
              e.preventDefault()
              toSection('about')
            }}
          >
            Sobre Mí
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={e => {
              e.preventDefault()
              toSection('contact')
            }}
          >
            Contacto
          </Link>
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
