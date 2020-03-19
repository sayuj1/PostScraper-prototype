import React, { Fragment, useContext } from "react";
import PostContext from "../../context/postContext/postContext";
import "../../../node_modules/antd/dist/antd";
import { Card, Col } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;

// this component will display each post which is coming from "Posts" component
const Post = props => {
  // for getting clicked post information
  const { setViewPost } = useContext(PostContext);
  // post information
  const { _id, postImg, postTitle, tags } = props.post;
  //for navigation
  const history = useHistory();

  // handle which post is clicked and get the information
  const handlePostClick = () => {
    setViewPost(_id);
    //loading view post component
    history.push(`/post/${_id}`);
  };

  return (
    <Fragment>
      {/* defining how much space should each post take */}
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 6 }}
        lg={{ span: 6 }}
      >
        {/* post information is shown */}
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
            description={tags ? "Related To: " + tags : null}
          />
        </Card>
      </Col>
    </Fragment>
  );
};

export default Post;
