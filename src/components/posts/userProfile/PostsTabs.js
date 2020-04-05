import React, {
  Fragment,
  lazy,
  Suspense,
  useState,
  useContext,
  useEffect,
} from "react";

import { Row, Col, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PostContext from "../../../context/postContext/postContext";

const UserPosts = lazy(() => import("../userProfile/UserPosts"));
const UserSavePosts = lazy(() => import("./UserSavePosts"));
const { SubMenu, Item } = Menu;
const PostsTabs = () => {
  const [currentSelected, setCurrentSelected] = useState("user-posts");
  const { filter, filterPosts } = useContext(PostContext);

  useEffect(() => {
    // console.log(filter);
    filterPosts(filter);
  }, []);
  const handleClick = (e) => {
    // console.log(e.key);

    if (
      e.key !== "item_2-menu-item_0" &&
      e.key !== "item_2-menu-item_1" &&
      e.key !== "filter" &&
      e.key
    ) {
      setCurrentSelected(e.key);
    }
  };
  return (
    <Fragment>
      <Row style={{ backgroundColor: "white" }}>
        {/* tabs */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 20, offset: 2 }}
        >
          <div className="postsTabs" style={{ margin: "20px" }}>
            <Menu
              onClick={handleClick}
              selectedKeys={currentSelected}
              mode="horizontal"
              theme="light"
              style={{ lineHeight: "50px", paddingRight: "5%" }}
            >
              <Item key="user-posts"> Posts</Item>
              <Item key="user-saved-posts">Saved Posts</Item>

              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    Filter
                    <DownOutlined
                      style={{ verticalAlign: "middle", marginLeft: "10px" }}
                    />
                  </span>
                }
              >
                <Item onClick={() => filterPosts("latest")}>Latest</Item>
                <Item onClick={() => filterPosts("oldest")}>Oldest</Item>
              </SubMenu>
              <Item key="filter" disabled>
                <span
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#2db7f5",
                    color: "white",
                    padding: "5px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                  }}
                >
                  {filter}
                </span>
              </Item>
            </Menu>

            <Row
              style={{
                backgroundColor: "whitesmoke",
                padding: "10px",
              }}
            >
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 24 }}
              >
                {currentSelected === "user-posts" ? (
                  <Suspense
                    fallback={
                      <div style={{ fontSize: "50px" }}>
                        Loading User Posts....
                      </div>
                    }
                  >
                    <UserPosts />
                  </Suspense>
                ) : (
                  <Suspense
                    fallback={
                      <div style={{ fontSize: "50px" }}>
                        Loading User Saved Posts....
                      </div>
                    }
                  >
                    <UserSavePosts />
                  </Suspense>
                )}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PostsTabs;
