import React, { Fragment, useContext, useEffect } from "react";

import { Col, Row, Spin } from "antd";
import "../../../../node_modules/antd/dist/antd";
import UploadImg from "../../uploadImage/postImageUpload/UploadImg";
import CreatePostForm from "./CreatePostForm";
import UserLargeAvatar from "../../user/profile/UserLargeAvatar";
import UserContext from "../../../context/userContext/userContext";
import UserName from "../../user/profile/UserName";
import PostContext from "../../../context/postContext/postContext";
import "../../../styles/Global/GlobalAnt.css";
import Styles from "../../../styles/Global/GlobalResponsiveQueries.module.css";
import GoUserProfileBtn from "../../buttons/global/GoUserProfileBtn";

const CreatePost = () => {
  const { user } = useContext(UserContext);
  const { loading, removeLoading } = useContext(PostContext);

  useEffect(() => {
    return () => removeLoading(false);
  }, []);
  return (
    <Fragment>
      <Row style={{ backgroundColor: "white" }}>
        <div className={Styles.hideOnMdAndAbove} style={{ margin: "10px" }}>
          <Row>
            <Col>
              <GoUserProfileBtn
                btnText="Back"
                btnIcon="faArrowLeft"
                btnIconAlign="left"
                btnPadding="0px"
              />
            </Col>
          </Row>
        </div>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 22, offset: 1 }}
          lg={{ span: 22, offset: 1 }}
        >
          {/* post box containing both image and information about image */}
          <div className="postBox">
            <Spin
              size="large"
              spinning={loading}
              tip="Saving Your New Posts..."
              wrapperClassName="postBox"
            >
              {/* first column containing image */}
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

                {/* second div containing information about posts image */}

                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                >
                  <div
                    className={Styles.hideOnSmAndBelow}
                    style={{ margin: "10px" }}
                  >
                    <Row>
                      <Col>
                        <GoUserProfileBtn
                          btnText="Back"
                          btnIcon="faArrowLeft"
                          btnIconAlign="left"
                          btnPadding="0px"
                        />
                      </Col>
                    </Row>
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
            </Spin>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CreatePost;
