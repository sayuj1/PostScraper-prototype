import React, { Fragment, useState } from "react";
import {
  handleLoad,
  handleError,
  imgLoadFail,
  imgLoader
} from "./checkImageLoad";
const PostImage = props => {
  const { postImg, height } = props;
  // initializing image load
  const [imgStatus, setimgStatus] = useState("loading");
  const [imgHeight, setimgHeight] = useState("0px");
  return (
    <Fragment>
      {imgStatus !== "Image fail to load!" ? (
        <img
          alt="image not supported by your browser!"
          src={postImg}
          height={imgHeight}
          width="100%"
          onLoad={() => handleLoad(setimgStatus, setimgHeight, height)}
          onError={() => handleError(setimgStatus)}
        />
      ) : null}

      {imgStatus === "loading" || imgStatus !== "Image fail to load!"
        ? imgStatus
          ? imgLoader
          : null
        : imgLoadFail(imgStatus)}
    </Fragment>
  );
};

export default PostImage;
