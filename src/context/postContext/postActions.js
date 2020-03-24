import {
  TOGGLE_POST_FILTER,
  GET_POSTS,
  SET_VIEW_POST,
  CLEAR_VIEW_POST,
  GET_VIEW_POST,
  SET_USER_POSTS
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
