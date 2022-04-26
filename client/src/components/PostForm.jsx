import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addPost } from '../state/actions/posts'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const PostForm = () => {
  // const [postAuthor, setPostAuthor] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useAuth0();

  // add handleSubmit function here to call submitPost and reset form inputs
  const handleSubmit = (evt) => {
    evt.preventDefault()
    // next task: add auth0Id (user.sub)
    dispatch(addPost(user.nickname, postTitle, postContent))
    setPostTitle('')
    setPostContent('')
    navigate('/')
  }
  return (
    <div className="form">
      <h3>Create a new post</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="postTitle"
          placeholder="post title"
          value={postTitle}
          onChange={(evt) => setPostTitle(evt.target.value)}
          required
        />
        <textarea
          placeholder="post content"
          value={postContent}
          onChange={(evt) => setPostContent(evt.target.value)}
          required
        />
        <input type="submit" value="Submit" className="btn submit" />
      </form>
    </div>
  )
}
export default PostForm
