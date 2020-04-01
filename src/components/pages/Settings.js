import React, { Fragment } from "react";
import { useParams } from "react-router";
import UserEditProfile from "../user/editProfile/UserEditProfile";
import UserEditPost from "../posts/editPost/UserEditPost";
import Page404 from "./Page404";

const Settings = () => {
  const { settingName } = useParams();
  // console.log(settingName);
  const page = () => {
    switch (settingName) {
      case "edit-profile":
        return <UserEditProfile />;
      case "edit-post":
        return <UserEditPost />;
      default:
        return <Page404 />;
    }
  };
  return (
    <Fragment>
      {/* for edit-user-profile return user-edit-profile component */}
      {page()}
    </Fragment>
  );
};

export default Settings;
