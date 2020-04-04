import React, { useContext, useEffect } from "react";
import PostContext from "../../../context/postContext/postContext";
import CommentContext from "../../../context/commentContext/commentContext";
import { useParams } from "react-router-dom";

import ViewPost from "./ViewPost";
const ViewPosts = () => {
  const {
    viewPostId,
    getViewPost,
    viewPost,
    setViewPost,
    clearViewPost,
    getViewUserPost
  } = useContext(PostContext);
  const { setPostId } = useContext(CommentContext); // setting post id on mounting the component for comments
  const { clearPostId } = useContext(CommentContext); // removing post id on un mounting the component for comments

  const { id, userName } = useParams();
  // on mounting the component
  useEffect(
    () => {
      // if there is no viewPostId  such that user trying to visit by entering url directly
      if (!viewPostId) {
        // setting post id coming from URL
        setViewPost(Number(id)); // for posts
        setPostId(Number(id)); // for comments
      }
      // loading user post if username exists other wise simple post load
      {
        viewPostId && userName
          ? getViewUserPost(viewPostId)
          : getViewPost(viewPostId);
      }
    },
    [viewPostId],
    [id]
  );
  // on unmounting the component
  useEffect(() => {
    return () => {
      clearViewPost();
      clearPostId();
    };
  }, []);
  return (
    // passing requested post

    <div className={`postContainer_${viewPostId}`}>
      {viewPost !== null && viewPost.length !== 0 ? (
        viewPost.map(post => <ViewPost key={post._id} post={post} />)
      ) : (
        <h1>"Nothing Found!"</h1>
      )}
    </div>
  );
};

export default ViewPosts;
