import React, { Fragment, useContext } from "react";
import FollowingContext from "../../context/followingContext/followingContext";
import { Tag } from "antd";
import Styles from "../../styles/following/Topic.module.css";

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
        className={Styles.availableTag}
        key={tag}
        checked={selectedTags.indexOf(tag) > -1}
        onChange={checked => handleChange(tag, checked)}
      >
        {tag}
      </CheckableTag>
    </Fragment>
  );
};

export default Topic;
