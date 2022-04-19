import './App.css'
import Posts from './components/Posts'
import Post from './components/Post'
import PostForm from './components/PostForm'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as api from './api.js'
import { hasMatch } from './functions.js'

function App() {
  const [postAuthor, setPostAuthor] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')

  const [comments, setComments] = useState([])
  const [posts, setPosts] = useState([])

  const submitComment = (e, postId, author, comment) => {
    e.preventDefault()
    // call server-side endpoint to add comment to post and get comments
    api
      .addComment(author, comment, postId)
      .then((newComment) => {
        console.log({newComment})
        setComments([...comments, newComment])
      })
      .catch((err) => console.log(err))
  }

  const deleteComment = (commentId, postId) => {
    // call server-side endpoint /posts/postId/commentId
    api
      .deleteComment(commentId, postId)
      .then(() => {
        setComments(comments.filter((comment) => comment.id !== commentId))
      })
      .catch((err) => console.log(err))
  }

  const submitPost = (evt, postAuthor, postTitle, postContent) => {
    evt.preventDefault()
    // call server-side endpoint to add comment to post and get posts
    api
      .addPost(postAuthor, postTitle, postContent)
      .then((newPost) => {
        // console.log({newPost})
        setPosts([...posts, newPost])
      })
      .catch((err) => console.log(err))
  }

  const deletePost = (postId) => {
    postId = +postId

    api
      .deletePost(postId)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== postId))
        setComments(comments.filter((comment) => comment.post_id !== postId))
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    // fetch posts and comments on first render
    api
      .getPostsAndComments()
      .then((data) => {
        setPosts(data.posts)
        setComments(data.comments)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    setDisplayPosts(posts)
  }, [posts])

  // Search function
  const [displayPosts, setDisplayPosts] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const handleSearch = (e) => {
    setSearchKey(e.target.value)
    setDisplayPosts(
      posts.filter((post) => {
        return hasMatch(post.title.toLowerCase(), e.target.value)
      })
    )
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          index
          element={
            <Posts
              posts={displayPosts}
              searchKey={searchKey}
              setSearchKey={setSearchKey}
              handleSearch={handleSearch}
              comments={comments}
            />
          }
        />
        <Route
          path="/posts"
          element={
            <Posts
              posts={displayPosts}
              searchKey={searchKey}
              setSearchKey={setSearchKey}
              handleSearch={handleSearch}
              comments={comments}
            />
          }
        />
        <Route
          path="/posts/new"
          element={
            <PostForm
              postAuthor={postAuthor}
              setPostAuthor={setPostAuthor}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postContent={postContent}
              setPostContent={setPostContent}
              submitPost={submitPost}
            />
          }
        />
        <Route
          path="/posts/:id"
          element={
            <Post
              submitComment={submitComment}
              deleteComment={deleteComment}
              deletePost={deletePost}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
