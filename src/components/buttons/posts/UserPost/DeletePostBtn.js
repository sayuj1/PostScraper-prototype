import React, { Fragment, useContext } from "react";
import PostContext from "../../../../context/postContext/postContext";
import { Popconfirm, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { QuestionCircleOutlined } from "@ant-design/icons";
const DeletePostBtn = props => {
  const { _id } = props;
  const { deleteUserPost } = useContext(PostContext);
  // deleting user posts
  const handleDelete = () => {
    deleteUserPost(_id);
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
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </Button>
      </Popconfirm>
    </Fragment>
  );
};

export default DeletePostBtn;
