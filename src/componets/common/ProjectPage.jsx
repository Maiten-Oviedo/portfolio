import PropTypes from 'prop-types'
import DownArrowIcon from '../../icons/DownArrowIcon'
import RightArrow from '../../icons/RightArrow'
import ProjectImageItem from './ProjectImageItem'
import { easeOut, motion } from 'framer-motion'
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
  const fadeRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, easeOut } },
  }
  const fadeLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, easeOut } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, easeOut } },
  }

  let newTitle = title.replace(/([a-z])([A-Z])/g, '$1 $2')
  let nextProjectName = nextProject.replace(/([a-z])([A-Z])/g, '$1 $2')

  return (
    <>
      <section className="flex flex-col gap-[2em] md:gap-0 md:flex-row justify-between md:items-center md:h-[50vh] pt-[7em]">
        <div>
          <a rel="noopener noreferrer" target="_blank" href={href}>
            <h1 className="group flex w-max text-[2em] items-center gap-2 cursor-pointer border-b border-b-transparent hover:border-b-white">
              {newTitle}
              <DownArrowIcon
                className="size-6 rotate-90 group-hover:rotate-[135deg] transition-all"
                aria-label="Desplegar más información"
              />
            </h1>
          </a>
          <h3 className="text-primary text-[1.5em]">{subtitle}</h3>
          <ul className="flex flex-wrap  gap-2 my-2">
            {technologies.map((tech, index) => {
              return (
                <li key={index}>
                  <img
                    src={`/assets/icons/${tech}Icon.svg`}
                    alt={tech}
                    className="size-6"
                    title={tech}
                    loading="lazy"
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
          loading="lazy"
        />
      </article>
      <section className="flex flex-col gap-[2em] md:flex-row justify-around items-center">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.7 }}
          src={`/assets/images/projects/${title}/logo.webp`}
          alt={`Logo de proyecto ${newTitle}`}
          className={`w-[18.8em] md:size-[20em]`}
          loading="lazy"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className={`md:max-w-[40%] text-justify flex flex-col gap-2`}
        >
          <p>{p2}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto ${newTitle}`}
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
        </motion.div>
      </section>
      <section>
        <ul className="flex flex-col md:flex-row gap-[2em] md:gap-0">
          <li>
            <img
              className="h-[50vh] object-cover w-full md:h-auto md:w-[70%]"
              src={`/assets/images/projects/${title}/1.webp`}
              alt={`Imagen mockup de proyecto ${newTitle}`}
              loading="lazy"
            />
          </li>
          <li>
            <img
              className="h-[50vh] object-cover w-full md:h-auto"
              src={`/assets/images/projects/${title}/2.webp`}
              alt={`Imagen mockup de proyecto ${newTitle}`}
              loading="lazy"
            />
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-[7em]">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className={`text-[2em]`}
          >
            {h2}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className={`md:max-w-[45%] text-justify`}
          >
            {p3}
          </motion.p>
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
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className={`text-[2em]`}
          >
            {h3}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className={`md:max-w-[45%] text-justify flex flex-col gap-2`}
          >
            <span>{span1}</span>
            {span2 && <span>{span2}</span>}
          </motion.p>
        </div>
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          src={`/assets/images/projects/${title}/7.webp`}
          alt={`Imagen mockup de proyecto ${newTitle}`}
          className={` sm:h-[60vh] md:h-[80vh] object-cover `}
          loading="lazy"
        />
      </section>

      <section className="border-t border-white/50 py-4">
        <div className="flex flex-col md:flex-row justify-between md:items-start">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className={`text-[2em]  flex flex-col self-center md:self-start `}
          >
            <span>Próximo proyecto</span>
            <a
              className="flex justify-center md:justify-start text-[.8em] text-white/60 hover:text-white transition-all"
              href={`/projects/${nextProject.toLowerCase()}`}
              aria-label={`Ver proyecto ${nextProjectName}`}
            >
              <span>ver</span>
            </a>
          </motion.p>
          <a
            className="group relative w-max self-center md:self-auto"
            href={`/projects/${nextProject.toLowerCase()}`}
            aria-label={`Ver proyecto ${nextProjectName}`}
          >
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              src={`/assets/images/projects/${nextProject}/logo.webp`}
              alt={`Logo de proyecto ${nextProjectName}`}
              className={`w-[18.8em]`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 w-full h-full opacity-0 group-hover:opacity-100 transition-all"></div>
          </a>
        </div>
      </section>
    </>
  )
}

ProjectPage.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    href: PropTypes.string.isRequired,
    p1: PropTypes.string.isRequired,
    p2: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    p3: PropTypes.string.isRequired,
    h3: PropTypes.string.isRequired,
    span1: PropTypes.string.isRequired,
    span2: PropTypes.string,
    nextProject: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectPage
