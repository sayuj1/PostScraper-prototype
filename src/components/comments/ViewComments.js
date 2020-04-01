import React, { Fragment, useContext, useEffect } from "react";
import CommentContext from "../../context/commentContext/commentContext";
import ViewComment from "./ViewComment";
import UserContext from "../../context/userContext/userContext";

const ViewComments = () => {
  const { postId, getComments, postComments, updateUserComment } = useContext(
    CommentContext
  );
  const { user } = useContext(UserContext);

  useEffect(() => {
    // checking if postId is set or not
    if (postId) {
      getComments(postId);
    }
    // eslint-disable-next-line
  }, []);
  // updating stored user comment value
  useEffect(() => {
    updateUserComment(user);
  }, [user]);
  return (
    <Fragment>
      {postComments ? <ViewComment postComments={postComments} /> : null}
    </Fragment>
  );
};

export default ViewComments;
