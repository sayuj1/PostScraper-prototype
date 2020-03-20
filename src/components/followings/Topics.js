import React, { Fragment, useContext } from "react";
import FollowingContext from "../../context/followingContext/followingContext";
import { Col, Row, Button, Avatar, Typography, Tag } from "antd";

const Topics = () => {
  const { tags } = useContext(FollowingContext);
  return <Fragment>All tags</Fragment>;
};

export default Topics;
