import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/antd/dist/antd";
import { Col, Row, Button, Avatar, Typography, Tag } from "antd";
import {
  DownloadOutlined,
  UserOutlined,
  ArrowLeftOutlined
} from "@ant-design/icons";
import Styles from "../../styles/posts/ViewRequestedPost.module.css";
import PostContext from "../../context/postContext/postContext";
import CommentBox from "../comments/CommentBox";
import ViewComments from "../comments/ViewComments";
const { Paragraph } = Typography;

const ViewRequestedPost = props => {
  // for clearing view post information from the post state on clicking back button
  const { clearViewPost } = useContext(PostContext);

  //for toggling expand & close in post description
  const [toggleExpand, settoggleExpand] = useState({
    expand: false,
    counter: 0
  });

  // on expanding post description
  const handlingExpand = () => {
    settoggleExpand({
      expand: true,
      counter: !toggleExpand.expand
        ? toggleExpand.counter + 0
        : toggleExpand.counter + 1
    });
  };

  // on closing expanded post description
  const handlingClose = () => {
    settoggleExpand({
      expand: false,
      counter: !toggleExpand.expand
        ? toggleExpand.counter + 0
        : toggleExpand.counter + 1
    });
  };

  // post information destructuring
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
        {/* post box containing both image and information about image */}
        <div className={Styles.postBox}>
          <Row>
            {/* first div column containing image */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className="postImg">
                <img alt="No img found!" src={postImg} width="100%" />
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
                {/* back button for going back to home page */}

                <div className="backButton" style={{ margin: "20px" }}>
                  <Link to="/">
                    <Button
                      onClick={() => clearViewPost}
                      shape="round"
                      icon={<ArrowLeftOutlined />}
                      size="large"
                    />
                  </Link>
                </div>
                {/* header containing download button and save button */}
                <div className={Styles.postHeader}>
                  {/* // download button for downloading an image */}
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
                  {/* save button for saving into users collection */}
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ float: "right" }}
                  >
                    Save
                  </Button>
                </div>

                {/* // post title */}
                <div className={Styles.postTitle}>{postTitle}</div>
                {/* // post description */}
                <div
                  className={Styles.postDescription}
                  key={toggleExpand.counter}
                >
                  {/* for expanding & collapsing post description */}
                  <Paragraph
                    ellipsis={{
                      rows: 3,
                      expandable: true,
                      onExpand: handlingExpand
                    }}
                    style={{ padding: "20px" }}
                  >
                    {postDescription}
                  </Paragraph>
                </div>
                {toggleExpand.expand && (
                  <div className={Styles.closeButton}>
                    <a onClick={handlingClose} style={{ float: "right" }}>
                      Close
                    </a>
                  </div>
                )}
                {/* // checking first if no tags available */}
                {tags ? (
                  <div className={Styles.postTags}>
                    {tags.map((tag, index) => (
                      <Tag color="#2db7f5" key={Date.now() * _id + index}>
                        {tag}
                      </Tag>
                    ))}
                  </div>
                ) : null}
                {/* containing post author & post avatar */}
                <div className={Styles.postAuthor}>
                  {/* // checking whether user has a avatar or not */}
                  {avatar ? (
                    <Avatar size={50} src={avatar} />
                  ) : (
                    <Avatar
                      style={{ backgroundColor: "#87d068" }}
                      size={50}
                      icon={<UserOutlined />}
                    />
                  )}
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginLeft: "10px"
                    }}
                  >
                    {/* displaying post author */}
                    {postAuthor}
                  </span>
                </div>
              </div>
              {/* postContent end */}
              {/* comment box Component */}
              <div className={Styles.commentBox}>
                <CommentBox />
              </div>
              {/* Comment-list Component goes here */}
              <div className={Styles.postCommentsBox}>
                <ViewComments />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Fragment>
  );
};

export default ViewRequestedPost;
