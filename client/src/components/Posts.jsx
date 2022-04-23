import React from "react";
import PostDisplay from "./PostDisplay";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { getCommentsCount } from "../functions";

const Posts = ({ posts, searchKey, handleSearch, comments }) => {
  let commentsCount = getCommentsCount(posts, comments);
  // console.log(posts, comments, 'posts and comments')
  return (
    <div className="posts">
      <Link to="/posts/new"><button className="btn">New Post</button></Link>
      <span className="search-bar">
        <input type="text" value={searchKey} onChange={handleSearch} className="search-input"/>
        <SearchIcon className="search-icon"/>
      </span>
      {posts.map((post) => <PostDisplay key={'post' + post.id} postId={post.id} title={post.title} commentsCount={commentsCount[post.id]}/>)}
    </div>
  )
}
export default Posts;