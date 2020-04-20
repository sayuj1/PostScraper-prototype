import React, { Fragment, useContext, useState } from "react";
// components
import { Card, Col, Popover, Avatar, Tooltip } from "antd";
import { UserOutlined, MoreOutlined } from "@ant-design/icons";
import DeletePostBtn from "../../buttons/posts/UserPost/DeletePostBtn";

import PostImage from "../global/PostImage";
import ViewPostBtn from "../../buttons/posts/UserPost/ViewPostBtn";
import EditPostBtn from "../../buttons/posts/UserPost/EditPostBtn";
import UserContext from "../../../context/userContext/userContext";
import RemoveSavePostBtn from "../../buttons/posts/ViewPost/RemoveSavePostBtn";
import SavePostBtn from "../../buttons/posts/ViewPost/SavePostBtn";
import PostContext from "../../../context/postContext/postContext";
import UserPostStyles from "../../../styles/posts/userProfile/UserPost.module.css";

const { Meta } = Card;

// this component will display each post which is coming from "Posts" component
const UserPost = (props) => {
  // post information
  const { _id, postImg, postTitle, tags, postAuthor, avatar } = props.post;
  const { userSavedPosts } = useContext(PostContext);
  const { user } = useContext(UserContext);

  return (
    <Fragment>
      {/* defining how much space should each post take */}
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        lg={{ span: 8 }}
      >
        {/* post information is shown */}
        <Card
          bordered={true}
          hoverable
          actions={[
            userSavedPosts.length !== 0 ? (
              userSavedPosts.find((userSaved) =>
                userSaved._id === _id
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
          title={[
            avatar ? (
              <Tooltip title={postAuthor} key={_id}>
                <Avatar src={avatar} size="small" alt="avatar not supported" />
              </Tooltip>
            ) : (
              <Tooltip title={postAuthor} key={_id}>
                <Avatar
                  className={UserPostStyles.userAvatar}
                  icon={<UserOutlined />}
                  size="small"
                  alt="avatar not supported"
                />
              </Tooltip>
            ),
            <span className={UserPostStyles.postAuthor} key={user.username}>
              {postAuthor}
            </span>,
          ]}
          extra={
            postAuthor.toLowerCase() === user.username.toLowerCase() ? (
              <Popover
                key={_id}
                trigger="click"
                placement="right"
                content={[
                  <EditPostBtn post={props.post} key={_id} />,
                  ,
                  // delete btn component
                  <DeletePostBtn _id={_id} key={user.username} />,
                ]}
              >
                <MoreOutlined
                  className={UserPostStyles.postSettingIcon}
                  title="Settings"
                />
              </Popover>
            ) : null
          }
        >
          <Card
            className={UserPostStyles.innerCardBase}
            type="inner"
            extra={<ViewPostBtn _id={_id} postAuthor={postAuthor} />}
            bordered={true}
            title={postTitle}
            cover={<PostImage postImg={postImg} height="300px" />}
          >
            <Meta
              className={UserPostStyles.postDescription}
              description={tags.length !== 0 ? "Related To: " + tags : null}
            />
          </Card>
        </Card>
      </Col>
    </Fragment>
  );
};

export default UserPost;
