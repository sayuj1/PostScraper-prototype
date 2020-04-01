import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../../context/userContext/userContext";

const GoUserProfileBtn = props => {
  const { btnText, btnIcon, btnIconAlign, btnPadding } = props;
  const { user } = useContext(UserContext);
  return (
    <div className="backButton" style={{ marginTop: "20px" }}>
      <Link to={`/user/${user.username}`}>
        {btnPadding == "10px" ? (
          <Button
            type="default"
            shape="round"
            icon={
              <FontAwesomeIcon
                icon={btnIcon == "faArrowLeft" ? faArrowLeft : faArrowRight}
                size="lg"
                pull={btnIconAlign}
              />
            }
            size="large"
            style={{ padding: "10px", lineHeight: "1.2" }}
          >
            <span style={{ paddingLeft: "10px" }}>{btnText}</span>
          </Button>
        ) : (
          <Button
            type="default"
            shape="round"
            icon={
              <FontAwesomeIcon
                icon={btnIcon == "faArrowLeft" ? faArrowLeft : faArrowRight}
                size="lg"
                pull={btnIconAlign}
              />
            }
            size="large"
            style={{ lineHeight: "1.2" }}
          >
            <span style={{ paddingLeft: "10px" }}>{btnText}</span>
          </Button>
        )}
      </Link>
    </div>
  );
};

export default GoUserProfileBtn;
