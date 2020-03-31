import React, { Fragment, useState, useContext } from "react";
import "antd/dist/antd";
import { Upload, message, Button } from "antd";
import { UploadOutlined, DeleteFilled } from "@ant-design/icons";

import PostContext from "../../../context/postContext/postContext";
import PostImagePreview from "./PostImagePreview";
import PreviewImagePostModal from "./PreviewImagePostModal";
import InvalidFileWarning from "../InvalidFileWarning";

// image validation rules
import { validateImageType, validateImageSize } from "../imageValidation";

const UploadImg = () => {
  const { saveImg, removeImg } = useContext(PostContext);

  // image upload states
  const [fileState, setfileState] = useState({
    imgFile: null,
    previewImg: null,
    previewImgShow: false,
    previewImgShowModal: false,
    invalidFile: false
  });

  //checking image file if its valid or not before uploading to the server, if it return false then image will not be uploaded to the server
  const handleBeforeUpload = file => {
    // console.log(file.size);
    // supported img --> jpeg, png
    const isJpgOrPng = validateImageType(file, setfileState, fileState);

    // image size can't be greater than 25MB
    const isLt25MB = validateImageSize(file, setfileState, fileState);
    // checking both conditions are true or not
    return isJpgOrPng && isLt25MB;
  };

  // for live previewing on the client page
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  // for handling changes on the image upload
  const handleChange = async info => {
    // console.log("response", info.file.error);
    // console.log("file", info.file);
    const file = info.file;
    // handling server errors
    if (file.error) {
      message.error("Server Error! We are Sorry :( Please try again!");
      setfileState({
        ...fileState,
        invalidFile: true
      });
    }
    // checking file status (if user deleting the file)
    if (file.status === "removed") {
      // updating state value on image removal
      setfileState({
        ...fileState,
        imgFile: null,
        previewImg: null,
        previewImgShow: false
      });
      //removing img from the post state
      removeImg();
    } else {
      // if (file.status === "uploading") {
      //   console.log("uploading");
      // }
      if (file.status === "done") {
        setfileState({
          ...fileState,
          invalidFile: false
        });
        message.success("Image uploaded successfully.");
        // for previewing image on the client side
        if (!file.url && !file.preview) {
          await getBase64(file.originFileObj)
            .then(response => (file.preview = response))
            .catch(err => {
              // console.error("error");
              message.error("Can't Preview this image!");
            });
        }

        setfileState({
          ...fileState,
          imgFile: file,
          previewImg: file.url || file.preview,
          previewImgShow: true
        });

        // console.log("Done", file.response.url);
        saveImg(file.response.url);
        // save this response to create post state (in future)
      }
      if (file.status === "error") {
        message.error("upload failed.");
        setfileState({
          ...fileState,
          invalidFile: true
        });
      }
    }
  };

  // for previewing in the modal box
  const handlePreview = () => {
    setfileState({
      ...fileState,
      previewImgShowModal: true
    });
  };

  // deleting image file from the server
  const handleRemove = file => {
    // store the uploaded image path & then pass that path here to remove the image from the server
    return new Promise((resolve, reject) => {
      resolve(console.log("removing from server"));
      // logic for removing file from the server goes here
      message.success("File removed successfully!");
      setfileState({
        ...fileState,
        invalidFile: false
      });
      reject("File not removed");
    });
  };

  return (
    <Fragment>
      <div className="uploadContainer" style={{ textAlign: "center" }}>
        {/* Image preview box  */}
        <PostImagePreview
          previewImgShow={fileState.previewImgShow}
          previewImg={fileState.previewImg}
        />

        <Upload
          multiple={false}
          beforeUpload={handleBeforeUpload}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // server location for uploading (upload route)
          listType="picture"
          onPreview={handlePreview}
          onChange={handleChange}
          onRemove={handleRemove}
          showUploadList={{
            showRemoveIcon: true,
            removeIcon: <DeleteFilled style={{ color: "red" }} />
          }}
        >
          <div style={{ width: "100% !important" }}>
            {!fileState.previewImgShow && !fileState.invalidFile ? (
              <div style={{ marginTop: "20px" }}>
                <Button type="primary">
                  Upload
                  <UploadOutlined />
                </Button>
              </div>
            ) : null}
          </div>
        </Upload>

        {/* previewing image in modal */}
        <PreviewImagePostModal
          previewImgShowModal={fileState.previewImgShowModal}
          previewImg={fileState.previewImg}
          setfileState={setfileState}
          fileState={fileState}
        />

        {/* warning for invalid files */}
        <InvalidFileWarning invalidFile={fileState.invalidFile} />
      </div>
    </Fragment>
  );
};

export default UploadImg;
