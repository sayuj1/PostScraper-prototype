import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const handleLoad = (setimgStatus, setimgHeight, height) => {
  setimgStatus(null);

  setimgHeight(height);
};
export const handleError = setimgStatus => {
  setimgStatus("Image fail to load!");
};

export const imgLoader = (
  <Spin
    tip="Loading image..."
    indicator=<LoadingOutlined
      style={{
        lineHeight: "8",
        textAlign: "center"
      }}
      spin
    />
  />
);

export const imgLoadFail = imgStatus => {
  return (
    <div
      style={{
        lineHeight: "20",
        textAlign: "center",
        border: "1px solid #ffccc7",
        backgroundColor: "#fff2f0",
        fontWeight: "bold"
      }}
    >
      {imgStatus}
    </div>
  );
};
