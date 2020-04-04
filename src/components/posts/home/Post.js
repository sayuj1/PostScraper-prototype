import React, { Fragment, useState } from "react";
// import "antd/dist/antd";
import { Card, Col, Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import PostImage from "../global/PostImage";

const { Meta } = Card;

// this component will display each post which is coming from "Posts" component
const Post = props => {
  // post information

  const { _id, postImg, postTitle, tags, avatar, postAuthor } = props.post;

  //for navigation
  const history = useHistory();

  // handle which post is clicked and get the information
  const handlePostClick = () => {
    // console.log(_id);
    //loading view post component
    history.push(`/post/${_id}`);
  };

  return (
    <Fragment>
      {/* defining how much space should each post take */}
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 6 }}
        lg={{ span: 6 }}
      >
        {/* post information is shown */}
        <Card
          onClick={handlePostClick}
          bordered={false}
          title={postTitle}
          extra={
            avatar ? (
              <Tooltip title={postAuthor}>
                <Avatar src={avatar} size="small" alt="avatar not supported" />
              </Tooltip>
            ) : (
              <Tooltip title={postAuthor}>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                  size="small"
                  alt="avatar not supported"
                />
              </Tooltip>
            )
          }
          hoverable
          style={{ width: "100%", borderRadius: "10px" }}
          cover={<PostImage postImg={postImg} height="300px" />}
        >
          <Meta
            style={{ fontWeight: "bolder" }}
            description={tags.length !== 0 ? "Related To: " + tags : null}
          />
        </Card>
      </Col>
    </Fragment>
  );
};

export default Post;
