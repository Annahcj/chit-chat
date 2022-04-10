import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Comment = ({ commentId, author, comment, handleDeleteComment }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="comment" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      <span className="bold">{author}</span>
      <span className="comment-content">{comment}</span>
      <DeleteIcon className={`${isVisible ? 'isVisible' : 'isNotVisible'} icon`} onClick={() => handleDeleteComment(commentId)}/>
    </div>
  )
}
export default Comment;