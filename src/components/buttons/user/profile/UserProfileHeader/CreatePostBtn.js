import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreatePostBtn = () => {
  return (
    <Fragment>
      <Link to="/create-post">
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
          <span style={{ textDecoration: "underline" }}>Create Post</span>
        </Button>
      </Link>
    </Fragment>
  );
};

export default CreatePostBtn;
