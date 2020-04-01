import {
  ADD_COMMENT,
  SET_COMMENTS,
  SET_POST_ID,
  CLEAR_POST_ID,
  UPDATE_USER_COMMENT
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
    case UPDATE_USER_COMMENT:
      return {
        ...state,
        postComments: state.postComments.map(comment =>
          comment.username.toLowerCase() ===
          action.payload.username.toLowerCase()
            ? { ...comment, avatar: action.payload.avatar }
            : { ...comment }
        )
      };
    default:
      return state;
  }
};

export default commentReducer;
