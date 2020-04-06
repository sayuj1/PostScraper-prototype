import {
  SET_LOADING,
  TOGGLE_POST_FILTER,
  GET_POSTS,
  CLEAR_VIEW_POST,
  GET_VIEW_POST,
  GET_VIEW_USER_POST,
  SET_USER_POSTS,
  DELETE_USER_POSTS,
  SAVE_NEW_POST,
  UPDATE_USER_POST_INFO,
  UPDATE_USER_HOME_POST_INFO,
  EDIT_POST,
  CLEAR_EDIT_POST,
  UPDATE_EDIT_POST,
  FILTER_USER_POSTS,
  SEARCH_USER_POSTS_FILTER,
  CLEAR_SEARCH_USER_POSTS_FILTER,
} from "./postTypes";

export const Set_Loading = (loading) => {
  return {
    type: SET_LOADING,
    payload: loading,
  };
};

export const Filter_Post = () => {
  return {
    type: TOGGLE_POST_FILTER,
  };
};

export const Get_Posts = () => {
  return {
    type: GET_POSTS,
  };
};

export const Clear_View_Post = () => {
  return {
    type: CLEAR_VIEW_POST,
  };
};

export const Get_View_Post = (postId) => {
  return {
    type: GET_VIEW_POST,
    payload: postId,
  };
};
export const Get_View_User_Post = (postId) => {
  return {
    type: GET_VIEW_USER_POST,
    payload: postId,
  };
};
export const Set_User_Posts = (userPosts) => {
  return {
    type: SET_USER_POSTS,
    payload: userPosts,
  };
};

export const Delete_User_Post = (postId) => {
  return {
    type: DELETE_USER_POSTS,
    payload: postId,
  };
};

export const Save_New_Post = (postData) => {
  return {
    type: SAVE_NEW_POST,
    payload: postData,
  };
};

export const Update_User_Post_Info = (user) => {
  return {
    type: UPDATE_USER_POST_INFO,
    payload: user,
  };
};

export const Update_User_Home_Post_Info = (user) => {
  return {
    type: UPDATE_USER_HOME_POST_INFO,
    payload: user,
  };
};

export const Edit_Post = (post) => {
  return {
    type: EDIT_POST,
    payload: post,
  };
};

export const Clear_Edit_Post = () => {
  return {
    type: CLEAR_EDIT_POST,
  };
};

export const Update_Edit_Post = (post) => {
  return {
    type: UPDATE_EDIT_POST,
    payload: post,
  };
};

export const Filter_User_Posts = (filter) => {
  return {
    type: FILTER_USER_POSTS,
    payload: filter,
  };
};

export const Search_User_Posts_Filter = (searchValue, filterType) => {
  return {
    type: SEARCH_USER_POSTS_FILTER,
    payload: { value: searchValue, filter: filterType },
  };
};

export const Clear_Search_User_Posts_Filter = () => {
  return {
    type: CLEAR_SEARCH_USER_POSTS_FILTER,
  };
};
