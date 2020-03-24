import {
  ADD_COMMENT,
  SET_COMMENTS,
  SET_POST_ID,
  CLEAR_POST_ID
} from "./commentTypes";

const commentReducer = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        postComments: [action.payload, ...state.postComments]
      };
    case SET_COMMENTS:
      // console.log("reducer state", state);
      return {
        ...state
      };
    case SET_POST_ID:
      return {
        ...state,
        postId: action.payload
      };
    case CLEAR_POST_ID:
      return {
        ...state,
        postId: null
      };
    default:
      return state;
  }
};

export default commentReducer;
