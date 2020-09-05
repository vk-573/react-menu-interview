import React from "react";

import { useTheme } from "../../Theme";

export const Header = () => {
  const { state, dispatch } = useTheme();

  return (
    <div className="flex footer-layout" style={{ backgroundColor: state.primary }}>
      <div>header</div>
    </div>
  );
};

export default Header;
