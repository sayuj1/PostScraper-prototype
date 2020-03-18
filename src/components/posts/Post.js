import React, { Fragment, useContext } from "react";
import PostContext from "../../context/postContext/postContext";
import "../../../node_modules/antd/dist/antd";
import { Card, Col } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;

const Post = props => {
  const { setViewPost } = useContext(PostContext);
  const { _id, postImg, postTitle, tags } = props.post;
  const history = useHistory();

  // handle view clicked post
  const handlePostClick = () => {
    setViewPost(_id);
    //loading view post component
    history.push(`/post/${_id}`);
  };

  return (
    <Fragment>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        lg={{ span: 6 }}
      >
        <Card
          onClick={handlePostClick}
          bordered={false}
          title={postTitle}
          hoverable
          style={{ width: "100%", borderRadius: "10px" }}
          cover={<img alt="example" src={postImg} height="300px" />}
        >
          <Meta
            style={{ fontWeight: "bolder" }}
            description={"Related To: " + tags}
          />
        </Card>
      </Col>
    </Fragment>
  );
};

export default Post;
