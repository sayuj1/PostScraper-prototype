import React, { useContext, useEffect } from "react";
import PostContext from "../../context/postContext/postContext";
import { useHistory } from "react-router-dom";
import ViewPost from "./ViewPost";

const ViewRequestedPosts = () => {
  const { viewPostId, getViewPost, viewPost } = useContext(PostContext);
  const history = useHistory();

  useEffect(() => {
    // if there is no viewPostId
    if (!viewPostId) {
      history.push("/page-not-found");
    }
    // loading post data
    getViewPost(viewPostId);
  }, [viewPostId]);
  return (
    // passing requested post
    <div className={`postContainer_${viewPostId}`}>
      {viewPost !== null
        ? viewPost.map(post => <ViewPost key={post._id} post={post} />)
        : "Nothing Found!"}
    </div>
  );
};

export default ViewRequestedPosts;
