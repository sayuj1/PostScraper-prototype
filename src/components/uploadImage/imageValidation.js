import { message } from "antd";

// supported img --> jpeg, png
export const validateImageType = (file, setfileState, fileState) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
    message.error("Can't Preview this image!");
    setfileState({
      ...fileState,
      invalidFile: true
    });
  }
  return isJpgOrPng;
};

// image size can't be greater than 25MB
export const validateImageSize = (file, setfileState, fileState) => {
  const isLt25MB = file.size / 1024 / 1024 < 25;
  if (!isLt25MB) {
    message.error("Image must smaller than 25MB!");
    setfileState({
      ...fileState,
      invalidFile: true
    });
  }

  return isLt25MB;
};
