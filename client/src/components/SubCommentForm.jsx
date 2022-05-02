import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSubcomment } from '../state/actions/subcomments' 
import { useAuth0 } from '@auth0/auth0-react'

const SubCommentForm = ({ commentId, showForm, setShowForm }) => {
  const [formComment, setFormComment] = useState('')
  const dispatch = useDispatch()
  const { user, getAccessTokenSilently } = useAuth0()

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    // dispatch to add a new subcomment
    const token = await getAccessTokenSilently()
    const subcomment = {
      comment: formComment,
      author: user.nickname,
      auth0Id: user.sub,
      comment_id: commentId
    }
    dispatch(addSubcomment(subcomment, token))

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
