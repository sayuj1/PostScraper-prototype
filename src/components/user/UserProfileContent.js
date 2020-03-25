import React, { Fragment, useContext } from "react";
import UserContext from "../../context/userContext/userContext";
import { Row, Col } from "antd";
import UserName from "./UserName";
import UserFollowingTopics from "./UserFollowingTopics";
import UserLargeAvatar from "./UserLargeAvatar";
const UserProfileContent = () => {
  const { user } = useContext(UserContext);
  return (
    <Fragment>
      <Row style={{ backgroundColor: "white" }}>
        {/* user basic information */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 10 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
        >
          {/* user details */}
          <div
            style={{
              textTransform: "capitalize",
              padding: "10px 10px 10px 14px"
            }}
          >
            <UserName
              firstname={user.firstname}
              lastname={user.lastname}
              avatar={user.avatar}
            />

            {/* following topics */}
            <UserFollowingTopics topicsFollow={user.topicsFollow} />
          </div>
        </Col>
        {/* showing avatar on small and above devices*/}
        <UserLargeAvatar avatar={user.avatar} />
      </Row>
    </Fragment>
  );
};

export default UserProfileContent;
