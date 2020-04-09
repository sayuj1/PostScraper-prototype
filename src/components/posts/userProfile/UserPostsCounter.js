import React, { Fragment, useContext } from "react";
import { Badge } from "antd";
import PostContext from "../../../context/postContext/postContext";

const UserPostsCounter = (props) => {
  const { currentSelected } = props;
  const {
    userPosts,
    searchUserPosts,
    userSavedPosts,
    searchUserSavedPosts,
  } = useContext(PostContext);
  return (
    <Fragment>
      <div
        style={{
          margin: "20px 20px 0px 20px",
          fontSize: "1.2rem",
          fontWeight: "600",
        }}
      >
        Total Posts Found:
        {currentSelected === "user-posts" ? (
          <Badge
            count={
              searchUserPosts !== null
                ? searchUserPosts.length
                : userPosts.length
            }
            showZero={true}
            style={{
              marginLeft: "10px",
              backgroundColor: "#faad14",
              fontSize: "1.2rem",
              fontWeight: "600",
              padding: "0px 10px",
            }}
          />
        ) : (
          <Badge
            count={
              searchUserSavedPosts !== null
                ? searchUserSavedPosts.length
                : userSavedPosts.length
            }
            showZero={true}
            style={{
              marginLeft: "10px",
              backgroundColor: "#faad14",
              fontSize: "1.2rem",
              fontWeight: "600",
              padding: "0px 10px",
            }}
          />
        )}
      </div>
    </Fragment>
  );
};

export default UserPostsCounter;
