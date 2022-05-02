import React, { useState, useEffect } from 'react'
import moment from 'moment'

const SubComments = ({ allSubcomments, commentId }) => {
  const [subcomments, setSubcomments] = useState([])

  useEffect(() => {
    setSubcomments(allSubcomments.filter(subcomment => subcomment.comment_id === commentId))
  }, [allSubcomments, commentId])

  return (
    <div className="subcomments">
      {subcomments.map((subcomment, idx) => (
        <div className="subcomment" key={`subcomment-${idx}`}>
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
