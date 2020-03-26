import {
  TOGGLE_POST_FILTER,
  GET_POSTS,
  SET_VIEW_POST,
  CLEAR_VIEW_POST,
  GET_VIEW_POST,
  SET_USER_POSTS,
  DELETE_USER_POSTS,
  SAVE_IMG,
  REMOVE_IMG
} from "./postTypes";

export const Filter_Post = () => {
  return {
    type: TOGGLE_POST_FILTER
  };
};

export const Get_Posts = () => {
  return {
    type: GET_POSTS
  };
};
export const Set_View_Post = post => {
  return {
    type: SET_VIEW_POST,
    payload: post
  };
};

export const Clear_View_Post = () => {
  return {
    type: CLEAR_VIEW_POST
  };
};

export const Get_View_Post = postId => {
  return {
    type: GET_VIEW_POST,
    payload: postId
  };
};

export const Set_User_Posts = userPosts => {
  return {
    type: SET_USER_POSTS,
    payload: userPosts
  };
};

export const Delete_User_Post = postId => {
  return {
    type: DELETE_USER_POSTS,
    payload: postId
  };
};

export const Save_Img = imgLocation => {
  return {
    type: SAVE_IMG,
    payload: imgLocation
  };
};

export const Remove_img = () => {
  return {
    type: REMOVE_IMG
  };
};
