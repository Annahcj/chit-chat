import React from "react";
import { Link } from 'react-router-dom'

const PostDisplay = ({ title, likes, dislikes }) => {
  return (
    <div className="post-display">
      <Link to="/post">
        {title}
        <span>Likes: {likes}</span>
        <span>Dislikes: {dislikes}</span>
      </Link>
    </div>
  )
}

export default PostDisplay;