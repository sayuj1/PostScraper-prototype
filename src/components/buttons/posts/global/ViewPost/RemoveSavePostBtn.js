import React, { Fragment, useContext, useEffect } from "react";
import { Button, message, Popconfirm } from "antd";
import PostContext from "../../../../../context/postContext/postContext";
import UserContext from "../../../../../context/userContext/userContext";
import { QuestionCircleOutlined } from "@ant-design/icons";
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
      <Popconfirm
        title="Do you want to remove from your collection？"
        okText="Remove"
        okType="danger"
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        onConfirm={handleRemove}
      >
        <Button
          shape="round"
          type="danger"
          size="large"
          style={{ float: "right" }}
          // onClick={handleRemove}
          block={block ? block : null}
        >
          Remove
        </Button>
      </Popconfirm>
    </Fragment>
  );
};

export default RemoveSavePostBtn;
