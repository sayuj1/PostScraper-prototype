import React, { Fragment } from "react";
import { Col, Row, Button, Avatar, Typography, Tag } from "antd";
import { Link } from "react-router-dom";
import Topics from "../followings/Topics";
import FollowingTopics from "../followings/FollowingTopics";
const Following = () => {
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
          <Row>
            {/* first div column containing all tags */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              {/* all tags available in the database */}
              <div className="tagsAvailable" style={{ padding: "20px" }}>
                <Topics />
              </div>
            </Col>

            {/* second div containing selected tags by user */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className="selectedTagsBox" style={{ padding: "20px" }}>
                <FollowingTopics />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Fragment>
  );
};

export default Following;
