import './App.css';
import Posts from './components/Posts';
import Post from './components/Post';
import PostForm from './components/PostForm';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

const posts = [
  {id: 1, title: 'My first topic', content: 'Some example content :D', likes: 1, dislikes: 1, author: 'Anna' },
  {id: 2, title: 'My second topic', content: 'Some more example content :D', likes: 5, dislikes: 0, author: 'Snoopy' },
]
function App() {
  const [formAuthor, setFormAuthor] = useState('');
  const [formComment, setFormComment] = useState('');

  const [postAuthor, setPostAuthor] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const submitComment = (e, postId, author, comment) => {
    e.preventDefault();
    // call server-side endpoint to add comment to post
    const payload = {
      author,
      comment,
      postId
    }
    fetch('http://localhost:5500/comments', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const submitPost = (e, postAuthor, postTitle, postContent) => {
    e.preventDefault();
    // call server-side endpoint to add comment to post
    const payload = {
      author: postAuthor,
      title: postTitle,
      content: postContent
    }
    fetch('http://localhost:5500/posts/new', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      Welcome to ChitChat
      <Link to="/"><button className="btn">Home</button></Link>
      <Routes>
        <Route index element={<Posts posts={posts} />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/posts/new" element={<PostForm postAuthor={postAuthor} setPostAuthor={setPostAuthor} postTitle={postTitle} setPostTitle={setPostTitle} postContent={postContent} setPostContent={setPostContent} submitPost={submitPost}/>} />
        <Route path="/posts/:id" element={<Post formAuthor={formAuthor} setFormAuthor={setFormAuthor} formComment={formComment} setFormComment={setFormComment} submitComment={submitComment}/>}/>
      </Routes>
    </div>
  );
}

export default App;
