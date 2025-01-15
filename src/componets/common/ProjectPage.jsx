import PropTypes from 'prop-types'
import DownArrowIcon from '../../icons/DownArrowIcon'
import RightArrow from '../../icons/RightArrow'
import ProjectImageItem from './ProjectImageItem'
import { useInView } from 'react-intersection-observer'

const ProjectPage = ({ project }) => {
  const {
    title,
    subtitle,
    technologies,
    href,
    p1,
    p2,
    h2,
    p3,
    h3,
    span1,
    span2,
    nextProject,
  } = project

  const [ref1, isInView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const [ref2, isInView2] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref3, isInView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, isInView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, isInView5] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref6, isInView6] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref7, isInView7] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref8, isInView8] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref9, isInView9] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref10, isInView10] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [ref11, isInView11] = useInView({ triggerOnce: true, threshold: 0.2 })

  let newTitle = title.replace(/([a-z])([A-Z])/g, '$1 $2')
  let nextProjectName = nextProject.replace(/([a-z])([A-Z])/g, '$1 $2')

  return (
    <>
      <section className="flex flex-col gap-[2em] md:gap-0 md:flex-row justify-between md:items-center md:h-[50vh] pt-[7em]">
        <div>
          <a rel="noopener noreferrer" target="_blank" href={href}>
            <h1 className="group flex w-max text-[2em] items-center gap-2 cursor-pointer border-b border-b-transparent hover:border-b-white">
              {newTitle}
              <DownArrowIcon className="size-6 rotate-90 group-hover:rotate-[135deg] transition-all" />
            </h1>
          </a>
          <h3 className="text-emerald-700/70 text-[1.5em]">{subtitle}</h3>
          <ul className="flex flex-wrap  gap-2 my-2">
            {technologies.map((tech, index) => {
              return (
                <li key={index}>
                  <img
                    src={`/assets/icons/${tech}Icon.svg`}
                    alt={tech}
                    className="size-6"
                    title={tech}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="md:max-w-[40%] text-justify">
          <p>{p1}</p>
        </div>
      </section>
      <article>
        <img
          src={`/assets/images/projects/${title}/hero.webp`}
          alt={`Imagen de proyecto ${newTitle} en Laptop`}
          className="animate-slide-up-slow h-[35vh] w-full object-cover md:h-auto"
        />
      </article>
      <section className="flex flex-col gap-[2em] md:flex-row justify-around items-center">
        <img
          ref={ref1}
          src={`/assets/images/projects/${title}/logo.webp`}
          alt={`Logo de proyecto ${newTitle}`}
          className={`w-[18.8em] md:size-[20em] ${
            isInView ? 'animate-slide-right' : 'opacity-0'
          }`}
        />
        <div
          ref={ref2}
          className={`md:max-w-[40%] text-justify flex flex-col gap-2 ${
            isInView2 ? 'animate-slide-left' : 'opacity-0'
          }`}
        >
          <p>{p2}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group self-center md:self-start flex gap-2 text-white items-center w-max bg-emerald-950/70 rounded-md px-4 py-2 hover:bg-emerald-950 hover:text-white transition-all duration-500"
          >
            <span>Ver Proyecto</span>
            <i>
              <RightArrow
                className="size-[1.2em] group-hover:text-white transition-all"
                fill={true}
              />
            </i>
          </a>
        </div>
      </section>
      <section>
        <ul className="flex flex-col md:flex-row gap-[2em] md:gap-0">
          <li
            ref={ref3}
            className={isInView3 ? 'animate-slide-up-slow' : 'opacity-0'}
          >
            <img
              className="h-[50vh] object-cover w-full md:h-auto md:w-[70%]"
              src={`/assets/images/projects/${title}/1.webp`}
              alt={`Imagen mockup de proyecto ${newTitle}`}
            />
          </li>
          <li
            ref={ref4}
            className={isInView4 ? 'animate-slide-up-slow' : 'opacity-0'}
          >
            <img
              className="h-[50vh] object-cover w-full md:h-auto"
              src={`/assets/images/projects/${title}/2.webp`}
              alt={`Imagen mockup de proyecto ${newTitle}`}
            />
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-[7em]">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <h2
            ref={ref5}
            className={`text-[2em] ${
              isInView5 ? 'animate-slide-right' : 'opacity-0'
            }`}
          >
            {h2}
          </h2>
          <p
            ref={ref6}
            className={`md:max-w-[45%] text-justify ${
              isInView6 ? 'animate-slide-left' : 'opacity-0'
            }`}
          >
            {p3}
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-[5em]">
          {[3, 4, 5, 6].map(item => {
            return (
              <ProjectImageItem
                key={item}
                index={item}
                title={title}
                newTitle={newTitle}
              />
            )
          })}
        </ul>
      </section>
      <section className="flex flex-col gap-[7em] pb-[5em]">
        <div className="flex flex-col md:flex-row justify-between md:items-center ">
          <h2
            ref={ref7}
            className={`text-[2em] ${
              isInView7 ? 'animate-slide-right' : 'opacity-0'
            }`}
          >
            {h3}
          </h2>
          <p
            ref={ref8}
            className={`md:max-w-[45%] text-justify flex flex-col gap-2 ${
              isInView8 ? 'animate-slide-left' : 'opacity-0'
            }`}
          >
            <span>{span1}</span>
            {span2 && <span>{span2}</span>}
          </p>
        </div>
        <img
          ref={ref9}
          src={`/assets/images/projects/${title}/7.webp`}
          alt={`Imagen mockup de proyecto ${newTitle}`}
          className={` sm:h-[60vh] md:h-[80vh] object-cover ${
            isInView9 ? 'animate-slide-up-slow' : 'opacity-0'
          }`}
        />
      </section>

      <section className="border-t border-white/50 py-4">
        <div className="flex flex-col md:flex-row justify-between md:items-start">
          <p
            ref={ref10}
            className={`text-[2em]  flex flex-col self-center md:self-start ${
              isInView10 ? 'animate-slide-right' : 'opacity-0'
            }`}
          >
            <span>Próximo proyecto</span>
            <a
              className="flex justify-center md:justify-start text-[.8em] text-white/60 hover:text-white transition-all"
              href={`/projects/${nextProject.toLowerCase()}`}
            >
              <span>ver</span>
            </a>
          </p>
          <a
            className="group relative w-max self-center md:self-auto"
            href={`/projects/${nextProject.toLowerCase()}`}
          >
            <img
              ref={ref11}
              src={`/assets/images/projects/${nextProject}/logo.webp`}
              alt={`Logo de proyecto ${nextProjectName}`}
              className={`w-[18.8em]  ${
                isInView11 ? 'animate-slide-left' : 'opacity-0'
              }`}
            />
            <div className="absolute inset-0 bg-black/30 w-full h-full opacity-0 group-hover:opacity-100 transition-all"></div>
          </a>
        </div>
      </section>
    </>
  )
}

ProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectPage
