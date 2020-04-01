import React, { Fragment } from "react";
import { Avatar } from "antd";
import Styles from "../../../styles/Global/GlobalResponsiveQueries.module.css";
import { UserOutlined } from "@ant-design/icons";
const AvatarPreview = props => {
  const { previewAvatar } = props;
  return (
    <Fragment>
      {previewAvatar ? (
        <div className="avatarPreviewContainer">
          <div className={Styles.hideOnXs}>
            <Avatar src={previewAvatar} size={100} />
          </div>
          <div className={Styles.hideOnSmAndAbove}>
            <Avatar src={previewAvatar} size={64} />
          </div>
        </div>
      ) : (
        <div className="avatarPreviewContainer">
          <div className={Styles.hideOnXs}>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
              size={100}
            />
          </div>
          <div className={Styles.hideOnSmAndAbove}>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
              size={64}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AvatarPreview;
