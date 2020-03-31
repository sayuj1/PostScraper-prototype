import React, { useReducer } from "react";
import UserContext from "./userContext";
import { userReducer } from "./userReducer";
import {
  Get_User,
  Save_Topics,
  Save_Avatar,
  Remove_Avatar,
  Update_User
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
      userDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis quam corporis soluta facere saepe quia amet explicabo deserunt modi eum voluptates doloremque non velit, asperiores, cumque sit expedita error a libero! Itaque consequuntur ratione laboriosam impedit sed adipisci quae vel possimus nam sapiente! Quia cupiditate assumenda fugit doloribus neque deserunt necessitatibus et beatae. Eius deleniti expedita blanditiis sed eos eveniet dicta autem cumque neque illo. Ea maiores explicabo modi repellat temporibus nam suscipit dolorem assumenda voluptatibus qui corporis, mollitia dolore et alias inventore quibusdam saepe odio a doloremque! Deleniti, sed eligendi voluptates rem vero sapiente architecto voluptatum, accusamus error nisi magni quis. Rem illo molestiae perferendis possimus eaque libero pariatur ut qui ex vero, non, sunt quibusdam, laborum accusamus accusantium. Fugit quisquam eveniet, reprehenderit et suscipit exercitationem repellendus. Unde maiores quibusdam, obcaecati mollitia voluptatibus recusandae, saepe at eaque rerum tempore velit aliquam consequatur adipisci ex accusamus? Adipisci minima eum qui dolorem iusto aut eligendi perspiciatis excepturi doloremque. Porro architecto, ducimus nesciunt cumque exercitationem quas doloribus magni, quam modi enim dolorum! Laborum ex aliquam quo illum quod, omnis minima nesciunt vitae numquam totam magnam! Eum optio sapiente, asperiores odio officia consectetur ratione a voluptatibus fugit explicabo enim, praesentium ipsum obcaecati.",
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

  // removing user avatar
  const removeAvatar = () => {
    dispatch(Remove_Avatar());
  };

  // updating user avatar
  const updateUser = user => {
    try {
      dispatch(Update_User(user));
      return "User Info Updated Successfully!";
    } catch (err) {
      return "Something Went Wrong, Please Try Again!";
    }
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser: getUser,
        saveTopics: saveTopics,
        saveAvatar: saveAvatar,
        removeAvatar: removeAvatar,
        updateUser: updateUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
