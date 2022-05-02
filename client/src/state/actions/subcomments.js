import * as api from '../../api.js';
import { SUBCOMMENTS_LOAD_START, GET_SUBCOMMENTS } from '../actionTypes.js';

export const getSubcomments = (commentId) => {
  return async (dispatch) => {
    dispatch({ type: SUBCOMMENTS_LOAD_START })

    
  }
}