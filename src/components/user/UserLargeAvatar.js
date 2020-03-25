import React, { Fragment } from "react";
import { Avatar } from "antd";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const UserLargeAvatar = props => {
  const { avatar } = props;
  return (
    <Fragment>
      {avatar ? (
        <Avatar
          size={106}
          src={avatar}
          shape="circle"
          style={{ border: "1px solid grey" }}
        />
      ) : (
        <Avatar size={106} icon={<FontAwesomeIcon icon={faUser} size="lg" />} />
      )}
    </Fragment>
  );
};

export default UserLargeAvatar;
