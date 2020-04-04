import React, { Fragment } from "react";
import { Input, Select } from "antd";
const { TextArea } = Input;
const PostForm = props => {
  const {
    postValues,
    handleChange,
    handleFocus,
    handleTags,
    filteredOptions,
    readOnly
  } = props;
  return (
    <Fragment>
      {/* post title */}
      <Input
        name="postTitle"
        placeholder="Write your post title..."
        value={postValues.postTitle.value}
        onChange={handleChange}
        onFocus={e => handleFocus(e, true)}
        onBlur={e => handleFocus(e, false)}
        maxLength={100}
        required
        readOnly={readOnly}
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold"
        }}
      />
      {/* display the counter on focus */}
      {postValues.postTitle.focus ? (
        <div style={{ fontWeight: "bold", float: "right" }}>
          {`${postValues.postTitle.length}/100`}
        </div>
      ) : null}

      {/* post description */}
      <TextArea
        name="postDescription"
        onFocus={e => handleFocus(e, true)}
        onChange={handleChange}
        value={postValues.postDescription.value}
        placeholder="Add Post Description...."
        autoSize={{ minRows: 3, maxRows: 6 }}
        onBlur={e => handleFocus(e, false)}
        maxLength={500}
        style={{
          resize: "none",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginTop: "10px"
        }}
        readOnly={readOnly}
      />
      {postValues.postDescription.focus ? (
        <div style={{ fontWeight: "bold", float: "right" }}>
          {`${postValues.postDescription.length}/500`}
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
        <Select
          mode="multiple"
          placeholder="Inserted are removed"
          value={postValues.postTags}
          onChange={handleTags}
          style={{ width: "100%" }}
          disabled={readOnly}
        >
          {filteredOptions.map(item => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </div>
    </Fragment>
  );
};

export default PostForm;
