import React, { Fragment } from "react";
import { List, Avatar, Comment, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../../styles/comments/ViewComments.css";

const ViewComment = props => {
  const comments = props.postComments;
  return (
    <Fragment>
      <List
        className="commentList"
        header={
          comments.length === 0
            ? comments.length + " Comment"
            : comments.length >= 1
            ? comments.length + " Comments"
            : comments.length + " Comment"
        }
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={item => (
          <li>
            <Comment
              author={item.username}
              avatar={
                item.avatar ? (
                  <Avatar src={item.avatar} />
                ) : (
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                )
              }
              content={item.comment}
              datetime={item.date}
            />
            <Divider />
          </li>
        )}
      />
    </Fragment>
  );
};

export default ViewComment;
