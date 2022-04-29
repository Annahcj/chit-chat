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

import { useAuth0 } from '@auth0/auth0-react'

const Post = () => {
  const { id } = useParams()

  const { loading, post } = useSelector((state) => state.posts)
  const { loading: commentsLoading, commentsByPostId: comments } = useSelector(
    (state) => state.comments
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const commentsRef = useRef()

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    dispatch(getPost(id))
    dispatch(getCommentsByPostId(id))
  }, [id, dispatch])

  const handleSubmitComment = async (
    evt,
    postId,
    formAuthor,
    formComment,
    auth0Id
  ) => {
    evt.preventDefault()
    dispatch(addComment(postId, formAuthor, formComment, auth0Id))
    commentsRef.current.scrollIntoView({ behavior: 'smooth' }) // automatically scroll down when new comment is added
  }

  const handleDeleteComment = async (commentId) => {
    dispatch(deleteComment(+commentId))
  }

  const handleDeletePost = async () => {
    const token = await getAccessTokenSilently()

    dispatch(deletePost(+id, token))
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
          {isAuthenticated && user.sub === post.auth0Id && (
            <DeleteIcon className="icon" onClick={handleDeletePost} />
          )}
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
            auth0Id={comment.auth0Id}
            handleDeleteComment={handleDeleteComment}
          />
        )
      })}
      <div ref={commentsRef} />
    </div>
  )
}
export default Post
