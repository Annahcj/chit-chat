import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Post = ({ handleSubmit }) => {
  const { id } = useParams()
  let title = 'Some title', content = 'Some content';
  let author = 'Anna';
  let likes = 5, dislikes = 1;
  let comments = [
    {author: 'Snoopy', comment: 'Your first post!'}
  ]
  // get data for post by id
  return (
    <>
      <h1>{title} <span className="h3">By {author}</span></h1>
      <p>{content}</p>
      {/* Comment form & Comments section below */}
      <CommentForm postId={id} handleSubmit={handleSubmit}/>
      {comments.map((comment, idx) => {
        return <Comment key={`${id}-${idx}`} author={comment.author} comment={comment.comment}/>
      })}
    </>
  )
}
export default Post;