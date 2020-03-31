import React, { Fragment, useEffect, useContext } from "react";
import UserContext from "../../../context/userContext/userContext";
import UploadAvatar from "../../uploadImage/userAvatarUpload/UploadAvatar";

import { Typography, Row, Col } from "antd";
const { Title } = Typography;

const UserEditProfile = () => {
  return (
    <Fragment>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 22, offset: 1 }}
          lg={{ span: 22, offset: 1 }}
        >
          <Row>
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
            <UploadAvatar />
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserEditProfile;
