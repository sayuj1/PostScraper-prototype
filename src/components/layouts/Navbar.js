import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [currentSelected, setCurrentSelected] = useState("");

  // setting menu keys
  const menuKeys = { "/": "home", "/following": "following" };

  // for getting current location
  const location = useLocation();
  useEffect(() => {
    // setting selected path menu
    const currentPath = location.pathname;
    const pathValue = menuKeys[currentPath];
    setCurrentSelected(pathValue);
  }, [[location.pathname, menuKeys]]);

  return (
    <Menu
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
        <Link to="/following">Following</Link>
      </Item>
      <Item key="home" style={{ float: "right" }}>
        <HomeOutlined />
        <Link to="/">Home</Link>
      </Item>
    </Menu>
  );
};

export default Navbar;
