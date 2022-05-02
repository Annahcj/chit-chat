import { SUBCOMMENTS_LOAD_START, GET_SUBCOMMENTS, ADD_SUBCOMMENT, DELETE_SUBCOMMENT } from '../actionTypes';

const initialState = {
  subcomments: [], // subcomments for a comment
  loading: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBCOMMENTS_LOAD_START:
      return { ...state, loading: true }
    case GET_SUBCOMMENTS:
      return { subcomments: action.payload, loading: false }
    case ADD_SUBCOMMENT:
      return { ...state, subcomments: [...state.subcomments, action.payload] }
    case DELETE_SUBCOMMENT:
      return { ...state, subcomments: state.subcomments.filter(subcomment => subcomment.id !== action.payload) }
    default:
      return state
  }
}

export default reducer;