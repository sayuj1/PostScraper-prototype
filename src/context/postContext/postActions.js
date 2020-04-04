import {
  SET_LOADING,
  REMOVE_LOADING,
  TOGGLE_POST_FILTER,
  GET_POSTS,
  SET_VIEW_POST,
  CLEAR_VIEW_POST,
  GET_VIEW_POST,
  GET_VIEW_USER_POST,
  SET_USER_POSTS,
  DELETE_USER_POSTS,
  SAVE_IMG,
  REMOVE_IMG,
  SAVE_NEW_POST,
  UPDATE_USER_POST_INFO,
  UPDATE_USER_HOME_POST_INFO,
  EDIT_POST,
  CLEAR_EDIT_POST,
  UPDATE_EDIT_POST
} from "./postTypes";

export const Set_Loading = loading => {
  return {
    type: SET_LOADING,
    payload: loading
  };
};

export const Remove_Loading = loading => {
  return {
    type: REMOVE_LOADING,
    payload: loading
  };
};

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
export const Get_View_User_Post = postId => {
  return {
    type: GET_VIEW_USER_POST,
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

export const Save_New_Post = postData => {
  return {
    type: SAVE_NEW_POST,
    payload: postData
  };
};

export const Update_User_Post_Info = user => {
  return {
    type: UPDATE_USER_POST_INFO,
    payload: user
  };
};

export const Update_User_Home_Post_Info = user => {
  return {
    type: UPDATE_USER_HOME_POST_INFO,
    payload: user
  };
};

export const Edit_Post = post => {
  return {
    type: EDIT_POST,
    payload: post
  };
};

export const Clear_Edit_Post = () => {
  return {
    type: CLEAR_EDIT_POST
  };
};

export const Update_Edit_Post = post => {
  return {
    type: UPDATE_EDIT_POST,
    payload: post
  };
};
