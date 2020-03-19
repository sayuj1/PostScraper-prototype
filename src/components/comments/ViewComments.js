import React, { Fragment, useState, useContext, useEffect } from "react";
import PostContext from "../../context/postContext/postContext";
import { List, Avatar, Comment, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../../styles/comments/ViewComments.css";
import moment from "moment";

const ViewComments = props => {
  const { viewRequestedPost } = useContext(PostContext);
  const [state, setstate] = useState({
    loading: false,
    comments: [
      {
        _id: 1,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        username: "Sayuj",
        comment: "Wow Its Great",
        date: moment().format("ll")
      },
      {
        _id: 2,
        avatar: "",
        username: "Varun",
        comment: "Wow Man unbelievable",
        date: moment().format("ll")
      },
      {
        _id: 3,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        username: "Rahul",
        comment: "Test Comment",
        date: moment().format("ll")
      },
      {
        _id: 4,
        avatar: "",
        username: "Ram",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        date: moment().format("ll")
      }
    ]
  });

  const getComments = postId => {
    // requesting to the backend then add the comments to the state
    setstate({
      ...state,
      comments: [state.comments]
    });
  };
  useEffect(() => {
    if (!viewRequestedPost) {
      getComments(viewRequestedPost);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <List
        className="commentList"
        header={
          state.comments.length === 0
            ? state.comments.length + " Comment"
            : state.comments.length >= 1
            ? state.comments.length + " Comments"
            : state.comments.length + " Comment"
        }
        itemLayout="horizontal"
        dataSource={state.comments}
        renderItem={item => (
          <li>
            <Comment
              author={item.username}
              avatar={
                item.avatar ? (
                  <Avatar src={item.avatar} />
                ) : (
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                )
              }
              content={item.comment}
              datetime={item.date}
            />
            <Divider />
          </li>
        )}
      />
    </Fragment>
  );
};

export default ViewComments;
