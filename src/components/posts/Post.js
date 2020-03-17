import React, { Fragment } from "react";

import "../../../node_modules/antd/dist/antd";

import { Card, Col } from "antd";
const { Meta } = Card;

const Post = props => {
  const { _id, postImg, postTitle, postDescription, postAuthor } = props.post;
  return (
    <Fragment>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        lg={{ span: 6 }}
      >
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={<img alt="example" src={postImg} />}
        >
          <Meta title={postTitle} description={postDescription} />
        </Card>
      </Col>
    </Fragment>
  );
};

export default Post;
