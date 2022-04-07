import React from "react";
import { Link } from 'react-router-dom'

const PostDisplay = ({ postId, title, likes, dislikes }) => {
  return (
    <Link to={'/posts/' + postId}>
      <div className="post-display">
        {title}
        <span>Likes: {likes}</span>
        <span>Dislikes: {dislikes}</span>
      </div>
    </Link>
  )
}

export default PostDisplay;