import React, { Fragment } from "react";
import Posts from "../posts/Posts";

const Home = () => {
  return (
    <Fragment>
      <div className="postsContent">
        <Posts />
      </div>
    </Fragment>
  );
};

export default Home;
