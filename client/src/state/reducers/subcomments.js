import { SUBCOMMENTS_LOAD_START, GET_SUBCOMMENTS } from '../actionTypes';

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
    default:
      return state
  }
}

export default reducer;