import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const handleLoad = (setimgStatus, setimgHeight, height) => {
  setimgStatus(null);

  setimgHeight(height);
};
export const handleError = (setimgStatus) => {
  setimgStatus("Image fail to load!");
};

export const imgLoader = (
  <Spin
    tip="Loading image..."
    indicator=<LoadingOutlined
      style={{
        lineHeight: "8",
        textAlign: "center",
      }}
      spin
    />
  />
);

export const imgLoadFail = (imgStatus) => {
  return (
    <div
      className="imgLoadFail"
      style={{
        height: "150px",
        lineHeight: "10",
        // textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {imgStatus}
    </div>
  );
};

export const noImgFound = () => {
  return (
    <div
      className="noImgFound"
      style={{
        height: "150px",
        lineHeight: "10",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      No Image Found!
    </div>
  );
};
