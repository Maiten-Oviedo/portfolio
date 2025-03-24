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
      <div className="animate-slide-right flex flex-col justify-center items-center md:items-start ">
        <h1 className="text-[5em] flex flex-col font-extrabold items-center md:items-start">
          HOLA, SOY
          <span className="md:pl-10 flex gap-2 items-center md:items-start ">
            <Mountain
              className="hidden md:block size-[1.5em]"
              aria-hidden="true"
            />
            <span className="tracking-widest text-center md:text-start">
              <span className="flex md:inline items-center md:items-start">
                <Mountain
                  className="md:hidden size-[1.4em]"
                  aria-hidden="true"
                />
                MAITÉN{' '}
              </span>
              <span
                className="italic hover:not-italic cursor-pointer"
                aria-label="O VIEDO"
              >
                O
              </span>
              VIEDO
            </span>
          </span>
        </h1>
        <h2 className="flex gap-2 items-center text-[2em] mt-4">
          <p className="flex items-center">
            <LineIcon className="size-6 hidden md:block" /> desarrollador full
            stack
          </p>
        </h2>
      </div>
      <article className="flex flex-col w-full items-start md:items-center mt-8">
        <nav aria-label="Redes Sociales">
          <ul className="animate-slide-up flex justify-center md:justify-start flex-wrap gap-4">
            <li>
              <NetworkPill
                href="https://www.linkedin.com/in/maiten-oviedo/"
                aria-label="Visita mi LinkedIn"
              >
                <LinkedinIcon className="size-4" aria-hidden="true" />
                <p>LinkedIn</p>
              </NetworkPill>
            </li>
            <li>
              <NetworkPill
                href="https://github.com/Maiten-Oviedo"
                aria-label="Visita mi GitHub"
              >
                <GitHubIcon className="size-4" aria-hidden="true" />
                <p>GitHub</p>
              </NetworkPill>
            </li>
            <li>
              <NetworkPill
                href="https://www.instagram.com/maiten_oviedo"
                aria-label="Visita mi Instagram"
              >
                <InstagramIcon className="size-4" aria-hidden="true" />
                <p>Instagram</p>
              </NetworkPill>
            </li>
            <li>
              <NetworkPill
                href="mailto:maitenoviedo513@gmail.com"
                aria-label="Visita mi Email"
              >
                <MailIcon className="size-4" aria-hidden="true" />
                <p>Email</p>
              </NetworkPill>
            </li>
            <li>
              <NetworkPill
                href="https://maiten-dev.vercel.app/MAITEN-OVIEDO-CV.pdf"
                aria-label="Revisa mi Curriculum Vitae"
              >
                <Mountain className="size-4" aria-label="true" />
                <p>CV</p>
              </NetworkPill>
            </li>
          </ul>
        </nav>

        <div className="xl:absolute pr-[1.3em] right-0 bottom-0 self-start md:self-end text-center md:text-start mt-10 w-full">
          <p className="animate-slide-up text-center md:text-end text-[1.1em] sm:text-[1.1em] lg:text-[.8em] xl:text-[.7em]">
            <span className="flex items-center gap-1 justify-center md:justify-end">
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
