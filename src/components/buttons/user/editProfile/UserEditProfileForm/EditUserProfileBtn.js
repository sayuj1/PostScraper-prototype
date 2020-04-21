import React, { Fragment } from "react";
import { Button } from "antd";
const EditUserProfileBtn = props => {
  const { setreadOnly } = props;
  return (
    <Fragment>
      <Button
        onClick={() => setreadOnly(false)}
        type="primary"
        size="large"
        style={{ fontSize: "1.5rem", height: "auto" }}
      >
        Edit Profile
      </Button>
    </Fragment>
  );
};

export default EditUserProfileBtn;
