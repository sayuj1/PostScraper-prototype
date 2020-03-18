import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/antd/dist/antd.css";
import PostSearch from "../posts/PostsSearch";
import { Menu } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  WeiboOutlined
} from "@ant-design/icons";
const { SubMenu, Item, Divider } = Menu;
const Navbar = () => {
  // selecting "home" menu by default
  const [currentSelected, setCurrentSelected] = useState("home");

  // setting up the current selected menu
  const handleClick = e => {
    setCurrentSelected(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={currentSelected}
      mode="horizontal"
      theme="light"
      style={{ lineHeight: "70px", paddingRight: "5%" }}
    >
      <Item className="logo" style={{ float: "left" }}>
        <WeiboOutlined
          style={{
            fontSize: "30px",
            verticalAlign: "middle",
            color: "dodgerblue"
          }}
        />
      </Item>
      <Item style={{ width: "50%", float: "left" }}>
        <PostSearch />
      </Item>
      <SubMenu
        style={{ float: "right" }}
        title={
          <span className="submenu-title-wrapper">
            <SettingOutlined />
            Settings
          </span>
        }
        key="settings"
      >
        <Item key="edit-profile">Edit-Profile</Item>
        <Divider />
        <Item key="logout">Logout</Item>
      </SubMenu>
      <Item style={{ float: "right" }}>Avatar Sayuj</Item>
      <Item key="following" style={{ float: "right" }}>
        <UsergroupAddOutlined />
        Following
      </Item>
      <Item key="home" style={{ float: "right" }}>
        <HomeOutlined />
        <Link to="/">Home</Link>
      </Item>
    </Menu>
  );
};

export default Navbar;
