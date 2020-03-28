import React, { useEffect, useContext, Fragment } from "react";
import UserContext from "../../../context/userContext/userContext";
import PostContext from "../../../context/postContext/postContext";
import UserPost from "../userProfile/UserPost";
import { Row } from "antd";
const UserPosts = () => {
  const { user } = useContext(UserContext);
  const { userPosts, getUserPosts } = useContext(PostContext);
  useEffect(() => {
    // loading user posts after page load
    getUserPosts(user._id);
  }, []);
  return (
    <Fragment>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 48 },
          { xs: 8, sm: 16, md: 24, lg: 48 }
        ]}
      >
        {userPosts.length !== 0 ? (
          userPosts.map(userPost => (
            <UserPost key={userPost._id} post={userPost} />
          ))
        ) : (
          <h2 style={{ padding: "30px" }}>You have not posted yet!</h2>
        )}
      </Row>
    </Fragment>
  );
};

export default UserPosts;
