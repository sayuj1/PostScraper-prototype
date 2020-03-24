import {
  TOGGLE_POST_FILTER,
  GET_POSTS,
  SET_VIEW_POST,
  CLEAR_VIEW_POST,
  GET_VIEW_POST,
  SET_USER_POSTS
} from "./postTypes";

const postReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_POST_FILTER:
      return { ...state, filterPost: !state.filterPost };
    case GET_POSTS:
      return { ...state };
    case SET_VIEW_POST:
      return { ...state, viewPostId: action.payload };
    case GET_VIEW_POST:
      return {
        ...state,
        viewPost: state.posts.filter(post => post._id === action.payload)
      };
    case CLEAR_VIEW_POST:
      return {
        ...state,
        viewPostId: null,
        viewPost: null
      };
    case SET_USER_POSTS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default postReducer;
