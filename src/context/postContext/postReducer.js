import {
  TOGGLE_POST_FILTER,
  SET_VIEW_POST,
  CLEAR_VIEW_POST,
  GET_REQUESTED_POST
} from "./postTypes";

const postReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_POST_FILTER:
      return { ...state, filterPost: !state.filterPost };

    case SET_VIEW_POST:
      return { ...state, viewRequestedPost: action.payload };
    case GET_REQUESTED_POST:
      return {
        ...state,
        requestedPost: state.posts.filter(post => post._id === action.payload)
      };
    case CLEAR_VIEW_POST:
      return {
        ...state,
        viewRequestedPost: null,
        requestedPost: null
      };
    default:
      return state;
  }
};

export default postReducer;
