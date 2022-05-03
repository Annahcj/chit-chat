import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAuth0 } from '@auth0/auth0-react'
import { deleteSubcomment } from '../state/actions/subcomments'

const SubComments = ({ allSubcomments, commentId }) => {
  const [subcomments, setSubcomments] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()

  const [showSubcomments, setShowSubcomments] = useState(false)

  const handleDelete = async (id) => {
    // dispatch delete subcomment action
    const token = await getAccessTokenSilently()
    dispatch(deleteSubcomment(id, token))
  }

  useEffect(() => {
    setSubcomments(
      allSubcomments.filter((subcomment) => subcomment.comment_id === commentId)
    )
  }, [allSubcomments, commentId])

  return (
    <>
      <div className="show-reply-div">
        {subcomments.length > 0 &&
          (showSubcomments ? (
            <button
              onClick={() => setShowSubcomments(!showSubcomments)}
              className="show-hide-btn"
            >
              Hide {subcomments.length}{' '}
              {subcomments.length === 1 ? 'Reply' : 'Replies'}
            </button>
          ) : (
            <button
              onClick={() => setShowSubcomments(!showSubcomments)}
              className="show-hide-btn"
            >
              Show {subcomments.length}{' '}
              {subcomments.length === 1 ? 'Reply' : 'Replies'}
            </button>
          ))}
      </div>
      {showSubcomments && (
        <div className="subcomments">
          {subcomments.map((subcomment, idx) => (
            <div
              className="subcomment"
              key={`subcomment-${idx}`}
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            >
              <span className="bold">{subcomment.author}</span>
              <span className="comment-content">{subcomment.comment}</span>
              <div className="commentTime">
                {isAuthenticated && user.sub === subcomment.auth0Id && (
                  <DeleteIcon
                    className={`${
                      isVisible ? '' : 'isNotVisible'
                    } icon delete-icon`}
                    onClick={() => handleDelete(subcomment.id)}
                  />
                )}
                {moment(subcomment.created_at).fromNow()}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SubComments
