import React, { Fragment, useState, useContext, useEffect } from "react";
import "antd/dist/antd";
import { Upload, message, Button, Col, Alert } from "antd";
import UserContext from "../../../context/userContext/userContext";
import AvatarPreview from "./AvatarPreview";
import { DeleteFilled } from "@ant-design/icons";
// image validation rules
import { validateImageType, validateImageSize } from "../imageValidation";
import InvalidFileWarning from "../InvalidFileWarning";
const UploadAvatar = () => {
  const { user, saveAvatar, removeAvatar } = useContext(UserContext);
  const [avatarState, setavatarState] = useState({
    previewAvatar: user.avatar, // current avatar, on uploading successfully change the user avatar in user-state so that the previewAvatar will automatically gets updated
    invalidFile: false, // if avatar is not valid
    fileList: []
  });

  useEffect(() => {
    setavatarState({
      ...avatarState,
      previewAvatar: user.avatar
    });
  }, [user.avatar]);

  //checking image file if its valid or not before uploading to the server, if it return false then image will not be uploaded to the server
  const handleBeforeUpload = file => {
    // supported img --> jpeg, png
    const isJpgOrPng = validateImageType(file, setavatarState, avatarState);

    // image size can't be greater than 25MB
    const isLt25MB = validateImageSize(file, setavatarState, avatarState);
    // checking both conditions are true or not
    return isJpgOrPng && isLt25MB;
  };

  // for handling changes on the image upload
  const handleChange = async info => {
    // console.log("response", info.file.error);
    console.log("file", info.file);
    const file = info.file;

    // handling server errors
    if (file.error) {
      message.error("Server Error! We are Sorry :( Please try again!");
      setavatarState({
        ...avatarState,
        invalidFile: true
      });
    }
    // checking file status (if user deleting the file)
    if (file.status === "removed") {
      // updating state value on image removal
      setavatarState({
        ...avatarState,
        invalidFile: false,
        fileList: []
      });
    } else {
      if (file.status === "done") {
        setavatarState({
          ...avatarState,
          invalidFile: false,
          fileList: [file]
        });
        message.success("Avatar uploaded successfully.");

        // console.log("Done", file.response.url);
        saveAvatar(file.response.url);
      }
      if (file.status === "error") {
        message.error("upload failed.");
        setavatarState({
          ...avatarState,
          invalidFile: true
        });
      }
    }
  };

  const handleRemove = file => {
    // store the uploaded image path & then pass that path here to remove the image from the server
    return new Promise((resolve, reject) => {
      // logic for removing file from the server goes here
      message.success("File removed successfully!");
      // if file remove from the server then update the user state
      // removeAvatar();

      resolve([console.log("removing from server"), removeAvatar()]);

      reject("File not removed");
    });
  };

  return (
    <Fragment>
      <Col
        xs={{ span: 6 }}
        sm={{ span: 6 }}
        md={{ span: 3, offset: 2 }}
        lg={{ span: 3, offset: 2 }}
      >
        <AvatarPreview previewAvatar={avatarState.previewAvatar} />
      </Col>
      {/* for avatar upload */}
      <Col
        xs={{ span: 12, offset: 1 }}
        sm={{ span: 12 }}
        md={{ span: 10 }}
        lg={{ span: 10 }}
        style={{ lineHeight: "7" }}
      >
        <Upload
          multiple={false}
          beforeUpload={handleBeforeUpload}
          listType="picture"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // server location for uploading (upload route)
          showUploadList={{
            showRemoveIcon: true,
            removeIcon: <DeleteFilled style={{ color: "red" }} />
          }}
          onChange={handleChange}
          onPreview={() => {
            return null;
          }}
          onRemove={handleRemove}
        >
          {avatarState.invalidFile || avatarState.fileList.length > 0 ? null : (
            <Button type="primary">Change</Button>
          )}
        </Upload>

        {/* warning for invalid files */}
        <InvalidFileWarning invalidFile={avatarState.invalidFile} />
      </Col>
    </Fragment>
  );
};

export default UploadAvatar;
