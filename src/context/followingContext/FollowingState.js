import React, { useReducer } from "react";
import FollowingContext from "./followingContext";
import {
  Get_All_Tags,
  Get_Selected_Tags,
  Set_Selected_Tag,
  Remove_Selected_Tag
} from "./followingActions";
import followingReducer from "./followingReducer";

const FollowingState = props => {
  const initialState = {
    selectedTags: ["HTML", "CSS"],
    tags: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "WEBDEVELOPMENT",
      "REACTJS",
      "BOOTSTRAP"
    ]
  };

  const [state, dispatch] = useReducer(followingReducer, initialState);

  const getAllTags = () => {
    dispatch(Get_All_Tags());
  };

  const getSelectedTags = () => {
    dispatch(Get_Selected_Tags());
  };

  const setSelectedTag = tag => {
    dispatch(Set_Selected_Tag(tag));
  };

  const removeSelectedTag = tag => {
    dispatch(Remove_Selected_Tag(tag));
  };

  return (
    <FollowingContext.Provider
      value={{
        selectedTags: state.selectedTags,
        tags: state.tags,
        getAllTags: getAllTags,
        getSelectedTags: getSelectedTags,
        setSelectedTag: setSelectedTag,
        removeSelectedTag: removeSelectedTag
      }}
    >
      {props.children}
    </FollowingContext.Provider>
  );
};

export default FollowingState;
