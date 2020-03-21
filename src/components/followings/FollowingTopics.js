import React, { Fragment, useContext, useEffect } from "react";
import FollowingContext from "../../context/followingContext/followingContext";
import FollowingTopic from "./FollowingTopic";

const FollowingTopics = () => {
  const { getSelectedTags, selectedTags } = useContext(FollowingContext);
  const color = ["magenta", "red", "volcano", "orange"];
  // <Tag color="magenta">magenta</Tag>
  // <Tag color="red">red</Tag>
  // <Tag color="volcano">volcano</Tag>
  // <Tag color="orange">orange</Tag>
  // <Tag color="gold">gold</Tag>
  // <Tag color="lime">lime</Tag>
  // <Tag color="green">green</Tag>
  // <Tag color="cyan">cyan</Tag>
  // <Tag color="blue">blue</Tag>
  // <Tag color="geekblue">geekblue</Tag>
  // <Tag color="purple">purple</Tag>
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
