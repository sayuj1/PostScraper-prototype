import React, { Fragment, useContext, useEffect } from "react";
import PostContext from "../../../context/postContext/postContext";
import { Row, Col } from "antd";
import GoUserProfileBtn from "../../buttons/global/GoUserProfileBtn";
import Styles from "../../../styles/Global/GlobalResponsiveQueries.module.css";

import UserName from "../../user/profile/UserName";
import UserContext from "../../../context/userContext/userContext";
import UserLargeAvatar from "../../user/profile/UserLargeAvatar";
import UserEditPostForm from "./UserEditPostForm";
import { useHistory } from "react-router-dom";
import PostImage from "../PostImage";

const UserEditPost = () => {
  const { editablePost, clearEditPost } = useContext(PostContext);

  const { user } = useContext(UserContext);
  const history = useHistory();

  // clearing editable post state value on un-mounting this component
  useEffect(() => {
    return () => {
      clearEditPost();
    };
  }, []);
  return (
    <Fragment>
      {/*  if editable post state is not set redirect user to the page not found */}
      {!editablePost ? (
        history.push(`/page-not-found`)
      ) : (
        <Row style={{ backgroundColor: "white" }}>
          {/* go to profile btn */}
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
          {/* both image & post details */}
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 22 }}
            lg={{ span: 22 }}
          >
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <div
                  className="imageContainer"
                  style={{
                    padding: "10px"
                  }}
                >
                  <PostImage postImg={editablePost.postImg} height="auto" />
                </div>
              </Col>

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
                <UserEditPostForm
                  title={editablePost.postTitle}
                  description={editablePost.postDescription}
                  userPostTags={editablePost.tags}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default UserEditPost;
