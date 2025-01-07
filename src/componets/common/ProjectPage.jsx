import PropTypes from 'prop-types'
import DownArrowIcon from '../../icons/DownArrowIcon'
import RightArrow from '../../icons/RightArrow'
import ProjectImageItem from './ProjectImageItem'

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
  } = project
  let newTitle = title.replace(/([a-z])([A-Z])/g, '$1 $2')
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
          <ul className="flex flex-wrap md:justify-center gap-2 my-2">
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
          src={`/assets/images/projects/${title}/hero.jpg`}
          alt={`Imagen de proyecto ${newTitle} en Laptop`}
          className="h-[35vh] w-full object-cover md:h-auto"
        />
      </article>
      <section className="flex flex-col gap-[2em] md:flex-row justify-around items-center">
        <img
          src={`/assets/images/projects/${title}/logo.png`}
          alt={`Logo de proyecto ${newTitle}`}
          className="w-[18.8em] md:size-[20em]"
        />
        <div className="md:max-w-[40%] text-justify flex flex-col gap-2">
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
          <li>
            <img
              className="h-[50vh] object-cover w-full md:h-auto md:w-[70%]"
              src={`/assets/images/projects/${title}/1.jpg`}
              alt={`Imagen mockup de proyecto ${newTitle}`}
            />
          </li>
          <li>
            <img
              className="h-[50vh] object-cover w-full md:h-auto"
              src={`/assets/images/projects/${title}/2.jpg`}
              alt={`Imagen mockup de proyecto ${newTitle}`}
            />
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-[7em]">
        <div className="flex flex-col md:flex-row  justify-between md:items-center">
          <h2 className="text-[2em]">{h2}</h2>
          <p className="md:max-w-[45%] text-justify">{p3}</p>
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
          <h2 className="text-[2em]">{h3}</h2>
          <p className="md:max-w-[45%] text-justify flex flex-col gap-2">
            <span>{span1}</span>
            <span>{span2}</span>
          </p>
        </div>
        <img
          src={`/assets/images/projects/${title}/7.jpg`}
          alt={`Imagen mockup de proyecto ${newTitle}`}
          className="h-[25vh] md:h-auto object-cover"
        />
      </section>
    </>
  )
}

ProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectPage
