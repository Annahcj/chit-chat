import {
  GET_COMMENTS,
  GET_COMMENTS_BY_POST_ID,
  COMMENT_LOAD_START,
  ADD_COMMENT,
  DELETE_COMMENT,
} from '../actionTypes'

const initialState = {
  comments: [],
  loading: true,
  commentsByPostId: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload, loading: false }
    case GET_COMMENTS_BY_POST_ID:
      return { ...state, commentsByPostId: action.payload, loading: false }
    case COMMENT_LOAD_START:
      return { ...state, loading: true }
    case ADD_COMMENT:
      return {
        comments: [...state.comments, action.payload],
        commentsByPostId: [...state.commentsByPostId, action.payload],
        loading: false,
      }
    case DELETE_COMMENT:
      return {
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
        commentsByPostId: state.commentsByPostId.filter(
          (comment) => comment.id !== action.payload
        ),
        loading: false,
      }
    default:
      return state
  }
}
export default reducer
