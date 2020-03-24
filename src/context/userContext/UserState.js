import React, { useReducer } from "react";
import UserContext from "./userContext";
import { userReducer } from "./userReducer";
import { Get_User, Save_Topics } from "./userActions";

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
      topicsFollow: ["JAVASCRIPT", "HTML"] // default --> null
    } // by default it will be null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // for loading the user detail from the backend
  const getUser = () => {
    dispatch(Get_User());
  };

  const saveTopics = topics => {
    dispatch(Save_Topics(topics));
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser: getUser,
        saveTopics: saveTopics
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
