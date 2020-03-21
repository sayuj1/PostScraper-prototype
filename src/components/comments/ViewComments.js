import React, { Fragment, useContext, useEffect } from "react";
import CommentContext from "../../context/commentContext/commentContext";
import ViewComment from "./ViewComment";

const ViewComments = () => {
  const { postId, getComments, postComments } = useContext(CommentContext);

  useEffect(() => {
    // checking if postId is set or not
    if (postId) {
      getComments(postId);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {postComments ? <ViewComment postComments={postComments} /> : null}
    </Fragment>
  );
};

export default ViewComments;
