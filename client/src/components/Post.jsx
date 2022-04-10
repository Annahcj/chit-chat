import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import * as api from '../api.js';

const Post = ({ submitComment, deleteComment }) => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const commentsRef = useRef();

  useEffect(() => {
    api.getPostAndCommentsByPostId(id)
      .then(data => {
        setPost(data.post);
        setComments(data.comments);
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmitComment = (evt, postId, formAuthor, formComment) => {
    submitComment(evt, postId, formAuthor, formComment)
    // re-fetch post data & comments by postId from server side
    api.getPostAndCommentsByPostId(id)
      .then(data => {
        setPost(data.post);
        setComments(data.comments);
        commentsRef.current.scrollIntoView({ behavior: 'smooth' }); // automatically scroll down when new comment is added
      })
      .catch(err => console.log(err))
  }

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId, id);
    console.log('delete')
    // re-fetch comment data
    api.getPostAndCommentsByPostId(id)
      .then(data => {
        console.log(data)
        setPost(data.post);
        setComments(data.comments);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="post">
      <div className="content">
        <h1>{post.title} <span className="h3">By {post.author}</span></h1>
        <p>{post.content}</p>
      </div>
      {/* Comment form & Comments section below */}
      <div className="comment-divider">Comments: {comments.length}</div>
      <CommentForm postId={id} handleSubmitComment={handleSubmitComment}/>
      {comments.map((comment, idx) => {
        return (
          <Comment 
            key={`${id}-${idx}`} 
            commentId={comment.id} 
            author={comment.author} 
            comment={comment.comment} 
            handleDeleteComment={handleDeleteComment}/>
        )
      })}
      <div ref={commentsRef} />
    </div>
  )
}
export default Post;