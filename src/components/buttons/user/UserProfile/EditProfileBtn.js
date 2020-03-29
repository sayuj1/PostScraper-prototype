import React, { Fragment } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const EditProfileBtn = () => {
  return (
    <Fragment>
      <Link to="/settings/edit-profile">
        <Button
          type="default"
          size="large"
          style={{ border: "0px", fontSize: "18px" }}
          icon={
            <FontAwesomeIcon
              icon={faEdit}
              pull="left"
              size="sm"
              style={{ marginTop: "5px" }}
            />
          }
        >
          Edit Profile
        </Button>
      </Link>
    </Fragment>
  );
};

export default EditProfileBtn;
