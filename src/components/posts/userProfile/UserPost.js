import React, { Fragment, useContext } from "react";
// components
import { Card, Col } from "antd";
import DeletePostBtn from "../../buttons/posts/UserPost/DeletePostBtn";

import PostImage from "../global/PostImage";
import ViewPostBtn from "../../buttons/posts/UserPost/ViewPostBtn";
import EditPostBtn from "../../buttons/posts/UserPost/EditPostBtn";
import UserContext from "../../../context/userContext/userContext";
import RemoveSavePostBtn from "../../buttons/posts/ViewPost/RemoveSavePostBtn";

const { Meta } = Card;

// this component will display each post which is coming from "Posts" component
const UserPost = (props) => {
  // post information
  const { _id, postImg, postTitle, tags, postAuthor } = props.post;
  const { saved } = props;
  const { user } = useContext(UserContext);
  return (
    <Fragment>
      {/* defining how much space should each post take */}
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        lg={{ span: 8 }}
      >
        {/* post information is shown */}
        <Card
          extra={<ViewPostBtn _id={_id} postAuthor={postAuthor} />}
          actions={
            postAuthor.toLowerCase() === user.username.toLowerCase()
              ? [
                  <EditPostBtn post={props.post} />,
                  // delete btn component
                  <DeletePostBtn _id={_id} />,
                ]
              : [<RemoveSavePostBtn _id={_id} block="block" />]
          }
          bordered={false}
          title={postTitle}
          hoverable
          style={{ width: "100%", borderRadius: "10px" }}
          cover={<PostImage postImg={postImg} height="300px" />}
        >
          <Meta
            style={{ fontWeight: "bolder" }}
            description={tags.length !== 0 ? "Related To: " + tags : null}
          />
        </Card>
      </Col>
    </Fragment>
  );
};

export default UserPost;
