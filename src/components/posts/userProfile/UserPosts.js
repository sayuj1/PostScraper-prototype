import React, { useEffect, useContext, Fragment } from "react";
import UserContext from "../../../context/userContext/userContext";
import PostContext from "../../../context/postContext/postContext";
import UserPost from "../userProfile/UserPost";
import { Row, Empty } from "antd";
import UserPostsStyles from "../../../styles/posts/userProfile/UserPosts.module.css";

const UserPosts = () => {
  const { user } = useContext(UserContext);
  const { userPosts, getUserPosts, searchUserPosts } = useContext(PostContext);
  useEffect(() => {
    // loading user posts after page load
    getUserPosts(user._id);
  }, []);

  const emptyMessage = (message) => (
    <div className={UserPostsStyles.emptyMessageContainer}>
      <Empty
        description={
          <span className={UserPostsStyles.emptyMessageDescription}>
            {message}
          </span>
        }
      />
    </div>
  );

  return (
    <Fragment>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 48 },
          { xs: 8, sm: 16, md: 24, lg: 48 },
        ]}
      >
        {searchUserPosts !== null
          ? searchUserPosts.length !== 0
            ? searchUserPosts.map((searchUserPosts) => (
                <UserPost key={searchUserPosts._id} post={searchUserPosts} />
              ))
            : emptyMessage("No Posts Found!")
          : userPosts.length !== 0
          ? userPosts.map((userPost) => (
              <UserPost key={userPost._id} post={userPost} />
            ))
          : emptyMessage("You have not posted yet!")}
      </Row>
    </Fragment>
  );
};

export default UserPosts;
