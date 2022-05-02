import * as api from '../../api.js'
import { SUBCOMMENTS_LOAD_START, GET_SUBCOMMENTS, ADD_SUBCOMMENT } from '../actionTypes.js'

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

export const addSubcomment = (commentId, auth0Id, data, token) => {
  return async (dispatch) => {
    try {
    // table.integer('comment_id').references('comments.id').onDelete('CASCADE')
    // table.string('author')
    // table.text('comment')
    // table.datetime('created_at')
    // table.string('auth0Id')
      const subcomment = {
        ...data,
        comment_id: commentId,
        auth0Id
      }

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