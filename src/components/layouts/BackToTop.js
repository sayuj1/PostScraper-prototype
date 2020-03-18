import React, { Fragment } from "react";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";

const BackToTop = () => {
  return (
    <Fragment>
      {/* for going back to top */}
      <BackTop
        target={() => document.querySelector(".Layouts_postsContent__14i80")}
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
    </Fragment>
  );
};

export default BackToTop;
