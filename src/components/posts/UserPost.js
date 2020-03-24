import React, { Fragment } from "react";
import "../../../node_modules/antd/dist/antd";
import { Card, Col, Button } from "antd";
import { useHistory } from "react-router-dom";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const { Meta } = Card;

// this component will display each post which is coming from "Posts" component
const UserPost = props => {
  // post information
  const { _id, postImg, postTitle, tags } = props.post;

  //for navigation
  const history = useHistory();

  // handle which post is clicked and get the information
  const handlePostClick = () => {
    //loading view post component
    history.push(`/post/${_id}`);
  };

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
          extra={
            <Button type="primary" shape="round" onClick={handlePostClick}>
              View
            </Button>
          }
          actions={[
            <Button type="default" block>
              <FontAwesomeIcon icon={faEdit} size="lg" />
            </Button>,
            <Button type="danger" block>
              <FontAwesomeIcon icon={faTrash} size="lg" />
            </Button>
          ]}
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

export default UserPost;
