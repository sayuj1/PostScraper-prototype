import React, { useEffect, useContext, Fragment } from "react";
import UserContext from "../../context/userContext/userContext";
import { Row, Col, Button, Typography, Avatar, Tag } from "antd";
// Buttons
import CreatePostBtn from "../buttons/user/UserProfile/CreatePostBtn";
import EditProfileBtn from "../buttons/user/UserProfile/EditProfileBtn";
import GoHomeBtn from "../buttons/global/GoHomeBtn";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// styles
import Styles from "../../styles/Global/GlobalResponsiveQueries.module.css";
import UserProfileStyles from "../../styles/user/UserProfile.module.css";
const { Title } = Typography;

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <Fragment>
      {/* buttons */}
      <Row style={{ backgroundColor: "white", paddingTop: "20px" }}>
        {/* go back btn */}
        <Col xs={{ span: 20, offset: 1 }}>
          <GoHomeBtn margin="0px 0px 20px 0px" shape="circle" border="0px" />
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
      {/* user basic info & avatar */}
      <Row style={{ backgroundColor: "white" }}>
        {/* user basic information */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 10 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
        >
          <div className={UserProfileStyles.userProfileContainer}>
            <div className="profileName">
              <Title level={2} style={{ fontWeight: "700" }}>
                {user.firstname} {user.lastname}
                {/* showing avatar on small extra small screens */}
                <span className={Styles.hideOnSmAndAbove}>
                  {user.avatar ? (
                    <Avatar
                      size={50}
                      src={user.avatar}
                      shape="circle"
                      className={UserProfileStyles.smallUserAvatar}
                    />
                  ) : (
                    <Avatar
                      size={64}
                      icon={<FontAwesomeIcon icon={faUser} size="lg" />}
                    />
                  )}
                </span>
              </Title>
            </div>
            <div className={UserProfileStyles.profileTags}>
              <span>Following: </span>
              {user.topicsFollow.length !== 0 ? (
                user.topicsFollow.map(topic => (
                  <Tag color="#2db7f5">{topic}</Tag>
                ))
              ) : (
                <span>0</span>
              )}
            </div>
          </div>
        </Col>
        {/* showing avatar on small and above devices*/}
        <span className={Styles.hideOnXs}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 10, offset: 2 }}
            md={{ span: 10, offset: 2 }}
            lg={{ span: 10, offset: 2 }}
          >
            {user.avatar ? (
              <Avatar
                size={106}
                src={user.avatar}
                shape="circle"
                className={UserProfileStyles.largeUserAvatar}
              />
            ) : (
              <Avatar
                size={106}
                icon={<FontAwesomeIcon icon={faUser} size="lg" />}
              />
            )}
          </Col>
        </span>
      </Row>
      {/* user posts */}
      <Row></Row>
    </Fragment>
  );
};

export default UserProfile;
