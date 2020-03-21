import React, { Fragment, useContext, useEffect } from "react";
import FollowingContext from "../../context/followingContext/followingContext";
import FollowingTopic from "./FollowingTopic";

const FollowingTopics = () => {
  const { getSelectedTags, selectedTags } = useContext(FollowingContext);

  useEffect(() => {
    getSelectedTags();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {selectedTags.length !== 0 ? (
        selectedTags.map(selectedTag => (
          <FollowingTopic key={selectedTag} selectedTag={selectedTag} />
        ))
      ) : (
        <h1>You have not selected any topic</h1>
      )}
    </Fragment>
  );
};

export default FollowingTopics;
