import PropTypes from 'prop-types'

const Badge = ({ children }) => {
  return (
    <span className="bg-emerald-700/60 text-white text-[1.3em] md:text-[.8em] font-medium me-2 px-2.5 py-0.5 rounded hover:scale-105 transition hover:bg-emerald-900/40">
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Badge
