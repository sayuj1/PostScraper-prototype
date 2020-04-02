import React, { Fragment, useContext, useEffect, useState } from "react";
import followingContext from "../../../context/followingContext/followingContext";
import PostContext from "../../../context/postContext/postContext";
import { Select } from "antd";

const CreatePostFormTags = () => {
  const { tags, getAllTags } = useContext(followingContext);
  const { createPostTags, savePostTag } = useContext(PostContext);

  useEffect(() => {
    // loading all tags from the database in the following state
    getAllTags();
  });

  const OPTIONS = tags;
  const filteredOptions = OPTIONS.filter(o => !createPostTags.includes(o));
  const handleChange = selectedItems => {
    savePostTag(selectedItems);
  };

  return (
    <Fragment>
      <Select
        mode="multiple"
        placeholder="Inserted are removed"
        value={createPostTags}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    </Fragment>
  );
};

export default CreatePostFormTags;
