import React, { Fragment, useContext } from "react";
import PostContext from "../../../../context/postContext/postContext";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const EditPostBtn = (props) => {
  const { editPost } = useContext(PostContext);

  const { post } = props;

  //for navigation
  const history = useHistory();

  const handleEdit = () => {
    editPost(props.post);
    history.push("/settings/edit-post");
  };
  return (
    <Fragment>
      <Button type="default" block onClick={handleEdit}>
        <FontAwesomeIcon icon={faEdit} size="lg" />
      </Button>
    </Fragment>
  );
};

export default EditPostBtn;
