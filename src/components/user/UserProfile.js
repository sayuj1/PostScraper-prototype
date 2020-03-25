import React, { useContext, Fragment } from "react";
import UserContext from "../../context/userContext/userContext";
//components
import PostsTabs from "../posts/PostsTabs";
import { Row, Col, Avatar } from "antd";
// Buttons
import CreatePostBtn from "../buttons/user/UserProfile/CreatePostBtn";
import EditProfileBtn from "../buttons/user/UserProfile/EditProfileBtn";
import GoHomeBtn from "../buttons/global/GoHomeBtn";

// styles
import Styles from "../../styles/Global/GlobalResponsiveQueries.module.css";
import UserProfileStyles from "../../styles/user/UserProfile.module.css";
import UserName from "./UserName";
import UserFollowingTopics from "./UserFollowingTopics";
import UserLargeAvatar from "./UserLargeAvatar";

const UserProfile = () => {
  const { user } = useContext(UserContext);

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
      {/* user basic info & avatar */}
      <Row style={{ backgroundColor: "white" }}>
        {/* user basic information */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 10 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
        >
          {/* user details */}
          <div className={UserProfileStyles.userProfileContainer}>
            <div className="profileName">
              <UserName
                firstname={user.firstname}
                lastname={user.lastname}
                avatar={user.avatar}
              />
            </div>
            {/* following topics */}
            <div className={UserProfileStyles.profileTags}>
              <UserFollowingTopics topicsFollow={user.topicsFollow} />
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
            <UserLargeAvatar avatar={user.avatar} />
          </Col>
        </span>
      </Row>
      {/* user posts */}
      <Row style={{ backgroundColor: "white" }}>
        {/* tabs */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 20, offset: 2 }}
        >
          <div className="postsTabs" style={{ margin: "20px" }}>
            <PostsTabs />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserProfile;
