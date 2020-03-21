import React, { Fragment, useEffect, useContext } from "react";
import FollowingContext from "../../context/followingContext/followingContext";
import Topic from "./Topic";

const Topics = () => {
  const { tags, getAllTags } = useContext(FollowingContext);
  useEffect(() => {
    // loading all the tags on page load
    getAllTags();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {tags.length !== 0 ? (
        tags.map(tag => <Topic key={tag} tag={tag} />)
      ) : (
        <h1>No Topics Found!</h1>
      )}
    </Fragment>
  );
};

export default Topics;
