import React, { Fragment, useContext } from "react";
import { Button, message } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import PostContext from "../../../../context/postContext/postContext";
import moment from "moment";
import { useHistory } from "react-router-dom";
import UserContext from "../../../../context/userContext/userContext";

const SaveNewPostBtn = props => {
  const { user } = useContext(UserContext);
  const { postTitle, postDescription } = props;
  //for navigation
  const history = useHistory();
  const {
    createPostTags,
    createPostImg,
    saveNewPost,
    clearCreateNewPost,
    setLoading
  } = useContext(PostContext);
  const handleFinish = () => {
    if (!postTitle) {
      message.error("Enter Post Title");
    } else {
      const postData = {}; // declaring object for new post data
      // storing post data
      postData._id = Date.now();
      postData.postTitle = postTitle;
      postData.postDescription = postDescription;
      postData.postImg = createPostImg;
      postData.postAuthor = user.username;
      postData.tags = createPostTags;
      postData.date = moment().format("ll");
      postData.avatar = user.avatar;
      postData.thumbnail = "";

      // saving the post data
      const savePost = new Promise((resolve, reject) => {
        resolve(saveNewPost(postData));
        reject(err => err);
      });

      savePost
        .then(response => {
          // showing status of the save post

          message.success(response);
          // clearing the form data from the post state
          clearCreateNewPost();
          // set loader
          setLoading(true);
          // redirecting user to view this new post
          setTimeout(() => {
            // since post ID will be generate from the server so, in response i have to send post id also when the new post created
            history.push(`/post/${postData._id}`);
          }, 5000);
        })
        .catch(err => message.error(err));
    }
  };
  return (
    <Fragment>
      <Button
        htmlType="submit"
        type="primary"
        size="large"
        block
        style={{
          marginTop: "20px",
          fontWeight: "bolder",
          fontSize: "1.5rem",
          lineHeight: "1"
        }}
        onClick={handleFinish}
      >
        Save Posts <SaveOutlined />
      </Button>
    </Fragment>
  );
};

export default SaveNewPostBtn;
