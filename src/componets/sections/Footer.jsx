import { useInView } from 'react-intersection-observer'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isPath = location.pathname !== '/'

  const [ref1, isVisible1] = useInView({ threshold: 1, triggerOnce: true })
  const [ref2, isVisible2] = useInView({ threshold: 1, triggerOnce: true })

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
      className={`flex flex-col gap-2 w-full pb-6 ${
        isPath
          ? 'bg-zinc-950 px-[2em] md:px-[4em] xl:px-[6em]'
          : 'px-2 sm:px-[1em] md:px-[2em] xl:px-[3em]'
      } text-[.7em] sm:text-[.8em] xl:text-[.9em`}
    >
      <div className="flex flex-wrap gap-4 justify-between items-center  py-4">
        <ul
          ref={ref1}
          className={`flex flex-col gap-2 ${
            isVisible1 ? 'animate-slide-right' : 'opacity-0'
          }`}
        >
          <li className="flex-1">
            <Link to="/">Inicio</Link>
          </li>
          <li className="flex-1 ">
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
          <li className="flex-1">
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
        </ul>
        <a
          ref={ref2}
          href="https://www.linkedin.com/in/Maiten-Oviedo"
          target="_blank"
          rel="noreferrer noopener"
          className={` h-[6em] flex items-end cursor-pointer border-b border-transparent hover:border-b-white transition-all ${
            isVisible2 ? 'animate-slide-up-slow' : 'opacity-0'
          }`}
        >
          @maiten
        </a>
        <ul
          ref={ref1}
          className={`flex flex-col gap-2 ${
            isVisible1 ? 'animate-slide-left' : 'opacity-0'
          }`}
        >
          <li className="flex-1 flex justify-end">
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
          <li className="flex-1 flex justify-end">
            <Link
              to="/contact"
              onClick={e => {
                e.preventDefault()
                toSection('about')
              }}
            >
              Contacto
            </Link>
          </li>
          <li className="flex-1 flex justify-end">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
