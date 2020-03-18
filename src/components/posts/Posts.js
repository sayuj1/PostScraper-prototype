import React, { useContext } from "react";
import PostContext from "../../context/postContext/postContext";
import Post from "./Post";
import { Row } from "antd";

const Posts = () => {
  const { posts } = useContext(PostContext);
  return (
    <div className="postContainer">
      <div className="posts">
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 }
          ]}
        >
          {posts.map(post => (
            <Post key={post._id} post={post} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Posts;
