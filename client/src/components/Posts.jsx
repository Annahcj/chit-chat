import React from "react";
import PostDisplay from "./PostDisplay";
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  return (
    <>
    <Link to="/posts/new">New</Link>
    {posts.map((post) => <PostDisplay key={'post' + post.id} postId={post.id} title={post.title} likes={post.likes} dislikes={post.dislikes}/>)}
    </>
  )
}
export default Posts;