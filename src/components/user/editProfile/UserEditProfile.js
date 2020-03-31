import React, { Fragment } from "react";

import UploadAvatar from "../../uploadImage/userAvatarUpload/UploadAvatar";
import UserEditProfileForm from "./UserEditProfileForm";
import { Typography, Row, Col } from "antd";
const { Title } = Typography;

const UserEditProfile = () => {
  return (
    <Fragment>
      <Row style={{ backgroundColor: "white" }}>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 22, offset: 1 }}
          lg={{ span: 22, offset: 1 }}
        >
          <Row style={{ marginTop: "20px" }}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 22, offset: 2 }}
              lg={{ span: 22, offset: 2 }}
            >
              <Title>Edit-Profile</Title>
            </Col>
          </Row>
          <Row>
            {/* for upload avatar */}
            <UploadAvatar />
          </Row>

          {/* edit-user profile form */}
          <UserEditProfileForm />
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserEditProfile;
