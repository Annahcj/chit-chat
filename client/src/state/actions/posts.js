import * as api from '../../api.js';
import { GET_POSTS, ADD_POST, GET_POST, LOAD_START } from '../actionTypes.js';

export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_START })
      const posts = await api.getPosts();
      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addPost = (postAuthor, postTitle, postContent) => {
  return async (dispatch) => {
    try {
      const newPost = await api.addPost(postAuthor, postTitle, postContent);

      dispatch({
        type: ADD_POST,
        payload: newPost
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getPost = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_START })
      const post = await api.getPost(id);
      console.log(id, post)
      dispatch({
        type: GET_POST,
        payload: post
      })
    } catch (error) {
      console.log(error)
    }
  }
}