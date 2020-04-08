import React, {
  Fragment,
  lazy,
  Suspense,
  useState,
  useContext,
  useEffect,
} from "react";

import { Row, Col, Menu, Select, Input, Badge, Popover } from "antd";
import { DownOutlined, InfoCircleOutlined } from "@ant-design/icons";
import PostContext from "../../../context/postContext/postContext";

const UserPosts = lazy(() => import("../userProfile/UserPosts"));
const UserSavePosts = lazy(() => import("./UserSavePosts"));
const { SubMenu, Item } = Menu;
const { Option } = Select;
const PostsTabs = () => {
  const [currentSelected, setCurrentSelected] = useState("user-posts");
  const {
    userPostfilter,
    filterUserPosts,
    searchUserPostsFilter,
    clearSearchUserPostsFilter,
    userPosts,
    searchUserPosts,
  } = useContext(PostContext);

  useEffect(() => {
    // console.log(filter);
    filterUserPosts(userPostfilter);
    return () => {
      // clearing search user post filter array on leaving the page (in case if user did not clear the search field before leaving the page)
      clearSearchUserPostsFilter();
    };
  }, []);
  const handleClick = (e) => {
    if (e.key === "user-posts" || e.key === "user-saved-posts") {
      setCurrentSelected(e.key);
    }
  };

  const [filterType, setfilterType] = useState("postTitle");

  const handleSelect = (value) => {
    // console.log("Selected Value", value);
    setfilterType(value);
  };

  const selectFilter = (
    <Select
      defaultValue="postTitle"
      className="select-filter"
      size="large"
      onChange={handleSelect}
    >
      <Option value="postTitle">Title</Option>
      <Option value="postAuthor">Author</Option>
      <Option value="tags">Tags</Option>
      <Option value="category">Category</Option>
    </Select>
  );

  const handleSearchFilter = (e) => {
    {
      e.target.value
        ? searchUserPostsFilter(e.target.value, filterType)
        : clearSearchUserPostsFilter();
    }

    // console.log("Search value", e.target.value, filterType);
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
          <div
            style={{
              margin: "20px 20px 0px 20px",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            Total Posts Found:
            <Badge
              count={
                searchUserPosts !== null
                  ? searchUserPosts.length
                  : userPosts.length
              }
              showZero={true}
              style={{
                marginLeft: "10px",
                backgroundColor: "#faad14",
                fontSize: "1.2rem",
                fontWeight: "600",
                padding: "0px 10px",
              }}
            />
          </div>
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

              <Item key="filter-search">
                {/* search post filter */}
                <span>
                  <Input
                    addonAfter={selectFilter}
                    placeholder="Search your posts by...."
                    size="large"
                    onChange={handleSearchFilter}
                  />
                </span>
              </Item>
              {/* showing tag info icon */}
              {filterType === "tags" ? (
                <Item key="info-icon">
                  <Popover
                    trigger="click"
                    content="Tags should be separated by comma ','"
                  >
                    <InfoCircleOutlined style={{ fontSize: "32px" }} />
                  </Popover>
                </Item>
              ) : null}

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
