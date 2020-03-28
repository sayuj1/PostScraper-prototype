import React, { Fragment } from "react";
import { Col, Avatar } from "antd";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// styles
import Styles from "../../../styles/Global/GlobalResponsiveQueries.module.css";
const UserLargeAvatar = props => {
  const { avatar } = props;
  return (
    <Fragment>
      <span className={Styles.hideOnXs}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 10, offset: 2 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
        >
          {avatar ? (
            <Avatar
              size={106}
              src={avatar}
              shape="circle"
              style={{ border: "1px solid grey" }}
            />
          ) : (
            <Avatar
              size={106}
              icon={<FontAwesomeIcon icon={faUser} size="lg" />}
            />
          )}
        </Col>
      </span>
    </Fragment>
  );
};

export default UserLargeAvatar;
