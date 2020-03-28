import React, { Fragment, useState } from "react";
import { Form, Input } from "antd";
import CreatePostFormTags from "./CreatePostFormTags";
import SaveNewPostBtn from "../../buttons/posts/CreatePostForm/SaveNewPostBtn";
const { TextArea } = Input;

const CreatePostForm = props => {
  // states for managing form fields
  const [postTitle, setpostTitle] = useState({
    length: 0,
    focus: false,
    value: ""
  });
  // handle post title field value
  const changePostTitle = e => {
    const title = e.target.value;
    setpostTitle({
      ...postTitle,
      value: title,
      length: title.length
    });

    // wordCounter(title);
  };
  const handleTitleFocus = () => {
    setpostTitle({
      ...postTitle,
      focus: true
    });
  };
  const handleTitleBlur = () => {
    setpostTitle({
      ...postTitle,
      focus: false
    });
  };
  const [postDescription, setpostDescription] = useState({
    length: 0,
    focus: false,
    value: ""
  });
  const changePostDescription = e => {
    const description = e.target.value;
    setpostDescription({
      ...postDescription,
      value: description,
      length: description.length
    });

    // wordCounter(title);
  };
  const handleDescriptionFocus = () => {
    setpostDescription({
      ...postDescription,
      focus: true
    });
  };
  const handleDescriptionBlur = () => {
    setpostDescription({
      ...postDescription,
      focus: false
    });
  };

  return (
    <Fragment>
      <div className="postFieldsContainer" style={{ margin: "20px" }}>
        <Form>
          {/* post title */}
          <Input
            name="titleFocus"
            placeholder="Add Post Title..."
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold"
            }}
            onChange={changePostTitle}
            value={postTitle.value}
            onFocus={handleTitleFocus}
            onBlur={handleTitleBlur}
            maxLength={100}
            required
          />
          {/* display the counter on focus */}
          {postTitle.focus ? (
            <div style={{ fontWeight: "bold", float: "right" }}>
              {`${postTitle.length}/100`}
            </div>
          ) : null}

          {/* post description */}
          <TextArea
            name="postDescription"
            onFocus={handleDescriptionFocus}
            onChange={changePostDescription}
            value={postDescription.value}
            placeholder="Add Post Description...."
            style={{ resize: "none" }}
            autoSize={{ minRows: 3, maxRows: 6 }}
            onBlur={handleDescriptionBlur}
            maxLength={500}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "10px"
            }}
          />
          {postDescription.focus ? (
            <div style={{ fontWeight: "bold", float: "right" }}>
              {`${postDescription.length}/500`}
            </div>
          ) : null}

          {/* tags section  */}
          <div
            className="tags"
            style={{
              marginTop: "10px",
              fontSize: "1.5rem",
              fontWeight: "bold"
            }}
          >
            {/* for post tags */}
            <CreatePostFormTags />
          </div>
          <SaveNewPostBtn
            postTitle={postTitle.value}
            postDescription={postDescription.value}
          />
        </Form>
      </div>
    </Fragment>
  );
};

export default CreatePostForm;
