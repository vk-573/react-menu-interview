import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Home as HomeIcon, MenuBook as MenuIcon } from "@material-ui/icons";
import { useTheme } from "../../Theme";
import "./footer.scss";

export const Footer = () => {
  const { state, dispatch } = useTheme();
  const route = useLocation();

  return (
    <div className="flex footer-layout" style={{ backgroundColor: state.primary }}>
      <div>{route.pathname === "/menu" ? "Revenir" : "Découvrir"}</div>
      <NavLink className="circle" exact to="/menu" activeClassName="hidden" style={{ backgroundColor: state.primary }}>
        <MenuIcon className="icon" />
      </NavLink>
      <NavLink className="circle" exact to="/" activeClassName="hidden" style={{ backgroundColor: state.primary }}>
        <HomeIcon className="icon" />
      </NavLink>
      <div>{route.pathname === "/menu" ? "à l'accueil" : "le menu"}</div>
    </div>
  );
};

export default Footer;
