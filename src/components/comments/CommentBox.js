import React, { useState, Fragment } from "react";
import { Comment, Avatar, Form, Button, Input } from "antd";
const { TextArea } = Input;

const CommentBox = () => {
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
  // handling the submitted comment
  const handleFinish = () => {
    const commentValue = comment.value;
    if (commentValue) {
      console.log("submitted data!", commentValue);
    }
  };
  return (
    <Fragment>
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
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
                    loading={false}
                    onClick={handleCancel}
                    type="danger"
                    style={{ marginLeft: "5px" }}
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
