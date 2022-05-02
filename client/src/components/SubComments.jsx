import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { CircularProgress } from '@mui/material'

const SubComments = ({ allSubcomments, loading, commentId }) => {
  // fetch the subcomments by commentId
  // setup actions and a reducer for subcomments
  // add server-side routes for subcomments
  // add db functions for subcomments
  const [subcomments, setSubcomments] = useState([])
  useEffect(() => {
    setSubcomments(allSubcomments.filter(subcomment => subcomment.id === commentId))
  }, [allSubcomments])

  if (loading) return <CircularProgress />
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
