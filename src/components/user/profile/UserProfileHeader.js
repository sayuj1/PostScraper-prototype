import React, { Fragment } from "react";
import { Row, Col } from "antd";
// Buttons
import CreatePostBtn from "../../buttons/user/UserProfile/CreatePostBtn";
import EditProfileBtn from "../../buttons/user/UserProfile/EditProfileBtn";
import GoHomeBtn from "../../buttons/global/GoHomeBtn";
const UserProfileHeader = () => {
  return (
    <Fragment>
      {/* buttons */}
      <Row style={{ backgroundColor: "white", paddingTop: "20px" }}>
        {/* go back btn */}
        <Col xs={{ span: 20, offset: 1 }}>
          <GoHomeBtn margin="0px 0px 20px 0px" shape="round" />
        </Col>
        {/* create post btn */}
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 5, offset: 2 }}
          lg={{ span: 4 }}
        >
          <CreatePostBtn />
        </Col>
        {/* edit profile btn */}
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 5 }}
          lg={{ span: 4 }}
        >
          <EditProfileBtn />
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserProfileHeader;
