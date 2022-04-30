import './App.css'
import Posts from './components/Posts'
import Post from './components/Post'
import PostForm from './components/PostForm'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { hasMatch } from './functions.js'

import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from './state/actions/posts'
import { getComments } from './state/actions/comments'

function App() {
  const { comments } = useSelector((state) => state.comments)
  const { posts } = useSelector((state) => state.posts)

  const dispatch = useDispatch()

  useEffect(() => {
    // fetch posts and comments on first render
    dispatch(getPosts())
    dispatch(getComments())
  }, [dispatch])

  useEffect(() => {
    setDisplayPosts([...posts].reverse())
  }, [posts])

  // Search function
  const [displayPosts, setDisplayPosts] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const handleSearch = (e) => {
    setSearchKey(e.target.value)
    setDisplayPosts(
      posts.filter((post) => {
        return hasMatch(post.title.toLowerCase(), e.target.value)
      }).reverse()
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
        <Route path="/posts/new" element={<PostForm />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  )
}

export default App
