import React, { useState } from 'react'

const CommentForm = ({ postId, handleSubmitComment }) => {
  const [formAuthor, setFormAuthor] = useState('')
  const [formComment, setFormComment] = useState('')

  const handleSubmit = (evt) => {
    handleSubmitComment(evt, postId, formAuthor, formComment)
    setFormAuthor('')
    setFormComment('')
  }

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your name"
          value={formAuthor}
          onChange={(e) => setFormAuthor(e.target.value)}
          required
        />
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
