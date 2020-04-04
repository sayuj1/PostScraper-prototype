import React, { Fragment, lazy, Suspense } from "react";
const ViewPosts = lazy(() => import("../posts/global/ViewPosts"));
const ViewPost = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div style={{ fontSize: "50px" }}>
            Loading ViewPosts Component....
          </div>
        }
      >
        <ViewPosts />
      </Suspense>
    </Fragment>
  );
};

export default ViewPost;
