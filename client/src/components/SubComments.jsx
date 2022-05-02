import React from 'react'
import moment from 'moment'

const SubComments = ({ subcomments, commentId }) => {
  // fetch the subcomments by commentId
  // setup actions and a reducer for subcomments
  // add server-side routes for subcomments
  // add db functions for subcomments
  return (
    <div className="subcomments">
      {subcomments.map((subcomment) => (
        <div className="subcomment">
          <span className="bold">{subcomment.author}</span>
          <span className="comment-content">{subcomment.comment}</span>
          <div className="commentTime">
            {moment(subcomment.created_at).fromNow()}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SubComments
