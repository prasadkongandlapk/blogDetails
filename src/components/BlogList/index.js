import './index.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogData: []}

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')

    const data = await response.json()

    const importedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogData: importedData})
  }

  compoundDidMount() {
    this.getBlogsList()
  }

  render() {
    const {blogData} = this.state
    return (
      <ul>
        {blogData.map(each => (
          <BlogItem blogItems={each} key={each.id} />
        ))}
      </ul>
    )
  }
}
export default BlogList
