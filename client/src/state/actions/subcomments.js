import * as api from '../../api.js'
import { SUBCOMMENTS_LOAD_START, GET_SUBCOMMENTS } from '../actionTypes.js'

export const getSubcomments = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SUBCOMMENTS_LOAD_START })

      const subcomments = await api.getSubcomments()
      dispatch({
        type: GET_SUBCOMMENTS,
        payload: subcomments,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
