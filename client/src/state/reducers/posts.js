import { GET_POSTS, ADD_POST, GET_POST, LOAD_START } from "../actionTypes"

const initialState = {
  posts: [],
  loading: true,
  post: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return { ...state, loading: true };
    case GET_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case ADD_POST:
      return { posts: [...state.posts, action.payload], loading: true };
    case GET_POST:
      return { ...state, post: action.payload, loading: false };
    default:
      return state;
  }
}

export default reducer;