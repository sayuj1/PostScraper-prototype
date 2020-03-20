import React from "react";
import { Input, AutoComplete } from "antd";
import "../../../node_modules/antd/dist/antd.css";
const { Search } = Input;

const PostSearch = () => {
  // const data = "hi";
  const handleChange = () => {
    console.log("Autocomplete loading data");
  };
  const handleSearch = () => {
    console.log("load data after hitting search button or enter");
  };
  return (
    <AutoComplete
      dropdownMatchSelectWidth={500}
      style={{
        width: "100%",
        verticalAlign: "middle"
      }}
      onChange={handleChange}
    >
      <Search
        size="large"
        placeholder="Search here...."
        onSearch={handleSearch}
        enterButton
      />
    </AutoComplete>
  );
};

export default PostSearch;
