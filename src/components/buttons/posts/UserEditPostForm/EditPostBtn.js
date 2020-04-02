import React, { Fragment } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

const EditPostBtn = props => {
  const { setreadOnly } = props;
  const handleClick = () => {
    setreadOnly(false);
  };
  return (
    <Fragment>
      <Button
        type="primary"
        size="large"
        block
        style={{
          marginTop: "20px",
          fontWeight: "bolder",
          fontSize: "1.5rem",
          lineHeight: "1"
        }}
        onClick={handleClick}
      >
        Edit Post <EditOutlined />
      </Button>
    </Fragment>
  );
};

export default EditPostBtn;
