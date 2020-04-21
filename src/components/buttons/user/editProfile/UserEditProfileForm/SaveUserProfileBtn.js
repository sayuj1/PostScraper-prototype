import React, { Fragment, useContext } from "react";
import { Button, message } from "antd";
import UserContext from "../../../../../context/userContext/userContext";

const SaveUserProfileBtn = (props) => {
  const { setreadOnly, userInfo } = props;
  const { updateUser } = useContext(UserContext);

  const showErrorMsg = (msg, context) => {
    message.error(`${msg} is ${context}!`);
  };

  const inputValidate = (user) => {
    if (user.firstname === "" || !user.firstname.match(/^[A-Za-z]+$/)) {
      showErrorMsg("firstname", "invalid");
    } else if (user.lastname === "" || !user.lastname.match(/^[A-Za-z]+$/)) {
      showErrorMsg("lastname", "invalid");
    } else {
      return true;
    }
    return false;
  };

  const handleSaveProfile = () => {
    if (inputValidate(userInfo)) {
      // save values to user state
      const updateUserInfo = new Promise((resolve, reject) => {
        resolve(updateUser(userInfo));
        reject((err) => err);
      });
      updateUserInfo
        .then((response) => {
          message.success(response);
          // disabling editing mode

          setreadOnly(true);
        })
        .catch((err) => message.error(err));
    }
  };
  return (
    <Fragment>
      <Button
        htmlType="submit"
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
