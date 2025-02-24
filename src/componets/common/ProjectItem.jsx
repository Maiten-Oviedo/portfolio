import PropTypes from 'prop-types'
import Badge from './Badge'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ProjectItem = ({ project }) => {
  const { technologies, img, alt, urlCode, urlPage, name, description } =
    project

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
  })

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="cursor-pointer group relative w-full md:w-[720px] overflow-hidden bg-neutral-200"
    >
      <article className="w-full">
        <img
          src={img}
          alt={alt}
          className="w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700"
        />
      </article>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 via-slate-800/70 opacity-0 to-black group-hover:opacity-100"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:px-9 text-center translate-y-[100%] group-hover:translate-y-0 transition-all duration-300">
        <h3 className="text-[1.3em] font-bold text-white">{name}</h3>
        <p className="text-white text-[1em] md:text-[.7em]">{description}</p>
        <ul className="flex flex-wrap justify-center gap-2 my-2">
          {technologies.map((tech, index) => (
            <li key={index}>
              <img
                src={`/assets/icons/${tech}Icon.svg`}
                alt={tech}
                className="size-6"
                title={tech}
              />
            </li>
          ))}
        </ul>
        <ul className="flex justify-center gap-4 items-center">
          {urlPage && (
            <li>
              <a href={urlPage}>
                <Badge>Ver Proyecto</Badge>
              </a>
            </li>
          )}
          {urlCode && (
            <li>
              <a
                href={urlCode}
                target={name === 'API REST de Mutantes' ? '_blank' : undefined}
                rel={
                  name === 'API REST de Mutantes'
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                <Badge>Revisar Código</Badge>
              </a>
            </li>
          )}
        </ul>
      </div>
    </motion.li>
  )
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectItem
