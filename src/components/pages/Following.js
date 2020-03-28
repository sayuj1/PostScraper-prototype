import React, { Fragment, lazy, Suspense } from "react";
// import Followings from "../followings/Followings";
const Followings = lazy(() => import("../followings/Followings"));
const Following = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div style={{ fontSize: "50px" }}>Loading Followings Component</div>
        }
      >
        <Followings />
      </Suspense>
    </Fragment>
  );
};

export default Following;
