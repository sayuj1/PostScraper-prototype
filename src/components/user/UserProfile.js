import React, { useEffect, useContext } from "react";
import UserContext from "../../context/userContext/userContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return <div>You reached here</div>;
};

export default UserProfile;
