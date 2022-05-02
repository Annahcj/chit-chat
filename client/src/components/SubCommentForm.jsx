import React, { useState } from 'react'

const SubCommentForm = ({ commentId, showForm, setShowForm }) => {
  const [formComment, setFormComment] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setFormComment('')
  }

  if (!showForm) return <></>
  return (
    <div className="subcomment-form">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="leave a comment"
          value={formComment}
          onChange={(e) => setFormComment(e.target.value)}
        />
        <div className="buttons">
          <button
            className="btn cancel-button"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
          <input type="submit" value="Submit" className="btn submit" />
        </div>
      </form>
    </div>
  )
}
export default SubCommentForm
