import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const PostForm = ({ submitPost }) => {
  const [postAuthor, setPostAuthor] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const navigate = useNavigate();
  // add handleSubmit function here to call submitPost and reset form inputs
  const handleSubmit = (evt) => {
    submitPost(evt, postAuthor, postTitle, postContent);
    setPostAuthor('');
    setPostTitle('');
    setPostContent('');
    navigate('/');
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="your name" value={postAuthor} onChange={(evt) => setPostAuthor(evt.target.value)}/>
        <input type="text" placeholder="post title" value={postTitle} onChange={(evt) => setPostTitle(evt.target.value)}/>
        <textarea placeholder="post content" value={postContent} onChange={(evt) => setPostContent(evt.target.value)}/>
        <input type="submit" value="Submit" className="btn submit" />
      </form>
    </div>
  )
}
export default PostForm;