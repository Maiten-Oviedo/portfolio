import Layout from '../layouts/Layout'
import BlogItem from '../componets/common/BlogItem'

const POSTS = [
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
