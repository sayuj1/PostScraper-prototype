import React, { lazy, Suspense, Fragment } from "react";
// import UserProfile from "../user/UserProfile";
// import UserPosts from "../posts/UserPosts";
const UserProfile = lazy(() => import("../user/UserProfile"));
const User = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div style={{ fontSize: "50px" }}>
            Loading UserProfile Component....
          </div>
        }
      >
        <UserProfile />
      </Suspense>
    </Fragment>
  );
};

export default User;
