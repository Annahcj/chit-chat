import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const CommentForm = ({ postId, handleSubmitComment }) => {
  const [formComment, setFormComment] = useState('')

  const { isAuthenticated, user } = useAuth0();

  const handleSubmit = (evt) => {
    handleSubmitComment(evt, postId, user.nickname, formComment, user.sub)
    setFormComment('')
  }

  if (!isAuthenticated) return <p>Please login to make a comment</p>
  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="leave a comment"
          value={formComment}
          onChange={(e) => setFormComment(e.target.value)}
          required
        />
        <input type="submit" value="Submit" className="btn submit" required />
      </form>
    </div>
  )
}
export default CommentForm
