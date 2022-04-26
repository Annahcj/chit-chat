import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import moment from 'moment'
import { useAuth0 } from '@auth0/auth0-react'

const Comment = ({
  commentId,
  author,
  comment,
  created_at,
  auth0Id,
  handleDeleteComment,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const { isAuthenticated, user } = useAuth0()

  return (
    <div
      className="comment"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="bold">{author}</span>
      <span className="comment-content">{comment}</span>
      <div className="commentTime">
        {isAuthenticated && user.sub === auth0Id && (
          <DeleteIcon
            className={`${isVisible ? '' : 'isNotVisible'} icon delete-icon`}
            onClick={() => handleDeleteComment(commentId)}
          />
        )}
        {moment(created_at).fromNow()}
      </div>
    </div>
  )
}
export default Comment
