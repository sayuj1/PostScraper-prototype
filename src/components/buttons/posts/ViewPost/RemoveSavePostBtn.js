import React, { Fragment, useContext, useEffect } from "react";
import { Button, message } from "antd";
import PostContext from "../../../../context/postContext/postContext";
import UserContext from "../../../../context/userContext/userContext";
const RemoveSavePostBtn = (props) => {
  const { _id, block } = props;
  const { removeSavePost } = useContext(PostContext);
  const { user } = useContext(UserContext);

  //* Removing Save Posts
  const handleRemove = () => {
    removeSavePost(_id, user.username);
    message.success("Removed Saved Posts!");
  };

  return (
    <Fragment>
      <Button
        shape="round"
        type="danger"
        size="large"
        style={{ float: "right" }}
        onClick={handleRemove}
        block={block ? block : null}
      >
        Remove
      </Button>
    </Fragment>
  );
};

export default RemoveSavePostBtn;
