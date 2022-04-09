import React from "react";
import { Link } from 'react-router-dom'

const PostDisplay = ({ postId, title }) => {
  return (
    <Link to={'/posts/' + postId} className="post-display">
      <div >
        {title}
      </div>
    </Link>
  )
}

export default PostDisplay;