import React, { Fragment } from "react";
import { Affix } from "antd";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Fragment>
      {/* setting navbar at the top */}
      <Affix offsetTop={0}>
        <Navbar />
      </Affix>
    </Fragment>
  );
};

export default Header;
