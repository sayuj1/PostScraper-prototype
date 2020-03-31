import React, { Fragment } from "react";
import { Avatar } from "antd";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Styles from "../../../styles/Global/GlobalResponsiveQueries.module.css";

const SmallAvatar = props => {
  const { avatar } = props;
  return (
    <Fragment>
      <span className={Styles.hideOnSmAndAbove}>
        {avatar ? (
          <Avatar
            size={50}
            src={avatar}
            shape="circle"
            style={{ border: "1px solid dodgerblue", marginLeft: "20px" }}
          />
        ) : (
          <Avatar
            size={50}
            icon={<FontAwesomeIcon icon={faUser} size="lg" />}
            style={{ backgroundColor: "#87d068", marginLeft: "20px" }}
          />
        )}
      </span>
    </Fragment>
  );
};

export default SmallAvatar;
