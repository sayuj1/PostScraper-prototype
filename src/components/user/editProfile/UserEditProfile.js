import React, { Fragment, useEffect, useContext } from "react";
import UserContext from "../../../context/userContext/userContext";

const UserEditProfile = () => {
  const { user, editableUser, clearEditableUser } = useContext(UserContext);

  // setting editable user on component loaded
  useEffect(() => {
    editableUser(user);
    // eslint-disable-next-line
  }, []);

  // remove editable user when component gets un-mounting
  useEffect(() => {
    return () => {
      clearEditableUser();
    };
    // eslint-disable-next-line
  }, []);
  return <Fragment></Fragment>;
};

export default UserEditProfile;
