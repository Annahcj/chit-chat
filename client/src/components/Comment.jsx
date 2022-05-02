import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import ReplyIcon from '@mui/icons-material/Reply'
import SubCommentForm from './SubCommentForm'
import moment from 'moment'
import { useAuth0 } from '@auth0/auth0-react'
import SubComments from './SubComments'
import { useSelector, useDispatch } from 'react-redux'
import { getSubcomments } from '../state/actions/subcomments'

const Comment = ({
  commentId,
  author,
  comment,
  created_at,
  auth0Id,
  handleDeleteComment,
}) => {
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const { subcomments, loading } = useSelector(state => state.subcomments)

  const { isAuthenticated, user } = useAuth0()

  const handleReply = () => {
    // show the subcomment form
    setShowForm(true)
  }

  useEffect(() => {
    dispatch(getSubcomments())
  }, [])

  return (
    <div
      className="comment"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="bold">{author}</span>
      <span className="comment-content">{comment}</span>
      <div className="commentTime">
        {isAuthenticated && (
          <ReplyIcon
            className={`${isVisible ? '' : 'isNotVisible'} icon reply-icon`}
            onClick={() => handleReply()}
          />
        )}
        {isAuthenticated && user.sub === auth0Id && (
          <DeleteIcon
            className={`${isVisible ? '' : 'isNotVisible'} icon delete-icon`}
            onClick={() => handleDeleteComment(commentId)}
          />
        )}
        {moment(created_at).fromNow()}
      </div>
      <SubCommentForm
        commentId={commentId}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <SubComments allSubcomments={subcomments} loading={loading} commentId={commentId}/>
    </div>
  )
}
export default Comment
