import DownArrowIcon from '../../icons/DownArrowIcon'
import GitHubIcon from '../../icons/GitHubIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import LineIcon from '../../icons/LineIcon'
import LinkedinIcon from '../../icons/LinkedinIcon'
import MailIcon from '../../icons/MailIcon'
import MateIcon from '../../icons/MateIcon'
import Mountain from '../../icons/Mountain'
import NetworkPill from '../common/NetworkPill'

const Hero = () => {
  return (
    <section className="text-inherit flex flex-col xl:h-screen">
      <header className="py-[1.2em]">
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
          <li className="flex-1  flex flex-col items-end cursor-pointer">
            <span className="border-b-[1px] border-transparent ">
              portfolio
            </span>{' '}
            <span className="border-b-[1px] border-transparent flex gap-2 items-center w-max">
              <LineIcon className="size-5" />
              <span>vol 1</span>
            </span>
          </li>
        </ul>
      </header>
      <div className="flex flex-col justify-center">
        <h1 className="text-[5em] flex flex-col font-extrabold">
          HOLA, SOY
          <span className="md:pl-10 flex gap-2 items-center">
            <Mountain
              className="size-[1.7em] md:size-[1.5em] self-start md:self-auto"
              aria-hidden="true"
            />
            <span className="tracking-widest">
              MAITÉN{' '}
              <span className="italic hover:not-italic hover:animate-pulse cursor-pointer">
                O
              </span>
              VIED
              <span className="italic hover:not-italic hover:animate-pulse cursor-pointer -ml-1">
                O
              </span>
            </span>
          </span>
        </h1>
        <h2 className="flex gap-2 items-center text-[2em] mt-4">
          <p className="flex items-center">
            <LineIcon className="size-6" /> desarrollador Front End
          </p>
          <a
            className="group w-max rotate-180 flex justify-center items-center "
            href="#projects"
          >
            <DownArrowIcon className="size-[.7em] group-hover:animate-pulse" />
          </a>
        </h2>
      </div>
      <article className="flex flex-col w-full items-start mt-8">
        <nav aria-label="Redes Sociales">
          <ul className="flex justify-center md:justify-start flex-wrap gap-4">
            <li>
              <NetworkPill
                href="https://www.linkedin.com/in/maiten-oviedo/"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-4" aria-hidden="true" />
                <p>LinkedIn</p>
              </NetworkPill>
            </li>
            <li>
              <NetworkPill
                href="https://github.com/Maiten-Oviedo"
                aria-label="GitHub"
              >
                <GitHubIcon className="size-4" aria-hidden="true" />
                <p>GitHub</p>
              </NetworkPill>
            </li>
            <li>
              <NetworkPill
                href="https://www.instagram.com/maiten_oviedo"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" aria-hidden="true" />
                <p>Instagram</p>
              </NetworkPill>
            </li>
            <li>
              <NetworkPill
                href="mailto:maitenoviedo513@gmail.com"
                aria-label="Email"
              >
                <MailIcon className="size-4" aria-hidden="true" />
                <p>Email</p>
              </NetworkPill>
            </li>
          </ul>
        </nav>

        <div className="md:absolute pr-[1.3em] md:pb-[1.3em] right-0 bottom-0 self-center text-center md:text-start mt-10">
          <p className="text-[.7em] ">
            <span className="flex items-center gap-1">
              De Mendoza, Argentina{' '}
              <i title="Mate">
                <MateIcon className="size-[1em]" />
              </i>
              .
            </span>
            En continua formación y búsqueda de conocimientos.
          </p>
        </div>
      </article>
    </section>
  )
}

export default Hero
