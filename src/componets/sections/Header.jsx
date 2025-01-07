import LineIcon from '../../icons/LineIcon'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isPath = location.pathname.startsWith('/projects/')

  return (
    <header
      className={`${
        isPath && 'bg-zinc-950 px-[2em] md:px-[4em] xl:px-[6em]'
      } py-[1.2em]  px-2 md:px-[1.5em]`}
    >
      <ul className="w-full text-[.7em] flex justify-between items-center">
        <li className="flex-1 flex flex-col cursor-pointer">
          <span className="w-max border-b-[1px] border-transparent ">
            disponlible para
          </span>
          <span className="border-b-[1px] flex gap-2 items-center border-transparent w-max">
            trabajar
            <LineIcon className="size-5" />
          </span>
        </li>
        {!isPath && (
          <li className="flex-1 flex justify-center">
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
        {isPath && (
          <li className="flex-1 flex justify-center">
            <a
              href="/"
              className="border-b-[1px] border-transparent hover:border-white"
            >
              Inicio
            </a>
          </li>
        )}
        <li className="flex-1  flex flex-col items-end cursor-pointer">
          <span className="border-b-[1px] border-transparent ">portfolio</span>{' '}
          <span className="border-b-[1px] border-transparent flex gap-2 items-center w-max">
            <LineIcon className="size-5" />
            <span>vol 1</span>
          </span>
        </li>
      </ul>
    </header>
  )
}

export default Header
