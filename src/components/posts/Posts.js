import React, { useEffect, useContext } from "react";
import PostContext from "../../context/postContext/postContext";
import Post from "./Post";
import { Row } from "antd";

// this component get the post from backend/react-state (for testing purpose) and pass each post to "Posts" component
const Posts = () => {
  const { posts, getPosts } = useContext(PostContext);
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="postContainer">
      <div className="posts">
        {/* defining spacing of grid or between columns */}
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
