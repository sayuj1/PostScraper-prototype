import React, { useContext, useEffect, useState } from "react";
import PostContext from "../../../context/postContext/postContext";
import { Select, Input, Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import UserSavedPostsSearchFilterStyles from "../../../styles/posts/userProfile/UserPostsSearchFilter.module.css";
const { Option } = Select;

const UserSavedPostsSearchFilter = () => {
  const {
    searchUserSavedPostsFilter,
    clearSearchUserSavedPostsFilter,
  } = useContext(PostContext);
  const [filterType, setfilterType] = useState("postTitle");
  useEffect(() => {
    return () => {
      // clearing search user post filter array on leaving the page (in case if user did not clear the search field before leaving the page)
      clearSearchUserSavedPostsFilter();
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
      <Option value="postAuthor">Author</Option>
      <Option value="tags">Tags</Option>
      <Option value="category">Category</Option>
    </Select>
  );

  const handleSearchFilter = (e) => {
    {
      e.target.value
        ? searchUserSavedPostsFilter(e.target.value, filterType)
        : clearSearchUserSavedPostsFilter();
    }
  };

  return (
    <span>
      <Input
        addonAfter={selectFilter}
        placeholder="Search your saved posts by...."
        size="large"
        onChange={handleSearchFilter}
      />

      <span className={UserSavedPostsSearchFilterStyles.tagInfoIconBox}>
        {filterType === "tags" ? (
          //* showing tag info icon

          <Popover
            trigger="click"
            content="Tags should be separated by comma ','"
          >
            <InfoCircleOutlined
              className={UserSavedPostsSearchFilterStyles.tagInfoIcon}
            />
          </Popover>
        ) : null}
      </span>
    </span>
  );
};

export default UserSavedPostsSearchFilter;
