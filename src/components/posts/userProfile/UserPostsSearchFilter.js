import React, { Fragment, useState, useContext } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Select, Popover, Input, Menu } from "antd";

import PostContext from "../../../context/postContext/postContext";
const { Option } = Select;
const { Item } = Menu;

const UserPostSearchFilter = () => {
  const { searchUserPostsFilter, clearSearchUserPostsFilter } = useContext(
    PostContext
  );
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
      {/* <Option value="postAuthor">Author</Option> */}
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

      {filterType === "tags" ? ( //* showing tag info icon
        <Item key="info-icon">
          <Popover
            trigger="click"
            content="Tags should be separated by comma ','"
          >
            <InfoCircleOutlined style={{ fontSize: "32px" }} />
          </Popover>
        </Item>
      ) : null}
    </Fragment>
  );
};

export default UserPostSearchFilter;
