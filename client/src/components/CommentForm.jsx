import React, { useState } from "react";

const CommentForm = ({ postId, submitComment }) => {
  const [formAuthor, setFormAuthor] = useState('');
  const [formComment, setFormComment] = useState('');
  return (
    <div>
      <form onSubmit={(e) => submitComment(e, postId, formAuthor, formComment)}>
        <input type="text" placeholder="your name" value={formAuthor} onChange={(e) => setFormAuthor(e.target.value)}/>
        {/* <input type="text" placeholder="leave a comment" value={formComment} onChange={(e) => setFormComment(e.target.value)}/> */}
        <textarea placeholder="leave a comment" value={formComment} onChange={(e) => setFormComment(e.target.value)}/>
        <input type="submit" value="Submit" className="btn submit" />
      </form>
    </div>
  )
}
export default CommentForm;