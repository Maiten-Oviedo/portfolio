import { useState } from 'react'
import { useParams } from 'react-router-dom'

const PostLayout = () => {
  const { slug } = useParams()
  const [content, setContent] = useState('')

  return <main className="mx-auto px-4"></main>
}

export default PostLayout
