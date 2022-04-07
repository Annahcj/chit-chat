import React from "react";

const PostForm = ({ postAuthor, setPostAuthor, postTitle, setPostTitle, postContent, setPostContent, submitPost }) => {
  return (
    <div className="form">
      <form onSubmit={(e) => submitPost(e, postAuthor, postTitle, postContent)}>
        <input type="text" placeholder="your name" value={postAuthor} onChange={(e) => setPostAuthor(e.target.value)}/>
        <input type="text" placeholder="post title" value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
        <textarea placeholder="post content" value={postContent} onChange={(e) => setPostContent(e.target.value)}/>
        <input type="submit" value="Submit" className="btn submit" />
      </form>
    </div>
  )
}
export default PostForm;