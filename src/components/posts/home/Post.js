import React, { Fragment, useState, useContext } from "react";
// import "antd/dist/antd";
import { Card, Col, Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import PostImage from "../global/PostImage";

import UserContext from "../../../context/userContext/userContext";
import SavePostBtn from "../../buttons/posts/global/ViewPost/SavePostBtn";
import RemoveSavePostBtn from "../../buttons/posts/global/ViewPost/RemoveSavePostBtn";

const { Meta } = Card;

// this component will display each post which is coming from "Posts" component
const Post = (props) => {
  const { user } = useContext(UserContext);
  // post information
  const {
    _id,
    postImg,
    postTitle,
    tags,
    avatar,
    postAuthor,
    postSavedBy,
  } = props.post;

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
          hoverable
          bordered={true}
          actions={[
            postSavedBy.length !== 0 ? (
              postSavedBy.find((userSaved) =>
                userSaved.toLowerCase() === user.username.toLowerCase()
                  ? true // break here
                  : null
              ) ? (
                <RemoveSavePostBtn _id={_id} block="block" />
              ) : (
                <SavePostBtn post={props.post} block="block" />
              )
            ) : (
              <SavePostBtn post={props.post} block="block" />
            ),
          ]}
        >
          <Card
            className="innerCardBase"
            onClick={handlePostClick}
            type="inner"
            bordered={true}
            title={postTitle}
            extra={
              avatar ? (
                <Tooltip title={postAuthor}>
                  <Avatar
                    src={avatar}
                    size="small"
                    alt="avatar not supported"
                  />
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
            style={{ width: "100%" }}
            cover={<PostImage postImg={postImg} height="300px" />}
          >
            <Meta
              style={{ fontWeight: "bolder" }}
              description={tags.length !== 0 ? "Related To: " + tags : null}
            />
          </Card>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Post;
