import './App.css';
import Posts from './components/Posts';
import Post from './components/Post';
import PostForm from './components/PostForm';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// const posts = [
//   { id: 1, title: 'My first topic', content: 'Some example content :D', likes: 1, dislikes: 1, author: 'Anna' },
//   { id: 2, title: 'My second topic', content: 'Some more example content :D', likes: 5, dislikes: 0, author: 'Snoopy' },
// ]
function App() {
  const [formAuthor, setFormAuthor] = useState('');
  const [formComment, setFormComment] = useState('');

  const [postAuthor, setPostAuthor] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([])

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
        return res.json();
      })
      .then(data => {
        setComments(processComments(data.posts, data.comments));
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  // process comments -> { post_id: [comment, comment], post_id: [comment, ...] }
  const processComments = (posts, comments) => {
    let res = {};
    for (let post of posts) {
      res[post.id] = [];
    }
    for (let comment of comments) {
      let post_id = comment.post_id;
      res[post_id].push(comment);
    }
    return res;
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
        return res.json();
      })
      .then(data => {
        // console.log(data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    // fetch data
    fetch('http://localhost:5500/posts', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setComments(processComments(data.posts, data.comments));
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      Welcome to ChitChat
      <Link to="/"><button className="btn">Home</button></Link>
      <Routes>
        <Route index element={<Posts posts={posts} />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/posts/new" element={<PostForm postAuthor={postAuthor} setPostAuthor={setPostAuthor} postTitle={postTitle} setPostTitle={setPostTitle} postContent={postContent} setPostContent={setPostContent} submitPost={submitPost} />} />
        <Route path="/posts/:id" element={<Post formAuthor={formAuthor} setFormAuthor={setFormAuthor} formComment={formComment} setFormComment={setFormComment} submitComment={submitComment} comments={comments} posts={posts}/>} />
      </Routes>
    </div>
  );
}

export default App;
