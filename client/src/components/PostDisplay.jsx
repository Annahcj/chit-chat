import React from 'react'
import { Link } from 'react-router-dom'
import CommentIcon from '@mui/icons-material/Comment'

const PostDisplay = ({ postId, title, commentsCount }) => {
  return (
    <Link
      to={'/posts/' + postId}
      className="post-display"
      data-testid="post-display"
    >
      <div>
        {title}
        <span className="comment-count">
          <CommentIcon className="comment-icon" />
          <span className="comment-count-text">{commentsCount}</span>
        </span>
      </div>
    </Link>
  )
}

export default PostDisplay
