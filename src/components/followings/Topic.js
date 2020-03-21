import React, { Fragment, useContext } from "react";
import FollowingContext from "../../context/followingContext/followingContext";
import { Tag } from "antd";

const { CheckableTag } = Tag;

const Topic = props => {
  const { tag } = props;
  const {
    selectedTags,
    setSelectedTag,
    removeSelectedTag,
    setSelectedTagsSaveWarning
  } = useContext(FollowingContext);

  const handleSetWarning = () => {
    setSelectedTagsSaveWarning();
  };
  const handleChange = (tag, checked) => {
    const result = checked
      ? [setSelectedTag(tag), handleSetWarning()]
      : [removeSelectedTag(tag), handleSetWarning()];
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
