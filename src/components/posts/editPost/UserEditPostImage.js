import React, { Fragment } from "react";
import { Row, Col } from "antd";
const UserEditPostImage = props => {
  const { postImg } = props;
  return (
    <Fragment>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 12 }}
      >
        <div
          className="imageContainer"
          style={{
            padding: "20px"
          }}
        >
          <img src={postImg} alt="no img" width="100%" />
        </div>
      </Col>
    </Fragment>
  );
};

export default UserEditPostImage;
