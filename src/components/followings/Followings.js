import React, { Fragment, useContext, lazy, Suspense } from "react";
// import Topics from "./Topics";
// import FollowingTopics from "./FollowingTopics";
import { Col, Row, Button, Typography, Alert, notification } from "antd";
import GoHomeBtn from "../buttons/global/GoHomeBtn";
import FollowingContext from "../../context/followingContext/followingContext";
import UserContext from "../../context/userContext/userContext.js";
import Styles from "../../styles/following/Following.module.css";
import GoUserProfileBtn from "../buttons/global/GoUserProfileBtn";
const Topics = lazy(() => import("./Topics"));
const FollowingTopics = lazy(() => import("./FollowingTopics"));
const { Title } = Typography;

const Followings = () => {
  const {
    selectedTagsSaveWarning,
    removeSelectedTagsSaveWarning,
    selectedTags,
  } = useContext(FollowingContext);
  const { saveTopics } = useContext(UserContext);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Changes Saved Successfully!",
      duration: 1,
    });
  };

  const handleCloseWarning = () => {
    removeSelectedTagsSaveWarning();
  };

  const handleSaveButton = () => {
    handleCloseWarning();

    saveTopics(selectedTags);
    openNotificationWithIcon("success");
  };
  return (
    <Fragment>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 20, offset: 2 }}
      >
        {/* tag box containing both image and information about image */}
        <div className={`backgroundContent ${Styles.tagBox}`}>
          {/* back button for going back to home page */}
          <Row>
            <Col
              xs={{ span: 10 }}
              sm={{ span: 10 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <div className={Styles.goBackHomeBtn}>
                <GoHomeBtn margin="20px 0px 0px 0px" shape="round" />
              </div>
            </Col>
            <Col
              xs={{ span: 13, offset: 1 }}
              sm={{ span: 13 }}
              md={{ span: 17 }}
              lg={{ span: 17 }}
            >
              <div className={Styles.goBackProfileBtn}>
                <GoUserProfileBtn
                  btnText="View Profile"
                  btnIcon="faArrowRight"
                  btnIconAlign="right"
                  btnPadding="10px"
                />
              </div>
            </Col>
          </Row>

          <Row>
            {/* first div column containing all tags */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className={Styles.tagsAvailableHeader}>
                <Title level={2}>Select your favorite topics </Title>
              </div>
              {/* all tags available in the database */}
              <div className={Styles.tagsAvailableBox}>
                <div className={`tagsAvailable ${Styles.tagsAvailable}`}>
                  <Suspense
                    fallback={
                      <div style={{ fontSize: "50px" }}>
                        Loading Topics Component
                      </div>
                    }
                  >
                    <Topics />
                  </Suspense>
                </div>
              </div>
            </Col>

            {/* second div containing selected tags by user */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className={Styles.selectedAvailableHeader}>
                <Title level={2}>Your favorite topics </Title>
              </div>
              <div className={Styles.selectedTagsBox}>
                <div className={`selectedTags ${Styles.selectedTags}`}>
                  <Suspense
                    fallback={
                      <div style={{ fontSize: "50px" }}>
                        Loading FollowingTopics Component
                      </div>
                    }
                  >
                    <FollowingTopics />
                  </Suspense>
                </div>
                <div className={Styles.saveSelectedTagButton}>
                  {/* for warning display  */}
                  {selectedTagsSaveWarning ? (
                    <Alert
                      message="Warning"
                      description="Save your changes!"
                      type="warning"
                      showIcon
                      closable
                      afterClose={handleCloseWarning}
                      style={{ marginBottom: "20px" }}
                    />
                  ) : null}

                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    onClick={handleSaveButton}
                  >
                    Save Topics
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Fragment>
  );
};

export default Followings;
