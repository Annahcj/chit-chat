
   
import * as api from '../../api.js';
import { GET_COMMENTS } from '../actionTypes.js';

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