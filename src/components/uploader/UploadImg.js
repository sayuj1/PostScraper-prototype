import React, { Fragment, useState } from "react";
import "antd/dist/antd";
import { Upload, message, notification, Modal, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { duration } from "moment";

const UploadImg = () => {
  const [previewImg, setpreviewImg] = useState(null);
  const [previewImgShow, setpreviewImgShow] = useState(false);
  const [previewImgShowModal, setpreviewImgShowModal] = useState(false);

  const openNotificationWithIcon = type => {
    notification[type]({
      message: "Failed Image Preview",
      description: "Can't Preview this image!",
      duration: 2
    });
  };

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject("error", error);
    });
  };

  const handleChange = async info => {
    // console.log(info.file);
    // console.log("triggering");
    const file = info.file;
    if (file.status === "removed") {
      setpreviewImg(null);
      setpreviewImgShow(false);
    } else {
      if (!file.url && !file.preview) {
        await getBase64(file.originFileObj)
          .then(response => (file.preview = response))
          .catch(err => openNotificationWithIcon("error"));
      }
      if (file.status === "uploading") {
        console.log(file);
      }
      if (file.status === "done") {
        message.success("Image upload successfully.");
        setpreviewImg(file.url || file.preview);
        setpreviewImgShow(true);
      }
      if (file.status === "error") {
        message.error("upload failed.");
      }
    }
  };

  const handlePreview = () => {
    setpreviewImgShowModal(true);
  };
  const handleCancel = () => {
    setpreviewImgShowModal(false);
  };
  const handleRemove = file => {
    return new Promise((resolve, reject) => {
      resolve(console.log("removing from server"));
      message.success("Image removed successfully!");
      reject("File not removed");
    });
  };

  const handleBeforeUpload = file => {
    // console.log(file.size);
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt25MB = file.size / 1024 / 1024 < 25;
    if (!isLt25MB) {
      message.error("Image must smaller than 25MB!");
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
          {previewImgShow ? (
            <img
              src={previewImg}
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
          {!previewImgShow ? (
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
        visible={previewImgShowModal}
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
            src={previewImg}
          />
        </p>
      </Modal>
    </Fragment>
  );
};

export default UploadImg;
