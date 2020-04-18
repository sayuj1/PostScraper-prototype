import React, { Fragment, useContext, useEffect } from "react";
import { Switch } from "antd";
import UserContext from "../../../context/userContext/userContext";

const UserTheme = () => {
  const { userTheme, getUserTheme } = useContext(UserContext);

  useEffect(() => {
    !userTheme
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
  }, [userTheme]);

  const onChange = (checked) => {
    // true --> dark
    // false --> light

    getUserTheme(userTheme);

    let b = document.querySelector("#testing");
    if (localStorage.getItem("theme") == "light") {
      b.href = "/styles/antd.dark.css";
    } else if (localStorage.getItem("theme") == "dark") {
      b.href = "/styles/antd.css";
    }
    console.log(`switch to ${checked}`);
  };

  return (
    <Fragment>
      <Switch
        className="themeSwitch"
        checkedChildren="Dark"
        unCheckedChildren="Light"
        defaultChecked={!userTheme ? false : true}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default UserTheme;
