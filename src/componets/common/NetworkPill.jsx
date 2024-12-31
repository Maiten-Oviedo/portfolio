import PropTypes from 'prop-types'

const NetworkPill = ({ children, href }) => {
  return (
    <a
      className="py-1 px-2 md:py-2 md:px-4 rounded-full border border-white/10 flex justify-center items-center gap-2 text-[.7em] md:text-[.6em] cursor-pointer bg-white/5 hover:scale-110 hover:bg-green-400/10 transition"
      target="_blank"
      rel="noopener no referrer"
      href={href}
    >
      {children}
    </a>
  )
}

NetworkPill.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default NetworkPill
