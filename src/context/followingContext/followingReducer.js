import {
  GET_ALL_TAGS,
  GET_SELECTED_TAGS,
  SET_SELECTED_TAG,
  REMOVE_SELECTED_TAG,
  SET_SELECTED_TAGS_SAVE_WARNING,
  REMOVE_SELECTED_TAGS_SAVE_WARNING
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
    case SET_SELECTED_TAGS_SAVE_WARNING:
      return {
        ...state,
        selectedTagsSaveWarning: true
      };
    case REMOVE_SELECTED_TAGS_SAVE_WARNING:
      return {
        ...state,
        selectedTagsSaveWarning: false
      };
    default:
      return state;
  }
};

export default followingReducer;
