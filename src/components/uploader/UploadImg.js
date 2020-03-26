import React, { Fragment, useState, useContext } from "react";
import "antd/dist/antd";
import { Upload, message, Modal, Button, Alert } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PostContext from "../../context/postContext/postContext";

const UploadImg = () => {
  const { saveImg } = useContext(PostContext);

  const [fileState, setfileState] = useState({
    imgFile: null,
    previewImg: null,
    previewImgShow: false,
    previewImgShowModal: false,
    invalidFile: false
  });
  // const [previewImg, setpreviewImg] = useState(null);
  // const [previewImgShow, setpreviewImgShow] = useState(false);
  // const [previewImgShowModal, setpreviewImgShowModal] = useState(false);

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleChange = async info => {
    // console.log("response", info.file.error);
    // console.log("file", info.file);
    const file = info.file;
    if (file.error) {
      message.error("Server Error! We are Sorry :(, Please try again!");
      setfileState({
        ...fileState,
        invalidFile: true
      });
    }
    if (file.status === "removed") {
      setfileState({
        ...fileState,
        imgFile: null,
        previewImg: null,
        previewImgShow: false
      });
    } else {
      if (file.status === "uploading") {
        console.log("uploading");
      }
      if (file.status === "done") {
        setfileState({
          ...fileState,
          invalidFile: false
        });
        message.success("Image upload successfully.");
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

        console.log("Done", file.response.url);
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

  const handlePreview = () => {
    setfileState({
      ...fileState,
      previewImgShowModal: true
    });
    // setpreviewImgShowModal(true);
  };
  const handleCancel = () => {
    setfileState({
      ...fileState,
      previewImgShowModal: false
    });
    // setpreviewImgShowModal(false);
  };
  const handleRemove = file => {
    return new Promise((resolve, reject) => {
      resolve(console.log("removing from server"));
      message.success("File removed successfully!");
      setfileState({
        ...fileState,
        invalidFile: false
      });
      reject("File not removed");
    });
  };

  const handleBeforeUpload = file => {
    // console.log(file.size);
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      message.error("Can't Preview this image!");
      setfileState({
        ...fileState,
        invalidFile: true
      });
    }
    const isLt25MB = file.size / 1024 / 1024 < 25;
    if (!isLt25MB) {
      message.error("Image must smaller than 25MB!");
      setfileState({
        ...fileState,
        invalidFile: true
      });
    }

    return isJpgOrPng && isLt25MB;
  };

  return (
    <Fragment>
      <div
        className="imgPreviewContainer"
        style={{
          backgroundColor: "whitesmoke",
          border: "4px dashed gray",
          maxHeight: "auto",
          lineHeight: "350px",
          borderRadius: "2%"
        }}
      >
        <h3>
          {fileState.previewImgShow ? (
            <img
              src={fileState.previewImg}
              alt="img not supported"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "3%"
              }}
            />
          ) : (
            "Image preview will show here"
          )}
        </h3>
      </div>

      <Upload
        multiple={false}
        beforeUpload={handleBeforeUpload}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // server location for uploading (upload route)
        listType="picture"
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleRemove}
      >
        <div style={{ width: "100% !important" }}>
          {!fileState.previewImgShow ? (
            <div style={{ marginTop: "20px" }}>
              <Button type="primary">
                Upload
                <UploadOutlined />
              </Button>
            </div>
          ) : null}
        </div>
      </Upload>

      <Modal
        centered
        title="Image Preview"
        visible={fileState.previewImgShowModal}
        footer={null}
        onCancel={handleCancel}
        maskClosable={false}
        footer={
          <Button type="primary" block onClick={handleCancel}>
            Close
          </Button>
        }
      >
        <p>
          <img
            alt="Not a valid image"
            style={{ width: "100%" }}
            src={fileState.previewImg}
          />
        </p>
      </Modal>
      {fileState.invalidFile ? (
        <div className="uploadWarning" style={{ padding: "10px" }}>
          <Alert
            message="Warning"
            description="Please Delete the above file first before uploading second file."
            type="warning"
            showIcon
          />
        </div>
      ) : null}
    </Fragment>
  );
};

export default UploadImg;
