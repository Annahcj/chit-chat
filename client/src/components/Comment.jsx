import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

const Comment = ({ commentId, author, comment, created_at, handleDeleteComment }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="comment" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      <span className="bold">{author}</span>
      <span className="comment-content">{comment}</span>
      <div className="commentTime">
        <DeleteIcon className={`${isVisible ? '' : 'isNotVisible'} icon delete-icon`} onClick={() => handleDeleteComment(commentId)}/>
        {moment(created_at).fromNow()}
      </div>
    </div>
  )
}
export default Comment;