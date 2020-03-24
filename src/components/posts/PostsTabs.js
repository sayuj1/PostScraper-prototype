import React, { Fragment } from "react";
import UserPosts from "../posts/UserPosts";
import UserSavePosts from "../posts/UserSavePosts";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const PostsTabs = () => {
  return (
    <Fragment>
      <Tabs defaultActiveKey="userPosts">
        <TabPane
          tab="Posts"
          key="userPosts"
          style={{
            backgroundColor: "whitesmoke",
            padding: "10px"
          }}
        >
          <UserPosts />
        </TabPane>

        <TabPane tab="Saved Posts" key="userSavedPosts">
          <UserSavePosts />
        </TabPane>
      </Tabs>
    </Fragment>
  );
};

export default PostsTabs;
