import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/antd/dist/antd";
import { Col, Row, Button, Avatar, Typography, Tag } from "antd";
import {
  DownloadOutlined,
  UserOutlined,
  ArrowLeftOutlined
} from "@ant-design/icons";
import Styles from "../../styles/ViewRequestedPost.module.css";
const { Paragraph } = Typography;

const ViewRequestedPost = props => {
  const [toggleExpand, settoggleExpand] = useState({
    expand: false,
    counter: 0
  });

  const typoExpand = () => {
    settoggleExpand({
      expand: true,
      counter: !toggleExpand.expand
        ? toggleExpand.counter + 0
        : toggleExpand.counter + 1
    });
  };

  const typoClose = () => {
    settoggleExpand({
      expand: false,
      counter: !toggleExpand.expand
        ? toggleExpand.counter + 0
        : toggleExpand.counter + 1
    });
  };

  const {
    _id,
    postImg,
    postTitle,
    postDescription,
    tags,
    postAuthor,
    avatar
  } = props.post;

  return (
    <Fragment>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 20, offset: 2 }}
      >
        <div
          className="postBox"
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <Row>
            {/* first div column containing image */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className="postImg">
                <img src={postImg} width="100%" />
              </div>
            </Col>
            {/* second div containing information about image */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className="postContent">
                <div className="backButton" style={{ margin: "20px" }}>
                  <Link to="/">
                    <Button
                      shape="round"
                      icon={<ArrowLeftOutlined />}
                      size="large"
                    />
                  </Link>
                </div>
                <div
                  className="postHeader"
                  style={{
                    marginTop: "20px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginBottom: "20px"
                  }}
                >
                  <a href={postImg} download target="_blank">
                    <Button
                      type="primary"
                      shape="round"
                      icon={<DownloadOutlined />}
                      size="large"
                    >
                      Download
                    </Button>
                  </a>
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ float: "right" }}
                  >
                    Save
                  </Button>
                </div>
                <div
                  className="postTitle"
                  style={{
                    lineHeight: "normal",
                    fontSize: "2rem",
                    fontWeight: "bolder",
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginTop: "20px",
                    color: "#111111"
                  }}
                >
                  {postTitle}
                </div>
                <div
                  className={Styles.postDescription}
                  key={toggleExpand.counter}
                  style={{
                    maxHeight: "300px",
                    overflow: "auto",
                    marginTop: "10px",
                    textAlign: "justify"
                  }}
                >
                  <Paragraph
                    ellipsis={{
                      rows: 3,
                      expandable: true,
                      onExpand: typoExpand
                    }}
                    style={{ padding: "20px" }}
                  >
                    {postDescription}
                  </Paragraph>
                </div>
                {toggleExpand.expand && (
                  <div
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      paddingTop: "5px",
                      paddingBottom: "5px"
                    }}
                  >
                    <a onClick={typoClose} style={{ float: "right" }}>
                      Close
                    </a>
                  </div>
                )}
                <div className="postTags" style={{ margin: "20px" }}>
                  {tags.map(tag => (
                    <Tag color="#2db7f5">{tag}</Tag>
                  ))}
                </div>
                <div
                  className="postAuthor"
                  style={{
                    marginTop: "20px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginBottom: "20px"
                  }}
                >
                  {avatar ? (
                    <Avatar
                      size={50}
                      src={avatar}
                      icon={!avatar ? <UserOutlined /> : null}
                    />
                  ) : (
                    <Avatar
                      style={{ backgroundColor: "dodgerblue" }}
                      size={50}
                      src={avatar}
                      icon={!avatar ? <UserOutlined /> : null}
                    />
                  )}
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginLeft: "10px"
                    }}
                  >
                    {postAuthor}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Fragment>
  );
};

export default ViewRequestedPost;
