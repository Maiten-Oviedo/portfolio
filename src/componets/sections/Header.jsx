import LineIcon from '../../icons/LineIcon'
import { Link, useLocation } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const Header = () => {
  const location = useLocation()
  const isPath = location.pathname !== '/'
  const isInPost = location.pathname.startsWith('/blog/')
  const [ref1, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <header
      className={`${
        isPath && 'bg-zinc-950 px-[2em] md:px-[4em] xl:px-[6em]'
      } py-[1.2em]  px-2 md:px-[1.5em] text-[.7em] sm:text-[.8em] `}
    >
      <ul className="w-full  flex justify-between items-center">
        <li
          ref={ref1}
          className={`${
            inView ? 'animate-slide-down' : 'opacity-0'
          } flex-1 flex flex-col cursor-pointer`}
        >
          <span className="w-max border-b-[1px] border-transparent ">
            disponlible para
          </span>
          <span className="border-b-[1px] flex gap-2 items-center border-transparent w-max">
            trabajar
            <LineIcon className="size-5" />
          </span>
        </li>
        {!isPath && (
          <li
            ref={ref1}
            className={`${
              inView ? 'animate-slide-down' : 'opacity-0'
            } flex-1 flex justify-center`}
          >
            <a
              href="https://www.linkedin.com/in/Maiten-Oviedo"
              target="_blank"
              rel="noreferrer noopener"
              className="border-b-[1px] border-transparent hover:border-white"
            >
              Linkedin
            </a>
          </li>
        )}
        {isPath && !isInPost && (
          <li
            ref={ref1}
            className={`${
              inView ? 'animate-slide-down' : 'opacity-0'
            } flex-1 flex justify-center`}
          >
            <Link
              to="/"
              className="border-b-[1px] border-transparent hover:border-white"
            >
              Inicio
            </Link>
          </li>
        )}

        {isInPost && (
          <li
            ref={ref1}
            className={`${
              inView ? 'animate-slide-down' : 'opacity-0'
            } flex-1 flex justify-center`}
          >
            <Link
              to="/blog"
              className="border-b-[1px] border-transparent hover:border-white"
            >
              Volver al Blog
            </Link>
          </li>
        )}
        {!isPath && (
          <li
            ref={ref1}
            className={`group ${
              inView ? 'animate-slide-down' : 'opacity-0'
            } flex-1  flex flex-col items-end cursor-pointer`}
          >
            <Link to="/blog">
              <span className="border-b-[1px] border-transparent group-hover:border-white ">
                visita mi
              </span>{' '}
              <span className="flex gap-2 items-center w-max">
                <LineIcon className="size-5" />
                <span className="border-b-[1px] border-transparent group-hover:border-white ">
                  blog
                </span>
              </span>
            </Link>
          </li>
        )}
        {isPath && !isInPost && (
          <li
            ref={ref1}
            className={`${
              inView ? 'animate-slide-down' : 'opacity-0'
            } flex-1  flex flex-col items-end cursor-pointer`}
          >
            <span className="border-b-[1px] border-transparent ">
              portfolio
            </span>{' '}
            <span className="border-b-[1px] border-transparent flex gap-2 items-center w-max">
              <LineIcon className="size-5" />
              <span>vol 2</span>
            </span>
          </li>
        )}
        {isInPost && (
          <li
            ref={ref1}
            className={`${
              inView ? 'animate-slide-down' : 'opacity-0'
            } flex-1  flex flex-col items-end cursor-pointer`}
          >
            <Link
              to="/"
              className="border-b-[1px] border-transparent hover:border-white"
            >
              Inicio
            </Link>
          </li>
        )}
      </ul>
    </header>
  )
}

export default Header
