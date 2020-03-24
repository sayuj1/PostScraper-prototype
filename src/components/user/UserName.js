import React, { Fragment } from "react";
import { Typography } from "antd";
import SmallAvatar from "./SmallAvatar";
import Styles from "../../styles/Global/GlobalResponsiveQueries.module.css";
const { Title } = Typography;
const UserName = props => {
  const { firstname, lastname, avatar } = props;
  return (
    <Fragment>
      <Title level={2} style={{ fontWeight: "700" }}>
        {firstname} {lastname}
        {/* showing avatar on small extra small screens */}
        <span className={Styles.hideOnSmAndAbove}>
          <SmallAvatar avatar={avatar} />
        </span>
      </Title>
    </Fragment>
  );
};

export default UserName;
