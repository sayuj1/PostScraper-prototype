import React, { useEffect, useContext } from "react";
import PostContext from "../../../context/postContext/postContext";
import Post from "./Post";
import { Row, Empty } from "antd";

import PostsStyles from "../../../styles/posts/home/Posts.module.css";

// this component get the post from backend/react-state (for testing purpose) and pass each post to "Posts" component
const Posts = () => {
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const emptyMessage = (message) => (
    <div className={PostsStyles.emptyMessageContainer}>
      <Empty
        description={
          <span className={PostsStyles.emptyMessageDescription}>{message}</span>
        }
      />
    </div>
  );

  return (
    <div className="postContainer">
      <div className="posts">
        {/* defining horizontal & vertical spacing of columns */}
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
        >
          {/* passing each post to "Post" component for displaying */}

          {posts.length !== 0
            ? posts.map((post) => <Post key={post._id} post={post} />)
            : emptyMessage(
                "Sorry! We are Unable To Find Any Posts :( Please Try Again!"
              )}
        </Row>
      </div>
    </div>
  );
};

export default Posts;
