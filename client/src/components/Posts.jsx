import React from "react";
import PostDisplay from "./PostDisplay";

const Posts = ({ posts }) => {
  return (
    <>
    {posts.map((post, idx) => <PostDisplay key={'post' + idx} title={post.title} likes={post.likes} dislikes={post.dislikes}/>)}
    </>
  )
}
export default Posts;