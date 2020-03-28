import React, { useReducer } from "react";
import CommentContext from "./commentContext";
import commentReducer from "./commentReducer";
import {
  Add_Comment,
  Set_Comments,
  Set_Post_Id,
  Clear_Post_Id
} from "./commentActions";
import moment from "moment";

const CommentState = props => {
  const initialState = {
    loading: false,
    postId: null, // for selected view post (to add comments only to that posts)
    postComments: [
      {
        _id: 1,
        postId: 1,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        username: "Sayuj",
        comment: "Wow Its Great",
        date: moment().format("ll")
      },
      {
        _id: 2,
        postId: 1,
        avatar: "",
        username: "Varun",
        comment: "Wow Man unbelievable",
        date: moment().format("ll")
      },
      {
        _id: 3,
        postId: 1,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        username: "Rahul",
        comment: "Test Comment",
        date: moment().format("ll")
      },
      {
        _id: 4,
        postId: 1,
        avatar: "",
        username: "Ram",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        date: moment().format("ll")
      }
    ]
  };
  const [state, dispatch] = useReducer(commentReducer, initialState);

  const addComment = postComment => {
    postComment._id = Date.now();
    postComment.postId = state.postId;

    dispatch(Add_Comment(postComment));
  };

  const getComments = () => {
    // setting comments (coming from axios request) in the comment state
    dispatch(Set_Comments(state.postId));
  };

  const setPostId = postId => {
    dispatch(Set_Post_Id(postId));
  };

  const clearPostId = () => {
    dispatch(Clear_Post_Id());
  };

  return (
    <CommentContext.Provider
      value={{
        postComments: state.postComments,
        postId: state.postId,
        addComment: addComment,
        getComments: getComments,
        setPostId: setPostId,
        clearPostId: clearPostId
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
