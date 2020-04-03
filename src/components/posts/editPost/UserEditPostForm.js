import React, { Fragment, useState, useEffect, useContext } from "react";
import { Form, Input, Select } from "antd";
import followingContext from "../../../context/followingContext/followingContext";
import EditPostBtn from "../../buttons/posts/UserEditPostForm/EditPostBtn";
import SaveEditPostBtn from "../../buttons/posts/UserEditPostForm/SaveEditPostBtn";
const { TextArea } = Input;
const UserEditPostForm = props => {
  const { tags, getAllTags } = useContext(followingContext);

  useEffect(() => {
    // loading all tags from the database in the following state
    getAllTags();
  });

  const { title, description, userPostTags } = props;

  const [postValues, setpostValues] = useState({
    postTitle: "",
    postDescription: "",
    postTags: []
  });
  const [readOnly, setreadOnly] = useState(true);
  // setting values on pageload
  useEffect(() => {
    if (userPostTags) {
      setpostValues({
        postTitle: title,
        postDescription: description,
        postTags: userPostTags
      });
    } else {
      setpostValues({
        postTitle: title,
        postDescription: description,
        postTags: []
      });
    }
  }, []);

  const handleChange = e => {
    setpostValues({
      ...postValues,
      [e.target.name]: e.target.value
    });
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
      <div className="editPostFieldContainer">
        <Form>
          <Input
            name="postTitle"
            placeholder="Write your post title..."
            value={postValues.postTitle}
            onChange={handleChange}
            maxLength={100}
            required
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold"
            }}
            readOnly={readOnly}
          />
          <TextArea
            name="postDescription"
            placeholder="Write your post description here..."
            value={postValues.postDescription}
            onChange={handleChange}
            autoSize={{ minRows: 3, maxRows: 6 }}
            maxLength={500}
            style={{
              resize: "none",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "10px"
            }}
            readOnly={readOnly}
          />
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
          <div className="editSavePostBtn" style={{ marginBottom: "40px" }}>
            {readOnly ? (
              <EditPostBtn setreadOnly={setreadOnly} />
            ) : (
              <SaveEditPostBtn
                setreadOnly={setreadOnly}
                postValues={postValues}
              />
            )}
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default UserEditPostForm;
