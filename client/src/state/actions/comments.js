
   
import * as api from '../../api.js';
import { GET_COMMENTS, GET_COMMENTS_BY_POST_ID, COMMENT_LOAD_START } from '../actionTypes.js';

export const getComments = () => {
  return async (dispatch) => {
    try {
      const comments = await api.getComments();
      console.log(comments)
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