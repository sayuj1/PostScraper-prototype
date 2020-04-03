import React, { lazy, Suspense, Fragment } from "react";

const UserProfile = lazy(() => import("../user/profile/UserProfile"));
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
