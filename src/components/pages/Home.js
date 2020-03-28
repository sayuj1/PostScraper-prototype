import React, { lazy, Suspense, Fragment, useEffect, useContext } from "react";
import UserContext from "../../context/userContext/userContext.js";
// import Posts from "../posts/Posts";
const Posts = lazy(() => import("../posts/Posts"));

const Home = () => {
  const { getUser } = useContext(UserContext);
  // loading user details
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Fragment>
      <Suspense
        fallback={
          <div style={{ fontSize: "50px" }}>Loading Posts Component....</div>
        }
      >
        <div className="postsContent">
          <Posts />
        </div>
      </Suspense>
    </Fragment>
  );
};

export default Home;
