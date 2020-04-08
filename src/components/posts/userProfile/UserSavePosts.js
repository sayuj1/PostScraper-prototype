import React, { Fragment, useContext, useEffect } from "react";
import PostContext from "../../../context/postContext/postContext";
import UserContext from "../../../context/userContext/userContext";
import { Row } from "antd";
import UserPost from "./UserPost";

const UserSavePosts = () => {
  const { user } = useContext(UserContext);
  const { userSavedPosts, getUserSavedPosts } = useContext(PostContext);
  useEffect(() => {
    // loading user posts after page load
    getUserSavedPosts(user._id);
  }, []);
  return (
    <Fragment>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 48 },
          { xs: 8, sm: 16, md: 24, lg: 48 },
        ]}
      >
        {userSavedPosts.length !== 0 ? (
          userSavedPosts.map((userSavedPost) => (
            <UserPost key={userSavedPost._id} post={userSavedPost} />
          ))
        ) : (
          <h2 style={{ padding: "30px" }}>No Saved Posts Found!</h2>
        )}
      </Row>
    </Fragment>
  );
};

export default UserSavePosts;
