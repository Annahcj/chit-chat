import React, { useState } from "react";

const CommentForm = ({ postId, handleSubmit }) => {
  const [formAuthor, setFormAuthor] = useState('');
  const [formComment, setFormComment] = useState('');
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, postId, formAuthor, formComment)}>
        <input type="text" placeholder="your name" value={formAuthor} onChange={(e) => setFormAuthor(e.target.value)}/>
        <input type="text" placeholder="leave a comment" value={formComment} onChange={(e) => setFormComment(e.target.value)}/>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
export default CommentForm;