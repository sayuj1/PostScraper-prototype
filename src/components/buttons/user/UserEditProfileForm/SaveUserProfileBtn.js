import React, { Fragment, useContext } from "react";
import { Button, message } from "antd";
import UserContext from "../../../../context/userContext/userContext";

const SaveUserProfileBtn = props => {
  const { setreadOnly, userInfo } = props;
  const { updateUser } = useContext(UserContext);
  const handleSaveProfile = () => {
    // disabling editing mode

    // save values to user state
    const updateUserInfo = new Promise((resolve, reject) => {
      resolve(updateUser(userInfo));
      reject(err => err);
    });
    updateUserInfo
      .then(response => {
        message.success(response);
        setreadOnly(true);
      })
      .catch(err => message.error(err));
  };
  return (
    <Fragment>
      <Button
        onClick={handleSaveProfile}
        type="primary"
        size="large"
        style={{ fontSize: "1.5rem", height: "auto" }}
      >
        Save Profile
      </Button>
    </Fragment>
  );
};

export default SaveUserProfileBtn;
