import React, { useContext, useEffect } from "react";
import PostContext from "../../context/postContext/postContext";
import { useHistory } from "react-router-dom";
import ViewRequestedPost from "./ViewRequestedPost";

const ViewRequestedPosts = () => {
  const { viewRequestedPost, getRequestedPost, requestedPost } = useContext(
    PostContext
  );
  const history = useHistory();

  useEffect(() => {
    // if there is no viewRequestedPost
    if (!viewRequestedPost) {
      history.push("/page-not-found");
    }
    // loading post data
    getRequestedPost(viewRequestedPost);
  }, [viewRequestedPost]);
  return (
    <div className={`postContainer_${viewRequestedPost}`}>
      {requestedPost !== null
        ? requestedPost.map(post => (
            <ViewRequestedPost key={post._id} post={post} />
          ))
        : "Nothing Found!"}
    </div>
  );
};

export default ViewRequestedPosts;
