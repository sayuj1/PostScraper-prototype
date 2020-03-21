import React, { Fragment, useContext } from "react";
import { Tag } from "antd";
const FollowingTopic = props => {
  const { selectedTag } = props;

  return (
    <Fragment>
      <Tag
        color="#87d068"
        style={{ fontSize: "20px", padding: "10px", marginBottom: "10px" }}
      >
        {selectedTag}
      </Tag>
    </Fragment>
  );
};

export default FollowingTopic;
