import React, { Fragment } from "react";
import { Tag } from "antd";
const UserFollowingTopics = props => {
  const { topicsFollow } = props;
  return (
    <Fragment>
      <span>Following: </span>
      {topicsFollow.length !== 0 ? (
        topicsFollow.map(topic => (
          <Tag key={topic} color="#2db7f5">
            {topic}
          </Tag>
        ))
      ) : (
        <span>0</span>
      )}
    </Fragment>
  );
};

export default UserFollowingTopics;
