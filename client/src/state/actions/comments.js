
   
import * as api from '../../api.js';
import { GET_COMMENTS, GET_COMMENTS_BY_POST_ID, COMMENT_LOAD_START, ADD_COMMENT } from '../actionTypes.js';

export const getComments = () => {
  return async (dispatch) => {
    try {
      const comments = await api.getComments();
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCommentsByPostId = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: COMMENT_LOAD_START
      })
      const comments = await api.getCommentsByPostId(id);
      dispatch({
        type: GET_COMMENTS_BY_POST_ID,
        payload: comments
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addComment = (postId, formAuthor, formComment) => {
  return async (dispatch) => {
    try {
      dispatch({ type: COMMENT_LOAD_START })

      const newComment = await api.addComment(postId, formAuthor, formComment);
      dispatch({
        type: ADD_COMMENT,
        payload: newComment
      })

    } catch (error) {
      console.log(error)
    }
  }
}