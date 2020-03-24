import React, { useReducer, useContext } from "react";
import FollowingContext from "./followingContext";
import {
  Get_All_Tags,
  Get_Selected_Tags,
  Set_Selected_Tag,
  Remove_Selected_Tag,
  Set_Selected_Tags_Save_Warning,
  Remove_Selected_Tags_Save_Warning
} from "./followingActions";
import followingReducer from "./followingReducer";
import UserContext from "../userContext/userContext";

const FollowingState = props => {
  const { user } = useContext(UserContext);
  const userTopics = [...user.topicsFollow];

  const initialState = {
    selectedTagsSaveWarning: false,
    selectedTags: userTopics,
    tags: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "WEBDEVELOPMENT",
      "REACTJS",
      "BOOTSTRAP",
      "PHP",
      "RUBY"
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

  const setSelectedTagsSaveWarning = () => {
    dispatch(Set_Selected_Tags_Save_Warning());
  };
  const removeSelectedTagsSaveWarning = () => {
    dispatch(Remove_Selected_Tags_Save_Warning());
  };

  return (
    <FollowingContext.Provider
      value={{
        selectedTags: state.selectedTags,
        tags: state.tags,
        selectedTagsSaveWarning: state.selectedTagsSaveWarning,
        getAllTags: getAllTags,
        getSelectedTags: getSelectedTags,
        setSelectedTag: setSelectedTag,
        removeSelectedTag: removeSelectedTag,
        setSelectedTagsSaveWarning: setSelectedTagsSaveWarning,
        removeSelectedTagsSaveWarning: removeSelectedTagsSaveWarning
      }}
    >
      {props.children}
    </FollowingContext.Provider>
  );
};

export default FollowingState;
