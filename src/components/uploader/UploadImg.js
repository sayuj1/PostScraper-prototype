import React, { Fragment, useState } from "react";
import "antd/dist/antd";
import { Upload, message, Modal, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadImg = () => {
  const [previewImg, setpreviewImg] = useState(null);
  const [previewImgShow, setpreviewImgShow] = useState(false);
  const [previewImgShowModal, setpreviewImgShowModal] = useState(false);

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleChange = async files => {
    // console.log(files.file);
    // console.log("triggering");
    const file = files.file;
    if (file.status === "removed") {
      setpreviewImg(null);
      setpreviewImgShow(false);
    } else {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      setpreviewImg(file.url || file.preview);
      setpreviewImgShow(true);
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
      reject("File not removed");
    });
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
          <img alt="example" style={{ width: "100%" }} src={previewImg} />
        </p>
      </Modal>
    </Fragment>
  );
};

export default UploadImg;
