import { TOGGLE_POST_FILTER } from "./postTypes";

const postReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_POST_FILTER:
      return { ...state, filterPost: !state.filterPost };
    default:
      return state;
  }
};

export default postReducer;
