import React from "react";
import { NavLink } from "react-router-dom";

import { Home as HomeIcon, MenuBook as MenuIcon } from "@material-ui/icons";
import { useTheme } from "../../Theme";
import "./footer.scss";

export const Footer = ({}: any) => {
  const { state, dispatch } = useTheme();
  return (
    <div className="flex footer-layout">
      <div>regarder</div>
      {state.name}
      <NavLink className="circle" exact to="/menu" activeClassName="hidden">
        <MenuIcon className="icon" />
      </NavLink>
      <NavLink className="circle" exact to="/" activeClassName="hidden">
        <HomeIcon className="icon" />
      </NavLink>
      <div onClick={() => dispatch("light")}>le menu</div>
    </div>
  );
};

export default Footer;
