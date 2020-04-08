import React, { Fragment, useState, useContext, useEffect } from "react";

import { Row, Col, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PostContext from "../../../context/postContext/postContext";
import UserPostsSearchFilter from "./UserPostsSearchFilter";
import UserPostsCounter from "./UserPostsCounter";
import SelectedPostsTab from "./SelectedPostsTab";

const { SubMenu, Item } = Menu;

const PostsTabs = () => {
  const [currentSelected, setCurrentSelected] = useState("user-posts");
  const { userPostfilter, filterUserPosts } = useContext(PostContext);

  useEffect(() => {
    // console.log(filter);
    filterUserPosts(userPostfilter);
  }, []);
  const handleClick = (e) => {
    if (e.key === "user-posts" || e.key === "user-saved-posts") {
      setCurrentSelected(e.key);
    }
  };

  return (
    <Fragment>
      <Row style={{ backgroundColor: "white" }}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 20, offset: 2 }}
        >
          <UserPostsCounter currentSelected={currentSelected} />
        </Col>
      </Row>
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

              {currentSelected === "user-posts" ? (
                <Item key="filter-search">
                  {/* search post filter */}
                  <UserPostsSearchFilter />
                </Item>
              ) : null}

              {currentSelected === "user-posts" ? (
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      Filter
                      <DownOutlined
                        style={{
                          verticalAlign: "middle",
                          marginLeft: "10px",
                        }}
                      />
                    </span>
                  }
                >
                  <Item onClick={() => filterUserPosts("latest")}>Latest</Item>
                  <Item onClick={() => filterUserPosts("oldest")}>Oldest</Item>
                </SubMenu>
              ) : null}

              {currentSelected === "user-posts" ? (
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
                    {userPostfilter}
                  </span>
                </Item>
              ) : null}
            </Menu>
            {/* //* displaying user-posts based on selected tab */}
            <SelectedPostsTab currentSelected={currentSelected} />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PostsTabs;
