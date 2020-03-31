import {
  ADD_COMMENT,
  SET_COMMENTS,
  SET_POST_ID,
  CLEAR_POST_ID,
  UPDATE_USER_COMMENT
} from "./commentTypes";

export const Set_Post_Id = postId => {
  return {
    type: SET_POST_ID,
    payload: postId
  };
};

export const Clear_Post_Id = () => {
  return {
    type: CLEAR_POST_ID
  };
};

export const Add_Comment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment
  };
};

export const Set_Comments = postId => {
  return {
    type: SET_COMMENTS,
    payload: postId
  };
};

export const Update_User_Comment = user => {
  return {
    type: UPDATE_USER_COMMENT,
    payload: user
  };
};
