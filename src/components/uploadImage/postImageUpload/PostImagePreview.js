import React, { Fragment } from "react";

const PostImagePreview = (props) => {
  const { previewImgShow, previewImg } = props;
  return (
    <Fragment>
      <div
        className="imgPreviewContainer background"
        style={{
          border: "4px dashed gray",
          maxHeight: "auto",
          lineHeight: "350px",
          borderRadius: "2%",
        }}
      >
        <h3>
          {previewImgShow ? (
            <img
              src={previewImg}
              alt="img not supported"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "3%",
              }}
            />
          ) : (
            "Image preview will show here"
          )}
        </h3>
      </div>
    </Fragment>
  );
};

export default PostImagePreview;
