import React from "react";
import { NavLink } from "react-router-dom";

import {
  Home as HomeIcon,
  MenuBook as MenuIcon
} from "@material-ui/icons";
import "./footer.scss";

export const Footer = ({}: any) => {
  return (
    <div className="flex footer-layout">
      <div>regarder</div>
      <NavLink className="circle" exact to="/menu" activeClassName="hidden">
        <MenuIcon className="icon" />
      </NavLink>
      <NavLink className="circle" exact to="/" activeClassName="hidden">
        <HomeIcon className="icon" />
      </NavLink>
      <div>le menu</div>
    </div>
  );
};

export default Footer;
