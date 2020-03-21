import React, { Fragment, useContext } from "react";
import FollowingContext from "../../context/followingContext/followingContext";
import { Tag } from "antd";

const { CheckableTag } = Tag;

const Topic = props => {
  const { tag } = props;
  const { selectedTags, setSelectedTag, removeSelectedTag } = useContext(
    FollowingContext
  );
  const handleChange = (tag, checked) => {
    checked ? setSelectedTag(tag) : removeSelectedTag(tag);
  };
  return (
    <Fragment>
      <CheckableTag
        key={tag}
        checked={selectedTags.indexOf(tag) > -1}
        onChange={checked => handleChange(tag, checked)}
        style={{ fontSize: "20px", padding: "10px", marginBottom: "10px" }}
      >
        {tag}
      </CheckableTag>
    </Fragment>
  );
};

export default Topic;
