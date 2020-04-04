import React, { Fragment, useState, useContext, useEffect } from "react";
import { Form } from "antd";

import SaveNewPostBtn from "../../buttons/posts/CreatePostForm/SaveNewPostBtn";
import followingContext from "../../../context/followingContext/followingContext";
import PostForm from "../global/PostForm";

const CreatePostForm = props => {
  const { tags, getAllTags } = useContext(followingContext);
  const { postImg } = props;

  useEffect(() => {
    // loading all tags from the database in the following state
    getAllTags();
  });

  const [postValues, setpostValues] = useState({
    postTitle: { focus: false, value: "", length: 0 },
    postDescription: { focus: false, value: "", length: 0 },
    postTags: []
  });

  const readOnly = false;

  const handleChange = e => {
    const inputField = e.target.name;
    const inputFieldValue = e.target.value;
    setpostValues({
      ...postValues,
      [inputField]: {
        ...postValues[inputField],
        value: inputFieldValue,
        length: inputFieldValue.length
      }
    });
  };
  const handleFocus = (e, status) => {
    const inputField = e.target.name;
    setpostValues({
      ...postValues,
      [inputField]: {
        ...postValues[inputField],
        focus: status
      }
    });
    // console.log("focus", e.target.name);
  };

  const OPTIONS = tags;
  const filteredOptions = OPTIONS.filter(o => !postValues.postTags.includes(o));
  const handleTags = selectedItems => {
    setpostValues({
      ...postValues,
      postTags: selectedItems
    });
  };

  return (
    <Fragment>
      <div className="postFieldsContainer" style={{ margin: "20px" }}>
        <Form>
          <PostForm
            postValues={postValues}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleTags={handleTags}
            filteredOptions={filteredOptions}
            readOnly={readOnly}
          />
          <SaveNewPostBtn postValues={postValues} postImg={postImg} />
        </Form>
      </div>
    </Fragment>
  );
};

export default CreatePostForm;
