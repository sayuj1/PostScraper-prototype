import React, { Fragment } from "react";
import UserPosts from "../posts/UserPosts";
import UserSavePosts from "../posts/UserSavePosts";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const PostsTabs = () => {
  return (
    <Fragment>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab="Posts"
          key="1"
          style={{
            backgroundColor: "whitesmoke",
            padding: "10px"
          }}
        >
          <UserPosts />
        </TabPane>

        <TabPane tab="Saved Posts" key="2">
          <UserSavePosts />
        </TabPane>
      </Tabs>
    </Fragment>
  );
};

export default PostsTabs;
