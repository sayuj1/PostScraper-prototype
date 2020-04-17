import React, { useReducer } from "react";
import UserContext from "./userContext";
import { userReducer } from "./userReducer";
import {
  Get_User_Theme,
  Get_User,
  Save_Topics,
  Save_Avatar,
  Remove_Avatar,
  Update_User,
} from "./userActions";

const UserState = (props) => {
  const initialState = {
    loading: false,
    userTheme: false, // false --> light, true --> dark
    user: {
      _id: 1,
      firstname: "sayuj",
      lastname: "sehgal",
      username: "sayuj1",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", // default --> null
      topicsFollow: ["JAVASCRIPT", "HTML"], // default --> null
      userDescription:
        "Lorem ipsum tempore Quod molestiae odio, eveniet reiciendis assumenda quaerat vitae eaque, perferendis nulla",
      gender: null,
      location: null,
    }, // by default it will be null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // setting user theme
  const getUserTheme = (theme) => {
    dispatch(Get_User_Theme(theme));
  };

  // for loading the user detail from the backend
  const getUser = () => {
    dispatch(Get_User());
  };

  // saving user following topics
  const saveTopics = (topics) => {
    dispatch(Save_Topics(topics));
  };

  // saving avatar in user state
  const saveAvatar = (userAvatar) => {
    dispatch(Save_Avatar(userAvatar));
  };

  // removing user avatar
  const removeAvatar = () => {
    dispatch(Remove_Avatar());
  };

  // updating user avatar
  const updateUser = (user) => {
    try {
      dispatch(Update_User(user));
      return "User Profile Updated Successfully!";
    } catch (err) {
      return "Something Went Wrong, Please Try Again!";
    }
  };
  return (
    <UserContext.Provider
      value={{
        userTheme: state.userTheme,
        user: state.user,
        getUser: getUser,
        saveTopics: saveTopics,
        saveAvatar: saveAvatar,
        removeAvatar: removeAvatar,
        updateUser: updateUser,
        getUserTheme: getUserTheme,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
