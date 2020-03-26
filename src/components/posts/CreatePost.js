import React, { Fragment, useContext } from "react";
import "../../../node_modules/antd/dist/antd.css";
import { Col, Row } from "antd";
import GoHomeBtn from "../buttons/global/GoHomeBtn";
import UploadImg from "../uploader/UploadImg";
import CreatePostForm from "./CreatePostForm";
import UserLargeAvatar from "../user/UserLargeAvatar";
import UserContext from "../../context/userContext/userContext";
import UserName from "../user/UserName";

const CreatePost = () => {
  const { user } = useContext(UserContext);
  return (
    <Fragment>
      <Row style={{ backgroundColor: "white" }}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 22, offset: 1 }}
          lg={{ span: 22, offset: 1 }}
        >
          {/* post box containing both image and information about image */}
          <div className="postBox">
            {/* first div column containing image */}
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <div
                  className="imageUploadContainer"
                  style={{
                    padding: "20px"
                  }}
                >
                  {/* for image upload */}
                  <UploadImg />
                </div>
              </Col>

              {/* second div containing information about image */}

              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <div className="homeBtn">
                  {/* back button for going back to home page */}
                  <GoHomeBtn margin="20px" shape="round" />
                </div>

                <div
                  className="userAvatar"
                  style={{ textTransform: "capitalize", margin: "20px" }}
                >
                  <Row>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 12 }}
                      md={{ span: 12 }}
                      lg={{ span: 12 }}
                      style={{ marginTop: "30px" }}
                    >
                      <UserName
                        firstname={user.firstname}
                        lastname={user.lastname}
                        avatar={user.avatar}
                      />
                    </Col>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 5, offset: 5 }}
                      md={{ span: 5, offset: 5 }}
                      lg={{ span: 5, offset: 5 }}
                    >
                      <UserLargeAvatar avatar={user.avatar} />
                    </Col>
                  </Row>
                </div>
                <CreatePostForm />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CreatePost;
