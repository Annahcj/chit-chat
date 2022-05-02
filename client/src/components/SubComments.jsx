import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { getSubcomments } from '../state/actions/subcomments'
import { useSelector, useDispatch } from 'react-redux'

const SubComments = ({ commentId }) => {
  // fetch the subcomments by commentId
  // setup actions and a reducer for subcomments
  // add server-side routes for subcomments
  // add db functions for subcomments
  
  const dispatch = useDispatch()

  const { subcomments, loading } = useSelector(state => state.subcomments);
  console.log(subcomments)
  // useEffect(() => {
  //   dispatch(getSubcomments(commentId))
  // }, [])

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
