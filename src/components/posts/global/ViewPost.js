import React, { Fragment, useState, lazy, Suspense, useContext } from "react";
import { Col, Row, Button, Avatar, Typography, Tag } from "antd";
import { DownloadOutlined, UserOutlined } from "@ant-design/icons";
import Styles from "../../../styles/posts/ViewPost.module.css";
import GoHomeBtn from "../../buttons/global/GoHomeBtn";
import moment from "moment";
import UserContext from "../../../context/userContext/userContext";
import PostImage from "./PostImage";
import { useParams } from "react-router-dom";
import GoUserProfileBtn from "../../buttons/global/GoUserProfileBtn";
import Styles1 from "../../../styles/Global/GlobalResponsiveQueries.module.css";
const { Paragraph } = Typography;
const CommentBox = lazy(() => import("../../comments/CommentBox"));
const ViewComments = lazy(() => import("../../comments/ViewComments"));

const ViewPost = props => {
  const { userName } = useParams();

  const { user } = useContext(UserContext);
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

  //  back button for going back to home page / user profile
  const goBackButton =
    userName && postAuthor.toLowerCase() === userName.toLowerCase() ? (
      <div style={{ marginLeft: "20px" }}>
        <GoUserProfileBtn
          btnText="Back"
          btnIcon="faArrowLeft"
          btnIconAlign="left"
          btnPadding="0px"
        />
      </div>
    ) : (
      <GoHomeBtn margin="20px" shape="round" />
    );

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
            <div className={Styles1.hideOnMdAndAbove}>
              <Row>
                <Col>
                  {/* back button for going back to home page / user profile */}
                  {goBackButton}
                </Col>
              </Row>
            </div>
            {/* first div column containing image */}
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className={Styles.postImg}>
                <PostImage postImg={postImg} height="auto" />
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
                <div className={Styles1.hideOnSmAndBelow}>
                  {/* back button for going back to home page / user profile */}
                  {goBackButton}
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
                  {postAuthor.toLowerCase() !== user.username.toLowerCase() ? (
                    <Button
                      type="primary"
                      shape="round"
                      size="large"
                      style={{ float: "right" }}
                    >
                      Save
                    </Button>
                  ) : null}
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
                {tags.length !== 0 ? (
                  <div className={Styles.postTags}>
                    {tags.map((tag, index) => (
                      <Tag
                        color="#2db7f5"
                        key={moment().format("ll") + _id + index}
                      >
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
                <Suspense
                  fallback={
                    <div style={{ fontSize: "30px" }}>
                      Loading comment box....
                    </div>
                  }
                >
                  <CommentBox />
                </Suspense>
              </div>
              {/* Comment-list Component goes here */}
              <div className={Styles.postCommentsBox}>
                <Suspense
                  fallback={
                    <div style={{ fontSize: "30px" }}>Fetching comments...</div>
                  }
                >
                  <ViewComments />
                </Suspense>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Fragment>
  );
};

export default ViewPost;
