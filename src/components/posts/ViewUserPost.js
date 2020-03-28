import React, { useContext, useEffect } from "react";
import PostContext from "../../context/postContext/postContext";
import CommentContext from "../../context/commentContext/commentContext";
import { useParams } from "react-router-dom";

import ViewPost from "./ViewPost";
const ViewPosts = () => {
  const {
    viewPostId,
    getViewUserPost,
    viewPost,
    setViewPost,
    clearViewPost
  } = useContext(PostContext);
  const { setPostId } = useContext(CommentContext); // setting post id on mounting the component for comments
  const { clearPostId } = useContext(CommentContext); // removing post id on un mounting the component for comments

  const { id } = useParams();
  // on mounting the component
  useEffect(
    () => {
      // if there is no viewPostId  such that user trying to visit by entering url directly
      if (!viewPostId) {
        // setting post id coming from URL
        setViewPost(Number(id)); // for posts
        setPostId(Number(id)); // for comments
      } else {
        // if post id not found and post state contain error
        // history.push("/page-not-found");
      }
      if (viewPostId) {
        // loading post data
        getViewUserPost(viewPostId);
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
      {viewPost !== null
        ? viewPost.map(post => <ViewPost key={post._id} post={post} />)
        : "Nothing Found!"}
    </div>
  );
};

export default ViewPosts;
