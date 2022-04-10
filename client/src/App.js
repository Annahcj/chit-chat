import './App.css';
import Posts from './components/Posts';
import Post from './components/Post';
import PostForm from './components/PostForm';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from './api.js';

function App() {

  const [postAuthor, setPostAuthor] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([])

  const submitComment = (e, postId, author, comment) => {
    e.preventDefault();
    // call server-side endpoint to add comment to post and get comments
    api.addComment(author, comment, postId)
      .then(data => {
        setComments(data.comments)
      })
      .catch(err => console.log(err))
  }

  const submitPost = (evt, postAuthor, postTitle, postContent) => {
    evt.preventDefault();
    // call server-side endpoint to add comment to post and get posts
    api.addPost(postAuthor, postTitle, postContent)
    .then(data => {
      setPosts(data)
    })
    .catch(err => console.log(err))
  }

  const deleteComment = (commentId, postId) => {
    // call server-side endpoint /posts/postId/commentId
    api.deleteComment(commentId, postId)
      .then(data => {
        setComments(data.comments);
      })
      .catch(err => console.log(err))
  }

  const deletePost = (postId) => {
    api.deletePost(postId)
      .then(data => {
        setPosts(data.posts);
        setComments(data.comments);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    // fetch posts and comments on first render
    api.getPostsAndComments()
      .then(data => {
        setPosts(data.posts);
        setComments(data.comments);
      })
      .catch(err => console.log(err))
  }, [])

  // Next task: Delete functionality for comments and posts

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Posts posts={posts} />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/posts/new" element={<PostForm postAuthor={postAuthor} setPostAuthor={setPostAuthor} postTitle={postTitle} setPostTitle={setPostTitle} postContent={postContent} setPostContent={setPostContent} submitPost={submitPost} />} />
        <Route path="/posts/:id" element={<Post submitComment={submitComment} deleteComment={deleteComment} deletePost={deletePost}/>} />
      </Routes>
    </div>
  );
}

export default App;
