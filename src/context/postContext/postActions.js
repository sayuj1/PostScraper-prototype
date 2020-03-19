import {
  TOGGLE_POST_FILTER,
  SET_VIEW_POST,
  CLEAR_VIEW_POST,
  GET_VIEW_POST
} from "./postTypes";

export const Filter_Post = () => {
  return {
    type: TOGGLE_POST_FILTER
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
