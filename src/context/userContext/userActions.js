import {
  GET_USER_THEME,
  GET_USER,
  SAVE_TOPICS,
  SAVE_AVATAR,
  REMOVE_AVATAR,
  UPDATE_USER,
} from "./userTypes";

export const Get_User_Theme = (theme) => {
  return {
    type: GET_USER_THEME,
    payload: theme,
  };
};
export const Get_User = () => {
  return {
    type: GET_USER,
  };
};

export const Save_Topics = (topics) => {
  return {
    type: SAVE_TOPICS,
    payload: topics,
  };
};

export const Save_Avatar = (userAvatar) => {
  return {
    type: SAVE_AVATAR,
    payload: userAvatar,
  };
};

export const Remove_Avatar = () => {
  return {
    type: REMOVE_AVATAR,
  };
};

export const Update_User = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
