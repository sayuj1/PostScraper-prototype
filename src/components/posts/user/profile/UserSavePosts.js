import React, { Fragment, useContext, useEffect } from "react";
import PostContext from "../../../../context/postContext/postContext";
import UserContext from "../../../../context/userContext/userContext";
import { Row, Empty } from "antd";
import UserPost from "./UserPost";
import UserSavePostsStyles from "../../../../styles/posts/userProfile/UserSavePosts.module.css";
const UserSavePosts = () => {
  const { user } = useContext(UserContext);
  const {
    userSavedPosts,
    getUserSavedPosts,
    searchUserSavedPosts,
  } = useContext(PostContext);
  useEffect(() => {
    // loading user posts after page load
    getUserSavedPosts(user._id);
  }, []);

  const emptyMessage = (message) => (
    <div className={UserSavePostsStyles.emptyMessageContainer}>
      <Empty
        description={
          <span className={UserSavePostsStyles.emptyMessageDescription}>
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
        {searchUserSavedPosts !== null
          ? searchUserSavedPosts.length !== 0
            ? searchUserSavedPosts.map((searchUserSavedPosts) => (
                <UserPost
                  key={searchUserSavedPosts._id}
                  post={searchUserSavedPosts}
                />
              ))
            : emptyMessage("No Posts Found!")
          : userSavedPosts.length !== 0
          ? userSavedPosts.map((userSavedPost) => (
              <UserPost key={userSavedPost._id} post={userSavedPost} />
            ))
          : emptyMessage("You have Not Saved Any Posts!")}
      </Row>
    </Fragment>
  );
};

export default UserSavePosts;
