import React, { useContext, useEffect, useState } from "react";
import PostContext from "../../../../context/postContext/postContext";
import { Select, Input, Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import UserPostsSearchFilterStyles from "../../../../styles/posts/userProfile/UserPostsSearchFilter.module.css";
const { Option } = Select;
const UserPostsSearchFilter = () => {
  const { searchUserPostsFilter, clearSearchUserPostsFilter } = useContext(
    PostContext
  );
  const [filterType, setfilterType] = useState("postTitle");
  useEffect(() => {
    return () => {
      // clearing search user post filter array on leaving the page (in case if user did not clear the search field before leaving the page)
      clearSearchUserPostsFilter();
    };
  }, []);
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
  };
  return (
    <span>
      <Input
        addonAfter={selectFilter}
        placeholder="Search your posts by...."
        size="large"
        onChange={handleSearchFilter}
      />

      <span className={UserPostsSearchFilterStyles.tagInfoIconBox}>
        {filterType === "tags" ? (
          //* showing tag info icon

          <Popover
            trigger="click"
            content="Tags should be separated by comma ','"
          >
            <InfoCircleOutlined
              className={UserPostsSearchFilterStyles.tagInfoIcon}
            />
          </Popover>
        ) : null}
      </span>
    </span>
  );
};

export default UserPostsSearchFilter;
