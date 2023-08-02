import './index.css'

const BlogItem = props => {
  const {blogItems} = props
  const {id, title, avatarUrl, author, topic, imageUrl} = blogItems

  return (
    <li>
      <img src={imageUrl} alt={`item${id}`} />
      <img src={avatarUrl} alt={`avatar${id}`} />
      <p>{author} </p>
      <p>{topic}</p>
      <p>{title}</p>
    </li>
  )
}

export default BlogItem
