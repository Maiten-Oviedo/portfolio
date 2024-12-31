import PropTypes from 'prop-types'

const LineIcon = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24.00 24.00"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      stroke="#ffffff"
      strokeWidth="0.00024000000000000003"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#ffffff"
        strokeWidth="0.576"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M23 13H1v-2h22z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </g>
    </svg>
  )
}

LineIcon.propTypes = {
  className: PropTypes.string,
}

export default LineIcon
