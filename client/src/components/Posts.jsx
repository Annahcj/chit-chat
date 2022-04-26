import React from 'react'
import PostDisplay from './PostDisplay'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import { getCommentsCount } from '../functions'

import { useAuth0 } from '@auth0/auth0-react'

const Posts = ({ posts, searchKey, handleSearch, comments }) => {
  let commentsCount = getCommentsCount(posts, comments)

  const { isAuthenticated } = useAuth0()

  return (
    <div className="posts">
      {isAuthenticated && (
        <Link to="/posts/new">
          <button className="btn">New Post</button>
        </Link>
      )}
      <span className="search-bar">
        <input
          type="text"
          value={searchKey}
          onChange={handleSearch}
          className="search-input"
        />
        <SearchIcon className="search-icon" />
      </span>
      {posts.map((post) => (
        <PostDisplay
          key={'post' + post.id}
          postId={post.id}
          title={post.title}
          commentsCount={commentsCount[post.id]}
        />
      ))}
    </div>
  )
}
export default Posts
