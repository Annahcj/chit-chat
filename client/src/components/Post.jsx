import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Comment from './Comment'
import CommentForm from './CommentForm'
import DeleteIcon from '@mui/icons-material/Delete'
import CommentIcon from '@mui/icons-material/Comment'
import { CircularProgress } from '@mui/material'
import moment from 'moment'

import { useSelector, useDispatch } from 'react-redux'
import { getPost, deletePost } from '../state/actions/posts'
import {
  getCommentsByPostId,
  addComment,
  deleteComment,
} from '../state/actions/comments'

const Post = () => {
  const { id } = useParams()

  // because I have to call dispatch with the id on the first render, the post is initially undefined.
  // I had to set the loading state to false on the ADD_POST action for it to load
  const { loading, post } = useSelector((state) => state.posts)
  const { loading: commentsLoading, commentsByPostId: comments } = useSelector(
    (state) => state.comments
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const commentsRef = useRef()

  useEffect(() => {
    dispatch(getPost(id))
    dispatch(getCommentsByPostId(id))
  }, [id, dispatch])

  const handleSubmitComment = async (evt, postId, formAuthor, formComment) => {
    evt.preventDefault()
    dispatch(addComment(postId, formAuthor, formComment))
    commentsRef.current.scrollIntoView({ behavior: 'smooth' }) // automatically scroll down when new comment is added
  }

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(+commentId))
  }

  const handleDeletePost = () => {
    dispatch(deletePost(+id))
    navigate('/')
  }

  if (loading || commentsLoading) return <CircularProgress />
  return (
    <div className="post">
      <div className="content">
        <div className="heading">
          <h1>
            {post.title} <span className="h3">By {post.author}</span>
          </h1>
        </div>
        <div className="postTime">
          {moment(post.created_at).fromNow()}
          <DeleteIcon className="icon" onClick={handleDeletePost} />
        </div>
        <p>{post.content}</p>
      </div>
      {/* Comment form & Comments section */}
      <div className="comment-divider">
        <CommentIcon />
        <span className="commentCount">Comments: {comments.length}</span>
      </div>
      <CommentForm postId={id} handleSubmitComment={handleSubmitComment} />
      {comments.map((comment, idx) => {
        return (
          <Comment
            key={`${id}-${idx}`}
            commentId={comment.id}
            author={comment.author}
            comment={comment.comment}
            created_at={comment.created_at}
            handleDeleteComment={handleDeleteComment}
          />
        )
      })}
      <div ref={commentsRef} />
    </div>
  )
}
export default Post
