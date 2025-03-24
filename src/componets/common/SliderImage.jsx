import PropTypes from 'prop-types'

const SliderImage = ({ description, index, isHover, setIsHover }) => {
  const isActive = !isHover && index === 2

  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`group relative overflow-hidden ${
        isActive
          ? 'w-[30em] h-[27em] md:w-[13em] md:h-[21em]'
          : 'w-[10em] h-[22em] md:w-[4em] md:h-[18em]'
      } m-[.5em] bg-cover bg-center bg-no-repeat hover:w-[30em] hover:h-[27em] md:hover:w-[13em] md:hover:h-[21em] cursor-pointer transition-all duration-300`}
    >
      <img
        src={`/assets/images/me-${index}.webp`}
        alt={description}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Descripción visible al hacer hover */}
      <h3
        className={`${
          isActive ? 'block' : 'hidden group-hover:block'
        } absolute z-10 top-3 right-3 text-nowrap text-[.7em] text-white font-normal`}
      >
        {description}
      </h3>

      {/* Capa de sombreado cuando no está activo */}
      <div
        className={`absolute inset-0 w-full h-full ${
          isActive ? 'bg-transparent' : 'bg-black/40'
        } group-hover:bg-transparent transition-all`}
      ></div>
    </li>
  )
}

SliderImage.propTypes = {
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isHover: PropTypes.bool.isRequired,
  setIsHover: PropTypes.func.isRequired,
}

export default SliderImage
