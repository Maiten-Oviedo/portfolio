import PropTypes from 'prop-types'

const DownArrowIcon = ({ className }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="none"
      data-bbox="20 22.4 160 155.2"
      viewBox="20 22.4 160 155.2"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      data-type="shape"
      role="presentation"
      aria-hidden="true"
      aria-label=""
      fill="#ffffff"
    >
      <g>
        {/* Ajustamos las coordenadas para hacer líneas más delgadas */}
        <path d="M51.04 177.6H23V25h155v28H77.318l93.597 95.064-20.458 21.483L55.055 72.1v3.407L51.04 177.6z"></path>
      </g>
    </svg>
  )
}

DownArrowIcon.propTypes = {
  className: PropTypes.string,
}

export default DownArrowIcon
