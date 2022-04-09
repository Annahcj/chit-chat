import React from "react";

const Comment = ({ author, comment }) => {
  return (
    <div className="comment">
      <span className="bold">{author}</span>
      <span className="comment-content">{comment}</span>
    </div>
  )
}
export default Comment;