import PropTypes from 'prop-types'

const ProjectImageItem = ({ index, title, newTitle }) => {
  return (
    <li
      className={`col-span-2 ${
        index === 3 || index === 6 ? '' : 'sm:col-span-1'
      }`}
    >
      <img
        src={`/assets/images/projects/${title}/${index}.jpg`}
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
