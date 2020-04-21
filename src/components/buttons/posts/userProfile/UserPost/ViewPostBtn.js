import React, { Fragment, useContext } from "react";
import UserContext from "../../../../../context/userContext/userContext";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
const ViewPostBtn = (props) => {
  // user info
  const { user } = useContext(UserContext);
  const { _id, postAuthor } = props;
  //for navigation
  const history = useHistory();
  // handle which post is clicked and get the information
  const handlePostClick = () => {
    if (postAuthor.toLowerCase() === user.username.toLowerCase()) {
      //* if user is the owner of the posts
      //loading view post component
      history.push(`/${user.username}/post/${_id}`); // /user/post/:id
    } else {
      //* if user is not the owner of the posts
      history.push(`/post/${_id}`);
    }
  };
  return (
    <Fragment>
      <Button type="primary" shape="round" onClick={handlePostClick}>
        View
      </Button>
    </Fragment>
  );
};

export default ViewPostBtn;
