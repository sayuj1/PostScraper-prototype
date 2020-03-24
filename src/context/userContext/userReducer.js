import React from "react";
import { GETUSER, SAVETOPICS } from "./userTypes";

export const userReducer = (state, action) => {
  switch (action.type) {
    case GETUSER:
      return { ...state };
    case SAVETOPICS:
      // const userState = { ...state };
      // userState.user.topicsFollow = action.payload;
      return {
        ...state,
        user: { ...state.user, topicsFollow: action.payload }
      };
    default:
      return { ...state };
  }
};
