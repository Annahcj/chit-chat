import * as api from '../../api.js'
import { SUBCOMMENTS_LOAD_START, GET_SUBCOMMENTS, ADD_SUBCOMMENT, DELETE_SUBCOMMENT } from '../actionTypes.js'

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

export const addSubcomment = (subcomment, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SUBCOMMENTS_LOAD_START })

      const newSubcomment = await api.addSubcomment(subcomment, token)
      dispatch({
        type: ADD_SUBCOMMENT,
        payload: newSubcomment
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteSubcomment = (id, token) => {
  return async (dispatch) => {
    try {
      await api.deleteSubcomment(id, token)
      dispatch({
        type: DELETE_SUBCOMMENT,
        payload: id
      })
    } catch (error) {
      console.log(error)
    }
  }
}