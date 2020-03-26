import React, { Fragment } from "react";
import { Modal, Button } from "antd";
const PreviewImagePostModal = props => {
  const { previewImgShowModal, previewImg, fileState, setfileState } = props;
  // handling modal on closing
  const handleCancel = () => {
    setfileState({
      ...fileState,
      previewImgShowModal: false
    });
    // setpreviewImgShowModal(false);
  };

  return (
    <Fragment>
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

export default PreviewImagePostModal;
