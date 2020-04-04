import React, { Fragment, useState, useEffect, useContext } from "react";
import { Form, Input, Select } from "antd";
import followingContext from "../../../context/followingContext/followingContext";
import EditPostBtn from "../../buttons/posts/UserEditPostForm/EditPostBtn";
import SaveEditPostBtn from "../../buttons/posts/UserEditPostForm/SaveEditPostBtn";
import PostForm from "../PostForm";
const { TextArea } = Input;
const UserEditPostForm = props => {
  const { tags, getAllTags } = useContext(followingContext);

  useEffect(() => {
    // loading all tags from the database in the following state
    getAllTags();
  });

  const { title, description, userPostTags } = props;

  const [postValues, setpostValues] = useState({
    postTitle: { focus: false, value: "", length: 0 },
    postDescription: { focus: false, value: "", length: 0 },
    postTags: []
  });

  const [readOnly, setreadOnly] = useState(true);
  // setting values on pageload
  useEffect(() => {
    if (userPostTags) {
      setpostValues({
        postTitle: {
          ...postValues.postTitle,
          value: title,
          length: title.length
        },
        postDescription: {
          ...postValues.postDescription,
          value: description,
          length: description.length
        },
        postTags: userPostTags
      });
    } else {
      setpostValues({
        postTitle: {
          ...postValues.postTitle,
          value: title,
          length: title.length
        },
        postDescription: {
          ...postValues.postDescription,
          value: description,
          length: description.length
        },
        postTags: []
      });
    }
  }, []);

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

  const OPTIONS = tags;
  const filteredOptions = OPTIONS.filter(o => !postValues.postTags.includes(o));
  const handleTags = selectedItems => {
    setpostValues({
      ...postValues,
      postTags: selectedItems
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

  return (
    <Fragment>
      <div className="editPostFieldContainer">
        <Form>
          <PostForm
            postValues={postValues}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleTags={handleTags}
            filteredOptions={filteredOptions}
            readOnly={readOnly}
          />

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
