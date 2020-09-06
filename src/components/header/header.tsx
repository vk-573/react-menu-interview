import React from "react";

import { useTheme } from "../../Theme";
import { ColorSwitch } from "../colorSwitch/colorSwitch";
import BerthomLogo2 from "../../assets/berthom2.png";

import "./header.scss";

export const Header: React.FC = () => {
  const { state } = useTheme();

  return (
    <div className="flex header-layout" style={{ backgroundColor: state.primary }}>
      <div className="first-div"></div>
      <div className="logo">
        <img src={BerthomLogo2} className="berthom-logo" style={{ borderColor: state.primary, backgroundColor: state.text }}/>
      </div>
      <div className="switch">
        <ColorSwitch />
      </div>
    </div>
  );
};

export default Header;
