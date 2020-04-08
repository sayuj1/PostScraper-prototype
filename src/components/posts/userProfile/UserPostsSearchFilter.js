import React, { useContext, useEffect } from "react";
import PostContext from "../../../context/postContext/postContext";
import { Select, Input, Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
const { Option } = Select;
const UserPostsSearchFilter = (props) => {
  const { setfilterType, filterType } = props;
  const { searchUserPostsFilter, clearSearchUserPostsFilter } = useContext(
    PostContext
  );

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

      <span style={{ marginLeft: "5px", marginRight: "25px" }}>
        {filterType === "tags" ? (
          //* showing tag info icon

          <Popover
            trigger="click"
            content="Tags should be separated by comma ','"
          >
            <InfoCircleOutlined style={{ fontSize: "25px" }} />
          </Popover>
        ) : null}
      </span>
    </span>
  );
};

export default UserPostsSearchFilter;
