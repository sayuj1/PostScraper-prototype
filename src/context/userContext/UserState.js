import React, { useReducer } from "react";
import UserContext from "./userContext";
import { userReducer } from "./userReducer";
import {
  Get_User,
  Save_Topics,
  Save_Avatar,
  Remove_Avatar
} from "./userActions";

const UserState = props => {
  const initialState = {
    loading: false,
    user: {
      _id: 1,
      firstname: "sayuj",
      lastname: "sehgal",
      username: "sayuj1",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", // default --> null
      topicsFollow: ["JAVASCRIPT", "HTML"], // default --> null
      userDescription: null,
      gender: null,
      location: null
    } // by default it will be null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // for loading the user detail from the backend
  const getUser = () => {
    dispatch(Get_User());
  };

  // saving user following topics
  const saveTopics = topics => {
    dispatch(Save_Topics(topics));
  };

  // saving avatar in user state
  const saveAvatar = userAvatar => {
    dispatch(Save_Avatar(userAvatar));
  };

  const removeAvatar = () => {
    dispatch(Remove_Avatar());
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser: getUser,
        saveTopics: saveTopics,
        saveAvatar: saveAvatar,
        removeAvatar: removeAvatar
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
