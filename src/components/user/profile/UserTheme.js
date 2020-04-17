import React, { Fragment, useContext } from "react";
import { Switch } from "antd";
import UserContext from "../../../context/userContext/userContext";
const UserTheme = () => {
  const { userTheme, getUserTheme } = useContext(UserContext);
  const onChange = (checked) => {
    // true --> dark
    // false --> light
    getUserTheme(userTheme);
    console.log(`switch to ${checked}`);
  };
  return (
    <Fragment>
      <Switch
        checkedChildren="Dark"
        unCheckedChildren="Light"
        onChange={onChange}
      />
    </Fragment>
  );
};

export default UserTheme;
