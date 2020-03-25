import React, { Fragment, lazy, Suspense } from "react";
// import UserPosts from "../posts/UserPosts";
// import UserSavePosts from "../posts/UserSavePosts";
import { Row, Col, Tabs } from "antd";
const { TabPane } = Tabs;
const UserPosts = lazy(() => import("../posts/UserPosts"));
const UserSavePosts = lazy(() => import("../posts/UserSavePosts"));
const PostsTabs = () => {
  return (
    <Fragment>
      <Row style={{ backgroundColor: "white" }}>
        {/* tabs */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 20, offset: 2 }}
        >
          <div className="postsTabs" style={{ margin: "20px" }}>
            <Tabs defaultActiveKey="userPosts">
              <TabPane
                tab="Posts"
                key="userPosts"
                style={{
                  backgroundColor: "whitesmoke",
                  padding: "10px"
                }}
              >
                <Suspense
                  fallback={
                    <div style={{ fontSize: "50px" }}>
                      Loading User Posts....
                    </div>
                  }
                >
                  <UserPosts />
                </Suspense>
              </TabPane>

              <TabPane tab="Saved Posts" key="userSavedPosts">
                <Suspense
                  fallback={
                    <div style={{ fontSize: "50px" }}>
                      Loading User Saved Posts....
                    </div>
                  }
                >
                  <UserSavePosts />
                </Suspense>
              </TabPane>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PostsTabs;
