import React, { Fragment, useContext } from "react";
import { Button, message } from "antd";
import PostContext from "../../../../../context/postContext/postContext";
import UserContext from "../../../../../context/userContext/userContext";

const SavePostBtn = (props) => {
  const { post, block } = props;
  const { savePost } = useContext(PostContext);
  const { user } = useContext(UserContext);

  const handleSave = () => {
    savePost(post, user.username);
    message.success("Posts Saved!");
  };

  return (
    <Fragment>
      <Button
        type="primary"
        shape="round"
        size="large"
        style={{ float: "right" }}
        onClick={handleSave}
        block={block ? block : null}
      >
        Save
      </Button>
    </Fragment>
  );
};

export default SavePostBtn;
