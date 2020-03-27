import React, { Fragment, useContext, useEffect, useState } from "react";
import followingContext from "../../context/followingContext/followingContext";
import PostContext from "../../context/postContext/postContext";
import { Mentions, Tag } from "antd";

const { Option } = Mentions;
const CreatePostFormTags = () => {
  const { tags, getAllTags } = useContext(followingContext);
  const { createPostTags, savePostTag, removePostTag } = useContext(
    PostContext
  );
  useEffect(() => {
    // loading all tags from the database in the following state
    getAllTags();
  });

  const MOCK_DATA = {
    "#": tags
  };

  // add tags on selection to the state
  const handleSelect = ({ value }) => {
    // saving mention tags
    savePostTag(value);
  };

  const removeTag = removeTag => {
    removePostTag(removeTag);
  };

  return (
    <Fragment>
      <Mentions
        style={{ width: "100%" }}
        placeholder="input # and select the tag to mention it "
        prefix={"#"}
        onSelect={handleSelect}
      >
        {(MOCK_DATA["#"] || []).map(value =>
          createPostTags.indexOf(value) === -1 ? (
            <Option key={value} value={value}>
              {value}
            </Option>
          ) : null
        )}
      </Mentions>

      {createPostTags.length !== 0 ? (
        <div className="showSelectedTags">
          <span style={{ marginRight: "2px" }}>Tags:</span>
          {createPostTags.map(topic => (
            <Tag key={topic} closable onClose={() => removeTag(topic)}>
              {topic}
            </Tag>
          ))}
        </div>
      ) : null}
    </Fragment>
  );
};

export default CreatePostFormTags;
