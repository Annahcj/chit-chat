import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Comment from './Comment'
import CommentForm from './CommentForm'
import * as api from '../api.js'
import DeleteIcon from '@mui/icons-material/Delete'
import CommentIcon from '@mui/icons-material/Comment'
import { CircularProgress } from '@mui/material';
import moment from 'moment'

const Post = ({ submitComment, deleteComment, deletePost }) => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const commentsRef = useRef()

  useEffect(() => {
    setLoading(true);

    api
      .getPostAndCommentsByPostId(id)
      .then((data) => {
        setPost(data.post)
        setComments(data.comments)
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err))
  }, [id])

  const handleSubmitComment = (evt, postId, formAuthor, formComment) => {
    submitComment(evt, postId, formAuthor, formComment)
    // re-fetch post data & comments by postId from server side

    api
      .getPostAndCommentsByPostId(id)
      .then((data) => {
        setPost(data.post)
        setComments(data.comments)
        commentsRef.current.scrollIntoView({ behavior: 'smooth' }) // automatically scroll down when new comment is added
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId, id)

    commentId = +commentId
    setComments(comments.filter((comment) => comment.id !== commentId))
  }

  const handleDeletePost = () => {
    deletePost(id)
    navigate('/')
  }

  if (loading) return <CircularProgress />
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
      {/* Comment form & Comments section below */}
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
