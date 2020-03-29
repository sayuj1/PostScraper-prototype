import React, { useReducer } from "react";
import UserContext from "./userContext";
import { userReducer } from "./userReducer";
import {
  Get_User,
  Save_Topics,
  Editable_User,
  Clear_Editable_User
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
    }, // by default it will be null
    editableUser: null
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

  // setting editable user
  const editableUser = editUser => {
    dispatch(Editable_User(editUser));
  };

  // clearing editable user
  const clearEditableUser = () => {
    dispatch(Clear_Editable_User());
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser: getUser,
        saveTopics: saveTopics,
        editableUser: editableUser,
        clearEditableUser: clearEditableUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
