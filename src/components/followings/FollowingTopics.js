import React, { Fragment, useContext, useEffect } from "react";
import FollowingContext from "../../context/followingContext/followingContext";
import FollowingTopic from "./FollowingTopic";
import { Alert } from "antd";

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
        <Alert message="You haven't selected any topic." type="info" showIcon />
      )}
    </Fragment>
  );
};

export default FollowingTopics;
