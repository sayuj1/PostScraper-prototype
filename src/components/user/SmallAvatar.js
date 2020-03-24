import React, { Fragment } from "react";
import { Avatar } from "antd";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SmallAvatar = props => {
  const { avatar } = props;
  return (
    <Fragment>
      {avatar ? (
        <Avatar
          size={50}
          src={avatar}
          shape="circle"
          style={{ border: "1px solid grey", marginLeft: "20px" }}
        />
      ) : (
        <Avatar size={50} icon={<FontAwesomeIcon icon={faUser} size="lg" />} />
      )}
    </Fragment>
  );
};

export default SmallAvatar;
