import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
// import "../../../node_modules/antd/dist/antd.css";
import PostSearch from "../posts/home/PostsSearch";
import UserContext from "../../context/userContext/userContext";
import { Menu, Avatar, Affix } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  WeiboOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { SubMenu, Item, Divider } = Menu;
const Navbar = () => {
  const { user } = useContext(UserContext);

  // selecting "home" menu by default
  const [currentSelected, setCurrentSelected] = useState("");
  const username = "/user/" + user.username;
  // console.log(name);
  // setting menu keys
  const menuKeys = {
    "/": "home",
    "/following": "following",
    "/settings/edit-profile": "edit-profile",
  };
  menuKeys[username] = "user-profile";

  // for getting current location
  const location = useLocation();
  useEffect(() => {
    // setting selected path menu
    const currentPath = location.pathname;
    const pathValue = menuKeys[currentPath];
    setCurrentSelected(pathValue);
  }, [[location.pathname, menuKeys]]);

  return (
    // setting navbar at the top
    <Affix offsetTop={0}>
      <Menu
        selectedKeys={currentSelected}
        mode="horizontal"
        style={{ lineHeight: "70px", paddingRight: "5%" }}
      >
        <Item className="logo" style={{ float: "left" }}>
          <WeiboOutlined
            style={{
              fontSize: "30px",
              verticalAlign: "middle",
              color: "dodgerblue",
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
          <Item key="edit-profile">
            <Link to="/settings/edit-profile">Edit-Profile</Link>
          </Item>

          <Divider />
          <Item key="logout">Logout</Item>
        </SubMenu>
        <Item style={{ float: "right" }} key="user-profile">
          <Link to={user && `/user/${user.username}`}>
            {user && (
              <span style={{ textTransform: "capitalize" }}>
                {[
                  user.avatar ? (
                    <Avatar
                      key="user-avatar"
                      src={user.avatar}
                      size={24}
                      style={{
                        verticalAlign: "text-bottom",
                        marginRight: "5px",
                      }}
                    />
                  ) : (
                    <Avatar
                      key="user-avatar"
                      icon={<UserOutlined />}
                      size={24}
                      style={{
                        backgroundColor: "#87d068",
                        verticalAlign: "text-bottom",
                        marginRight: "5px",
                      }}
                    />
                  ),
                  user.firstname,
                ]}
              </span>
            )}
          </Link>
        </Item>
        <Item key="following" style={{ float: "right" }}>
          <UsergroupAddOutlined />
          <Link to="/following">Following</Link>
        </Item>
        <Item key="home" style={{ float: "right" }}>
          <HomeOutlined />
          <Link to="/">Home</Link>
        </Item>
      </Menu>
    </Affix>
  );
};

export default Navbar;
