import React, { Fragment, useState, useContext, useEffect } from "react";

import { Row, Col, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PostContext from "../../../../context/postContext/postContext";
import UserPostsSearchFilter from "./UserPostsSearchFilter";
import UserPostsCounter from "./UserPostsCounter";
import SelectedPostsTab from "./SelectedPostsTab";
import UserSavedPostsSearchFilter from "./UserSavedPostsSearchFilter";
import PostsTabsStyles from "../../../../styles/posts/userProfile/PostsTabs.module.css";
import Styles from "../../../../styles/Global/GlobalResponsiveQueries.module.css";

const { SubMenu, Item } = Menu;

const PostsTabs = () => {
  const [currentSelected, setCurrentSelected] = useState("user-posts");
  const {
    userPostfilter,
    filterUserPosts,
    // userSavedPostFilter,
    // filterUserSavedPosts,
  } = useContext(PostContext);

  let a;
  useEffect(() => {
    // console.log(userSavedPostFilter);
    filterUserPosts(userPostfilter);
    // filterUserSavedPosts(userSavedPostFilter);
    window.addEventListener("scroll", handlePostsTabs);
    a = document.querySelector(".postsTabsMenu");

    return () => {
      window.removeEventListener("scroll", handlePostsTabs);
    };
  }, []);
  const handleClick = (e) => {
    if (e.key === "user-posts" || e.key === "user-saved-posts") {
      setCurrentSelected(e.key);
    }
  };

  const handlePostsTabs = () => {
    if (window.pageYOffset > 352) {
      a.classList.add(PostsTabsStyles.postsTabsFixed);
    } else if (window.pageYOffset <= 352) {
      a.classList.remove(PostsTabsStyles.postsTabsFixed);
    }
  };

  return (
    <Fragment>
      <Row className="backgroundContent">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 20, offset: 2 }}
        >
          <UserPostsCounter currentSelected={currentSelected} />
        </Col>
      </Row>
      <Row className="backgroundContent">
        {/* tabs */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 20, offset: 2 }}
        >
          <div className={PostsTabsStyles.postsTabs}>
            <Menu
              className={`postsTabsMenu ${PostsTabsStyles.postsTabsMenu}`}
              onClick={handleClick}
              selectedKeys={currentSelected}
              mode="horizontal"
              theme="light"
            >
              <Item key="user-posts"> Posts</Item>
              <Item key="user-saved-posts">Saved Posts</Item>

              <Item key="filter-search">
                <span className={Styles.cutomHideOn660AndBelow}>
                  {currentSelected === "user-posts" ? (
                    <UserPostsSearchFilter />
                  ) : (
                    <UserSavedPostsSearchFilter />
                  )}
                </span>
              </Item>

              {currentSelected === "user-posts" ? (
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      Filter
                      <DownOutlined
                        className={PostsTabsStyles.postsTabsFilter}
                      />
                    </span>
                  }
                >
                  <Item onClick={() => filterUserPosts("latest")}>Latest</Item>
                  <Item onClick={() => filterUserPosts("oldest")}>Oldest</Item>
                </SubMenu>
              ) : null}

              <Item key="filter" disabled>
                {currentSelected === "user-posts" ? (
                  <span className={PostsTabsStyles.postsTabsFilterText}>
                    {userPostfilter}
                  </span>
                ) : null}
              </Item>
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
