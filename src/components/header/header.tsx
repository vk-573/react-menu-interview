import React from "react";

import { useTheme } from "../../Theme";
import { ColorSwitch } from "../colorSwitch/colorSwitch";
import "./header.scss";

export const Header: React.FC = () => {
  const { state } = useTheme();

  return (
    <div className="flex header-layout" style={{ backgroundColor: state.primary }}>
      <div></div>
      <div>header</div>
      <div className="switch">
        <ColorSwitch />
      </div>
    </div>
  );
};

export default Header;
