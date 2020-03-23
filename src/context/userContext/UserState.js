import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import { Get_User } from "./userActions";

const UserState = props => {
  const initialState = {
    loading: false,
    user: {
      _id: 1,
      firstname: "sayuj",
      lastname: "sehgal",
      username: "sayuj1",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    } // by default it will be null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUser = () => {
    dispatch(Get_User());
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser: getUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
