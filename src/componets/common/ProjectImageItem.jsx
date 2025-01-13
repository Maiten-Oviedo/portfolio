import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

const ProjectImageItem = ({ index, title, newTitle }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <li
      ref={ref}
      className={`col-span-2 ${
        index === 3 || index === 6 ? '' : 'sm:col-span-1'
      } ${inView ? 'animate-slide-up-slow' : 'opacity-0'}`}
    >
      <img
        src={`/assets/images/projects/${title}/${index}.webp`}
        alt={`Imagen mockup de proyecto ${newTitle}`}
        className={`min-h-[30vh] md:h-auto ${
          index === 4 || index === 5 ? '' : 'object-cover'
        } w-full`}
      />
    </li>
  )
}

ProjectImageItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  newTitle: PropTypes.string.isRequired,
}

export default ProjectImageItem
