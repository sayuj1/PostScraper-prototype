import React, { Fragment, useContext } from "react";
import { Button, message } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import PostContext from "../../../../context/postContext/postContext";
import moment from "moment";
import { useHistory } from "react-router-dom";
import UserContext from "../../../../context/userContext/userContext";

const SaveNewPostBtn = (props) => {
  const { postImg } = props;
  const { user } = useContext(UserContext);
  const { postTitle, postDescription, postTags } = props.postValues;
  //for navigation
  const history = useHistory();
  const { saveNewPost, setLoading } = useContext(PostContext);
  const handleFinish = () => {
    if (!postTitle.value) {
      message.error("Enter Post Title");
    } else {
      const postData = {}; // declaring object for new post data
      // storing post data
      postData._id = Date.now();
      postData.postTitle = postTitle.value;
      postData.postDescription = postDescription.value;
      postData.postImg = postImg;
      postData.postAuthor = user.username;
      postData.tags = postTags;
      postData.date = moment().format("MMM D YYYY, h:mm:ss A");
      postData.avatar = user.avatar;
      postData.thumbnail = "";
      postData.postSavedBy = [];

      // saving the post data
      const savePost = new Promise((resolve, reject) => {
        resolve(saveNewPost(postData));
        reject((err) => err);
      });

      savePost
        .then((response) => {
          // showing status of the save post

          message.success(response);

          // set loader
          setLoading(true);
          // redirecting user to view this new post
          setTimeout(() => {
            // since post ID will be generate from the server so, in response i have to send post id also when the new post created
            history.push(`${user.username}/post/${postData._id}`);
          }, 5000);
        })
        .catch((err) => message.error(err));
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
          marginBottom: "20px",
          fontWeight: "bolder",
          fontSize: "1.5rem",
          lineHeight: "1",
        }}
        onClick={handleFinish}
      >
        Save Posts <SaveOutlined />
      </Button>
    </Fragment>
  );
};

export default SaveNewPostBtn;
