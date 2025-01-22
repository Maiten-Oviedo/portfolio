import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useParams } from 'react-router-dom'
import Layout from './Layout'
import '../posts/markdown.css'

const PostLayout = () => {
  const { slug } = useParams()
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/src/posts/${slug}.md`)
        const data = await response.text()
        setContent(data)
      } catch (error) {
        console.error('Error fetching post:', error)
        setContent('# Post no encontrado')
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  return (
    <Layout>
      <main className="markdown prose xl:prose-xl px-4">
        <Markdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={coldarkDark} // Cambia a un tema distinto
                  // Cambia esto por otro tema si lo prefieres
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {content}
        </Markdown>
      </main>
    </Layout>
  )
}

export default PostLayout
