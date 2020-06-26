import React from 'react';
import { Input, AutoComplete } from 'antd';
import { useState } from 'react';
// import "../../../../node_modules/antd/dist/antd.css";
const { Search } = Input;

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const PostSearch = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = searchText => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = data => {
    console.log('onSelect', data);
  };

  const onChange = data => {
    setValue(data);
  };

  return (
    <AutoComplete
      style={{ width: '100%' }}
      value={value}
      options={options}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
    >
      <Search size='large' placeholder='search here...' />
    </AutoComplete>
  );
};

export default PostSearch;
