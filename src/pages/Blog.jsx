import { Link } from 'react-router-dom'
import Layout from '../layouts/Layout'

const POSTS = [
  {
    slug: 'react-testing-library',
    title: 'Aprendiendo React Testing Library',
    date: '2025-01-14',
    content:
      'React Testing Library es una herramienta para escribir pruebas funcionales en React.',
  },
  {
    slug: 'portals',
    title: 'Entendiendo Portals en React',
    date: '2025-01-10',
    content:
      'Los Portals son una característica avanzada de React que permite renderizar hijos.',
  },
]
const Blog = () => (
  <Layout>
    <div className="px-[2em] md:px-[4em] xl:px-[6em]">
      <h1 className="text-[5em]">BLOG</h1>
      <ul className="flex flex-col gap-[1em]">
        {POSTS.map((post, index) => {
          return (
            <li key={index} className="group">
              <h2 className="text-[4em] text-emerald-700 group-hover:text-emerald-500">
                {post.slug}
              </h2>
              <small className="text-[2em] text-white/70">{post.date}</small>
              <h3 className="text-[1.5em]">{post.title}</h3>
              <p>{post.content}</p>
            </li>
          )
        })}
      </ul>
    </div>
  </Layout>
)

export default Blog
