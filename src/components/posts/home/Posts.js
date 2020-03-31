import React, { useEffect, useContext } from "react";
import PostContext from "../../../context/postContext/postContext";
import Post from "./Post";
import { Row } from "antd";
import UserContext from "../../../context/userContext/userContext";

// this component get the post from backend/react-state (for testing purpose) and pass each post to "Posts" component
const Posts = () => {
  const { posts, getPosts, updateUserHomePostInfo } = useContext(PostContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);
  // updating user info on home page
  useEffect(() => {
    updateUserHomePostInfo(user);
  }, [user]);
  return (
    <div className="postContainer">
      <div className="posts">
        {/* defining horizontal & vertical spacing of columns */}
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 }
          ]}
        >
          {/* passing each post to "Post" component for displaying */}

          {posts.length !== 0 ? (
            posts.map(post => <Post key={post._id} post={post} />)
          ) : (
            <h1>No Posts Found!</h1>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Posts;
