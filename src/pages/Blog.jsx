import Layout from '../layouts/Layout'
import BlogItem from '../componets/common/BlogItem'

const POSTS = [
  {
    slug: 'composition-pattern',
    title: 'comunicación entre componentes',
    date: '2025-03-02',
    content: 'El mejor método para evitar el prop drillin de manera sencilla.',
  },
  {
    slug: 'useApi-with-axios',
    title: 'custom hook',
    date: '2025-02-05',
    content:
      'Creando un cliente HTTP con Axios y Typescript para manejar interceptores.',
  },
  {
    slug: 'error-boundaries',
    title: 'ejemplos de errores',
    date: '2025-01-27',
    content:
      'Análiis de errores y como manejarlos con Error Boundaries en React JS.',
  },
  {
    slug: 'react-context-api',
    title: 'con Typescript',
    date: '2025-01-14',
    content:
      'Análiis del tipado en un contexto global utilizando Typescript con Rect JS.',
  },
]
const Blog = () => (
  <Layout>
    <main className="min-h-[80vh] px-[1.5em] md:px-[3em] xl:px-[4.5em] w-full text-[.8em] sm:text-[1em]">
      <h1 className="text-[3em]"></h1>
      <ul className="flex flex-col gap-[1em]">
        {POSTS.map((post, index) => {
          return <BlogItem key={index} post={post} />
        })}
      </ul>
    </main>
  </Layout>
)

export default Blog
