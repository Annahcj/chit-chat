import React, { useState } from "react";

const CommentForm = ({ postId, submitComment }) => {
  const [formAuthor, setFormAuthor] = useState('');
  const [formComment, setFormComment] = useState('');

  const handleSubmit = (evt) => {
    submitComment(evt, postId, formAuthor, formComment)
    setFormAuthor('');
    setFormComment('');

    setTimeout(() => {
      const scrollingElement = (document.scrollingElement || document.body);
      scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }, 500)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="your name" value={formAuthor} onChange={(e) => setFormAuthor(e.target.value)}/>
        <textarea placeholder="leave a comment" value={formComment} onChange={(e) => setFormComment(e.target.value)}/>
        <input type="submit" value="Submit" className="btn submit" />
      </form>
    </div>
  )
}
export default CommentForm;