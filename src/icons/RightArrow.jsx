import PropTypes from 'prop-types'

const RightArrow = ({ className }) => {
  return (
    <svg
      className={`transition-colors duration-300 ${className}`}
      fill="currentColor"
      height="200px"
      width="200px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512.005 512.005"
      xmlSpace="preserve"
      stroke="#000000"
    >
      <title>RightArrow Icon, Icono de flecha hacia la derecha</title>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <g>
            {' '}
            <path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"></path>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  )
}

RightArrow.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.bool,
}

export default RightArrow
