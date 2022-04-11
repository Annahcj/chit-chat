import React from "react";
import PostDisplay from "./PostDisplay";
import { Link } from 'react-router-dom';

const Posts = ({ posts, searchKey, handleSearch }) => {
  return (
    <div className="posts">
      <Link to="/posts/new"><button className="btn">New Post</button></Link>
      <input type="text" value={searchKey} onChange={handleSearch}/>
      {posts.map((post) => <PostDisplay key={'post' + post.id} postId={post.id} title={post.title}/>)}
    </div>
  )
}
export default Posts;