import React, { Fragment } from "react";
import { Typography } from "antd";
import SmallAvatar from "./SmallAvatar";

const { Title } = Typography;
const UserName = props => {
  const { firstname, lastname, avatar } = props;
  return (
    <Fragment>
      <div className="profileName">
        <Title level={2} style={{ fontWeight: "700" }}>
          {firstname} {lastname}
          {/* showing avatar on small extra small screens */}
          <SmallAvatar avatar={avatar} />
        </Title>
      </div>
    </Fragment>
  );
};

export default UserName;
