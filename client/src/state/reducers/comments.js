import { GET_COMMENTS } from "../actionTypes"

const reducer = (comments = [], action) => {
  console.log(action)
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    default: 
      return comments;
  }
}
export default reducer;