import { GET_COMMENTS, GET_COMMENTS_BY_POST_ID, COMMENT_LOAD_START } from "../actionTypes"

const initialState = {
  comments: [],
  loading: true,
  commentsByPostId: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload, loading: false }
    case GET_COMMENTS_BY_POST_ID:
      return { ...state, commentsByPostId: action.payload, loading: false };
    case COMMENT_LOAD_START:
      return { ...state, loading: true }
    default: 
      return state;
  }
}
export default reducer;