import React from "react";
import { GETUSER } from "./userTypes";

export const userReducer = (state, action) => {
  switch (action.type) {
    case GETUSER:
      return { ...state };
    default:
      return { ...state };
  }
};
