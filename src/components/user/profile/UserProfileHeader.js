import React, { Fragment } from 'react';
import { Row, Col, Typography } from 'antd';
// Buttons
import CreatePostBtn from '../../buttons/user/profile/UserProfileHeader/CreatePostBtn';
import EditProfileBtn from '../../buttons/user/profile/UserProfileHeader/EditProfileBtn';
import GoHomeBtn from '../../buttons/global/GoHomeBtn';
import UserTheme from './UserTheme';
const { Title } = Typography;
const UserProfileHeader = () => {
  return (
    <Fragment>
      {/* buttons */}
      <Row className='backgroundContent' style={{ paddingTop: '20px' }}>
        {/* go back btn */}

        <Col xs={{ span: 20, offset: 1 }}>
          <GoHomeBtn margin='0px 0px 20px 0px' shape='round' />
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 22, offset: 2 }}
          lg={{ span: 22 }}
        >
          <Title level={4} style={{ marginRight: '18px', textAlign: 'right' }}>
            Select Theme: <UserTheme />
          </Title>
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
