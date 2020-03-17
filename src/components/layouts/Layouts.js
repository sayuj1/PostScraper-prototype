import React, { Fragment } from "react";
import Styles from "../../styles/Layouts.module.css";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import PostState from "../../context/postContext/PostState";
import { BackTop, Affix } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
const Layouts = () => {
  return (
    <Fragment>
      <div className="header">
        {/* setting navbar at the top */}
        <Affix offsetTop={0}>
          <Navbar />
        </Affix>
      </div>
      <div className={Styles.postsContent} id="style1">
        {/* for sharing post values across the components */}
        <PostState>
          {/* for going back to top */}
          <BackTop
            target={() =>
              document.querySelector(".Layouts_postsContent__14i80")
            }
          >
            <strong>
              <UpCircleOutlined
                style={{
                  fontSize: "40px",
                  color: "#1890ff"
                }}
              />
            </strong>
          </BackTop>
          <Home />
        </PostState>
      </div>
      <div className={Styles.footer}>Get Learn ©2020 Created By App-Devs</div>
    </Fragment>
  );
};

export default Layouts;
