import React, { Fragment, lazy, Suspense } from "react";
import { Row, Col } from "antd";
const UserPosts = lazy(() => import("./UserPosts"));
const UserSavePosts = lazy(() => import("./UserSavePosts"));
const SelectedPostsTab = (props) => {
  const { currentSelected } = props;
  return (
    <Fragment>
      <Row
        className="background"
        style={{
          padding: "10px",
        }}
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
        >
          {currentSelected === "user-posts" ? (
            <Suspense
              fallback={
                <div style={{ fontSize: "50px" }}>Loading User Posts....</div>
              }
            >
              <UserPosts />
            </Suspense>
          ) : (
            <Suspense
              fallback={
                <div style={{ fontSize: "50px" }}>
                  Loading User Saved Posts....
                </div>
              }
            >
              <UserSavePosts />
            </Suspense>
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default SelectedPostsTab;
