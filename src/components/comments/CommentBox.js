import React, { useState, Fragment, useContext } from "react";
import { Comment, Avatar, Form, Button, Input } from "antd";
import CommentContext from "../../context/commentContext/commentContext";
import moment from "moment";
import Styles from "../../styles/comments/CommentBox.module.css";
import UserContext from "../../context/userContext/userContext";
import { UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const CommentBox = () => {
  const { addComment } = useContext(CommentContext);
  const { user } = useContext(UserContext);
  const [comment, setcomment] = useState({
    submitting: false,
    rows: 1,
    value: "",
    showButtons: false
  });

  // expanding comment box
  const handleFocus = () => {
    setcomment({
      ...comment,
      rows: 4,
      showButtons: true
    });
  };
  // shrinking comment box
  const handleCancel = () => {
    setcomment({
      ...comment,
      rows: 1,
      showButtons: false
    });
  };
  // updating state "value" on typing in comment box
  const handleChange = e => {
    setcomment({
      ...comment,
      value: e.target.value
    });
  };

  // clearing comment box value
  const clearComment = () => {
    setcomment({
      ...comment,
      value: ""
    });
  };

  // handling the submitted comment
  const handleFinish = () => {
    if (comment.value) {
      const commentValue = {
        comment: comment.value,
        date: moment().format("ll"),
        username: user.username,
        avatar: user.avatar
      };

      addComment(commentValue);
      clearComment();
    }
  };
  return (
    <Fragment>
      <Comment
        avatar={
          user.avatar ? (
            <Avatar src={user.avatar} alt="image not supported" />
          ) : (
            <Avatar
              icon={<UserOutlined />}
              style={{ backgroundColor: "#87d068" }}
              alt="image not supported"
            />
          )
        }
        content={
          <Fragment>
            <Form onFinish={handleFinish}>
              <Form.Item>
                <TextArea
                  rows={comment.rows}
                  onFocus={handleFocus}
                  onChange={handleChange}
                  value={comment.value}
                  placeholder="Add a comment...."
                  style={{ resize: "none" }}
                />
              </Form.Item>
              {comment.showButtons ? (
                <Form.Item>
                  <Button htmlType="submit" loading={false} type="primary">
                    Add a Comment
                  </Button>
                  <Button
                    danger
                    className={Styles.clearButton}
                    onClick={clearComment}
                  >
                    Clear
                  </Button>
                  <Button
                    loading={false}
                    onClick={handleCancel}
                    type="danger"
                    className={Styles.cancelButton}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              ) : null}
            </Form>
          </Fragment>
        }
      />
    </Fragment>
  );
};

export default CommentBox;
