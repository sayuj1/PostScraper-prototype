import {
  GET_ALL_TAGS,
  GET_SELECTED_TAGS,
  SET_SELECTED_TAG,
  REMOVE_SELECTED_TAG
} from "./followingTypes";

const followingReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_TAG:
      return {
        ...state,
        selectedTags: [...state.selectedTags, action.payload]
      };
    case REMOVE_SELECTED_TAG:
      return {
        ...state,
        selectedTags: state.selectedTags.filter(tag => tag !== action.payload)
      };
    default:
      return state;
  }
};

export default followingReducer;
