import React, { Fragment } from "react";
import "../../../node_modules/antd/dist/antd.css";
import { Col, Row, Form } from "antd";
import GoHomeBtn from "../buttons/global/GoHomeBtn";
import UploadImg from "../uploader/UploadImg";

const CreatePost = () => {
  const handleFinish = () => {
    //store the form data to the backend
  };
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
            <Form onFinish={handleFinish}>
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
                    <div
                      className="uploadContainer"
                      style={{ textAlign: "center" }}
                    >
                      <UploadImg />
                    </div>
                  </div>
                </Col>

                {/* second div containing information about image */}

                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                >
                  <div className="postFieldsContainer">
                    {/* back button for going back to home page */}
                    <GoHomeBtn margin="20px" shape="round" />
                  </div>
                  <div className="postFields" style={{ margin: "20px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia est dicta temporibus beatae nam deserunt sit earum,
                    provident veritatis fuga?
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CreatePost;
