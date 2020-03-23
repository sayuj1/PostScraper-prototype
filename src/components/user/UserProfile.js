import React, { useEffect, useContext, Fragment } from "react";
import UserContext from "../../context/userContext/userContext";
import { Row, Col, Button, Typography, Avatar, Tag } from "antd";
import CreatePostBtn from "../buttons/user/UserProfile/CreatePostBtn";
import EditProfileBtn from "../buttons/user/UserProfile/EditProfileBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Styles from "../../styles/Global/GlobalResponsiveQueries.module.css";
const { Title } = Typography;

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <Fragment>
      <Row style={{ backgroundColor: "white", paddingTop: "20px" }}>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 5, offset: 2 }}
          lg={{ span: 4 }}
        >
          <CreatePostBtn />
        </Col>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 5 }}
          lg={{ span: 4 }}
        >
          <EditProfileBtn />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "white" }}>
        {/* user basic information */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 10 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
        >
          <div
            className="userProfileContainer"
            style={{
              textTransform: "capitalize",
              padding: "10px 10px 10px 14px"
            }}
          >
            <div className="profileName">
              <Title level={2} style={{ fontWeight: "700" }}>
                {user.firstname} {user.lastname}
                {/* showing avatar on small extra small screens */}
                <span className={Styles.hideOnSmAndAbove}>
                  {user.avatar ? (
                    <Avatar
                      size={64}
                      src={user.avatar}
                      shape="circle"
                      style={{ border: "1px solid grey", marginLeft: "20px" }}
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
            <div
              className="profileTags"
              style={{ fontSize: "18px", fontWeight: "700" }}
            >
              <span>Following: </span>
              {user.topicsFollow.length !== 0
                ? user.topicsFollow.map(topic => (
                    <Tag color="#2db7f5">{topic}</Tag>
                  ))
                : "You are not following any topic."}
            </div>
          </div>
        </Col>
        {/* for user avatar */}
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
                style={{ border: "1px solid grey" }}
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
    </Fragment>
  );
};

export default UserProfile;
