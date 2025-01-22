import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const BlogItem = ({ post }) => {
  const [ref, isVisible] = useInView({ triggerOnce: true, threshold: 1 })
  return (
    <li
      ref={ref}
      className={`group cursor-pointer ${
        isVisible ? 'animate-slide-right' : 'opacity-0'
      }`}
    >
      <Link to={`/blog/${post.slug}`}>
        <h2 className="text-[4em] text-emerald-700 group-hover:text-emerald-500 group-hover:animate-pulse">
          {post.slug}
        </h2>
        <small className="text-[.9em] text-white/70">{post.date}</small>
        <h3 className="text-[1.5em]">{post.title}</h3>
        <p>{post.content}</p>
      </Link>
    </li>
  )
}

BlogItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default BlogItem
