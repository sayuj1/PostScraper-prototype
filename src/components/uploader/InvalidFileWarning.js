import React, { Fragment } from "react";
import { Alert } from "antd";
const InvalidFileWarning = props => {
  const { invalidFile } = props;
  return (
    <Fragment>
      {invalidFile ? (
        <div className="uploadWarning" style={{ padding: "10px" }}>
          <Alert
            message="Warning"
            description="Please Delete the above file first before uploading second file."
            type="warning"
            showIcon
          />
        </div>
      ) : null}
    </Fragment>
  );
};

export default InvalidFileWarning;
