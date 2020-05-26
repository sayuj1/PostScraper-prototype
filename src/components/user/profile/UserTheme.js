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

  useEffect(() => {
    let b = document.querySelector("#testing");
    let backgroundStyles = document.querySelector("#backgroundStyles");
    if (localStorage.getItem("theme") == "dark") {
      b.href = "/styles/antd.dark.css";
      backgroundStyles.href = "/styles/customBackgroundDark.css";
    } else if (localStorage.getItem("theme") == "light") {
      b.href = "/styles/antd.css";
      backgroundStyles.href = "/styles/customBackground.css";
    }
  }, []);

  const onChange = (checked) => {
    // true --> dark
    // false --> light

    getUserTheme(userTheme);

    let b = document.querySelector("#testing");
    let backgroundStyles = document.querySelector("#backgroundStyles");
    if (localStorage.getItem("theme") == "light") {
      b.href = "/styles/antd.dark.css";
      backgroundStyles.href = "/styles/customBackgroundDark.css";
    } else if (localStorage.getItem("theme") == "dark") {
      b.href = "/styles/antd.css";
      backgroundStyles.href = "/styles/customBackground.css";
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
