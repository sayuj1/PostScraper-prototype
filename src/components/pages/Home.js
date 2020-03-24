import React, { Fragment, useEffect, useContext } from "react";
import UserContext from "../../context/userContext/userContext.js";
import Posts from "../posts/Posts";

const Home = () => {
  const { getUser } = useContext(UserContext);
  // loading user details
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Fragment>
      <div className="postsContent">
        <Posts />
      </div>
    </Fragment>
  );
};

export default Home;
