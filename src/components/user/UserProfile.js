import React, { lazy, Suspense, Fragment } from "react";
//components
const PostsTabs = lazy(() => import("../posts/PostsTabs"));
const UserProfileHeader = lazy(() => import("./UserProfileHeader"));
const UserProfileContent = lazy(() => import("./UserProfileContent"));

const UserProfile = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div style={{ fontSize: "50px" }}>
            Loading User Profile Components....
          </div>
        }
      >
        {/* User Profile Header  */}
        <UserProfileHeader />
        <UserProfileContent />
        <PostsTabs />
      </Suspense>
    </Fragment>
  );
};

export default UserProfile;
