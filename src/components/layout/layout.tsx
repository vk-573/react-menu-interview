import React from "react";
import { useTheme } from "../../Theme";

import "./layout.scss";

export const Layout: React.FC = ({ children }) => {
  const { state } = useTheme();
  return (
    <div className="main-layout" style={{ backgroundColor: state.secondary, color: state.text }}>
      {children}
    </div>
  );
};

export default Layout;
