import React from "react";
import { Link } from 'react-router-dom'

const PostDisplay = ({ postId, title, likes, dislikes }) => {
  return (
    <div className="post-display">
      <Link to={'/posts/' + postId}> 
        {title}
        <span>Likes: {likes}</span>
        <span>Dislikes: {dislikes}</span>
      </Link>
    </div>
  )
}

export default PostDisplay;