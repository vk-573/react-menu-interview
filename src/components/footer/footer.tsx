import React from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Footer = ({}: any) => {
  return (
    <div>
      <p>footer</p>
      <NavLink exact to="/menu" activeClassName="hidden">go to menu</NavLink>
      <NavLink exact to="/" activeClassName="hidden">go to home</NavLink>
    </div>
  );
};

export default Footer;
