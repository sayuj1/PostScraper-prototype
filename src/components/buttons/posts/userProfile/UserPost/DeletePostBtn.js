import React, { Fragment, useContext } from "react";
import PostContext from "../../../../../context/postContext/postContext";
import { Popconfirm, Button, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { QuestionCircleOutlined } from "@ant-design/icons";
const DeletePostBtn = (props) => {
  const { _id } = props;
  const { deleteUserPost } = useContext(PostContext);
  // deleting user posts
  const handleDelete = () => {
    deleteUserPost(_id);
    //TODO: add the promise here
    message.success("Post Deleted Successfully!");
  };
  return (
    <Fragment>
      {/* confirm box before deletion */}
      <Popconfirm
        title="Are you sure？"
        okText="Delete"
        okType="danger"
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        onConfirm={handleDelete}
      >
        <Button type="danger" block>
          {/* <FontAwesomeIcon icon={faTrash} size="lg" /> */}
          Delete
          <FontAwesomeIcon
            icon={faTrash}
            size="sm"
            style={{ marginLeft: "10px" }}
          />
        </Button>
      </Popconfirm>
    </Fragment>
  );
};

export default DeletePostBtn;
