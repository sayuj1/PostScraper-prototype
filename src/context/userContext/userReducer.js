import React from "react";
import {
  GETUSER,
  SAVETOPICS,
  EDITABLEUSER,
  CLEAREDITABLEUSER,
  SAVEAVATAR,
  REMOVEAVATAR
} from "./userTypes";

export const userReducer = (state, action) => {
  switch (action.type) {
    case GETUSER:
      return { ...state };
    case SAVETOPICS:
      return {
        ...state,
        user: { ...state.user, topicsFollow: action.payload }
      };
    case EDITABLEUSER:
      return {
        ...state,
        editableUser: action.payload
      };
    case CLEAREDITABLEUSER:
      return {
        ...state,
        editableUser: null
      };
    case SAVEAVATAR:
      return {
        ...state,
        user: { ...state.user, avatar: action.payload }
      };
    case REMOVEAVATAR:
      return {
        ...state,
        user: { ...state.user, avatar: null }
      };
    default:
      return { ...state };
  }
};
