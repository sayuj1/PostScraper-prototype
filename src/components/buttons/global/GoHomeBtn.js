import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const GoHomeBtn = props => {
  const { margin, shape, border } = props;
  return (
    <div className="backButton" style={{ margin: margin }}>
      <Link to="/">
        <Button
          type="default"
          shape={shape}
          icon={<FontAwesomeIcon icon={faArrowLeft} size="lg" />}
          size="large"
          style={{ border: border }}
        />
      </Link>
    </div>
  );
};

export default GoHomeBtn;
