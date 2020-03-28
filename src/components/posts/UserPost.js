import React, { Fragment, useContext } from "react";
// components
import { Card, Col, Button } from "antd";
import UserContext from "../../context/userContext/userContext";
import DeletePostBtn from "../buttons/posts/UserPost/DeletePostBtn";
import { useHistory } from "react-router-dom";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const { Meta } = Card;

// this component will display each post which is coming from "Posts" component
const UserPost = props => {
  // user info
  const { user } = useContext(UserContext);
  // post information
  const { _id, postImg, postTitle, tags } = props.post;

  //for navigation
  const history = useHistory();

  // handle which post is clicked and get the information
  const handlePostClick = () => {
    //loading view post component
    history.push(`/${user.username}/post/${_id}`); // /user/post/:id
  };

  const handleEdit = () => {
    console.log(_id);
    alert(`Edit btn clicked of post ${_id}`);
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
            <Button type="default" block onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} size="lg" />
            </Button>,
            // delete btn component
            <DeletePostBtn _id={_id} />
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
