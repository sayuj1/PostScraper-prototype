import {
  GET_USER,
  SAVE_TOPICS,
  SAVE_AVATAR,
  REMOVE_AVATAR,
  UPDATE_USER
} from "./userTypes";

export const userReducer = (state, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state };
    case SAVE_TOPICS:
      return {
        ...state,
        user: { ...state.user, topicsFollow: action.payload }
      };

    case SAVE_AVATAR:
      return {
        ...state,
        user: { ...state.user, avatar: action.payload }
      };
    case REMOVE_AVATAR:
      return {
        ...state,
        user: { ...state.user, avatar: null }
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return { ...state };
  }
};
