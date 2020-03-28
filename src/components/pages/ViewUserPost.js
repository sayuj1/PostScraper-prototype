import React, { Fragment, lazy, Suspense } from "react";
const ViewUserPost = lazy(() => import("../posts/ViewUserPost"));
const ViewPost = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div style={{ fontSize: "50px" }}>
            Loading ViewUserPost Component....
          </div>
        }
      >
        <ViewUserPost />
      </Suspense>
    </Fragment>
  );
};

export default ViewPost;
