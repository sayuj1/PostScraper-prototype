import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Topics from "../followings/Topics";
import FollowingTopics from "../followings/FollowingTopics";
import { Col, Row, Button, Typography, Alert, notification } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import FollowingContext from "../../context/followingContext/followingContext";
const { Title } = Typography;
const Following = () => {
  const { selectedTagsSaveWarning, removeSelectedTagsSaveWarning } = useContext(
    FollowingContext
  );
  const openNotificationWithIcon = type => {
    notification[type]({
      message: "Changes Saved Successfully!",
      duration: 5
    });
  };

  const handleCloseWarning = () => {
    removeSelectedTagsSaveWarning();
  };

  const handleSaveButton = () => {
    handleCloseWarning();
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
        {/* post box containing both image and information about image */}
        <div className="tagBox" style={{ backgroundColor: "white" }}>
          {/* back button for going back to home page */}
          <div className="backButton" style={{ padding: "20px" }}>
            <Link to="/">
              <Button
                //   onClick={handleBackButton}
                shape="round"
                icon={<ArrowLeftOutlined />}
                size="large"
              >
                Home
              </Button>
            </Link>
          </div>
          <Row>
            {/* first div column containing all tags */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div
                className="tagsAvailableHeader"
                style={{ padding: "20px", textTransform: "capitalize" }}
              >
                <Title level={2}>Select your favorite topics </Title>
              </div>
              {/* all tags available in the database */}
              <div className="tagsAvailableBox" style={{ padding: "20px" }}>
                <div className="tagsAvailable">
                  <Topics />
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
              <div
                className="selectedAvailableHeader"
                style={{ padding: "20px", textTransform: "capitalize" }}
              >
                <Title level={2}>Your favorite topics </Title>
              </div>
              <div className="selectedTagsBox" style={{ padding: "20px" }}>
                <div className="selectedTags">
                  <FollowingTopics />
                </div>
                <div
                  className="saveSelectedTagButton"
                  style={{ margin: "20px 0px 20px" }}
                >
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

export default Following;
