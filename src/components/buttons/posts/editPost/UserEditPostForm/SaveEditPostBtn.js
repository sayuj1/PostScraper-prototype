import React, { Fragment, useContext } from "react";
import { SaveOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import PostContext from "../../../../../context/postContext/postContext";

const SaveEditPostBtn = (props) => {
  const { updateEditPost, editablePost } = useContext(PostContext);
  const { postTitle, postDescription, postTags } = props.postValues;
  const { setreadOnly } = props;

  const handleFinish = () => {
    if (!postTitle.value) {
      message.error("Enter Post Title");
    } else {
      // saving the post data
      const updatePost = new Promise((resolve, reject) => {
        resolve(
          updateEditPost({
            _id: editablePost._id,
            postTitle: postTitle.value,
            postDescription: postDescription.value,
            postTags: postTags,
          })
        );
        reject((err) => err);
      });
      updatePost
        .then((response) => {
          // showing status of the save post

          message.success(response);
          setreadOnly(true);
        })
        .catch((err) => message.error(err));
    }
  };

  return (
    <Fragment>
      <Button
        htmlType="submit"
        type="primary"
        size="large"
        block
        style={{
          marginTop: "20px",
          fontWeight: "bolder",
          fontSize: "1.5rem",
          lineHeight: "1",
        }}
        onClick={handleFinish}
      >
        Save Post <SaveOutlined />
      </Button>
    </Fragment>
  );
};

export default SaveEditPostBtn;
