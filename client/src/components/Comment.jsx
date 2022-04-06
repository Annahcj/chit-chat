import React from "react";

const Comment = ({ author, comment }) => {
  return (
    <>
      <div className="comment">
        <span>{author}</span>
        {comment}
      </div>
    </>
  )
}
export default Comment;