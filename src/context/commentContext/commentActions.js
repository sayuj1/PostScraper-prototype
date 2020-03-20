import {
  ADD_COMMENT,
  GET_COMMENTS,
  SET_POST_ID,
  CLEAR_POST_ID
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

export const Get_Comments = () => {
  return {
    type: GET_COMMENTS
  };
};