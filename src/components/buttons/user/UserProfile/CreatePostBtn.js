import React, { Fragment } from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreatePostBtn = () => {
  return (
    <Fragment>
      <Button
        type="default"
        size="large"
        style={{ border: "0px", fontSize: "18px" }}
        icon={
          <FontAwesomeIcon
            icon={faPlus}
            pull="left"
            size="sm"
            style={{ marginTop: "5px" }}
          />
        }
      >
        Create Post
      </Button>
    </Fragment>
  );
};

export default CreatePostBtn;
