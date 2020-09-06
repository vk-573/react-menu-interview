import React from "react";

import { Expand } from "../../components/expand/expand";

import "./menu.scss";

export const Menu: React.FC = () => {
  return (
    <div className="flex menu-layout">
      <h2>La carte</h2>
      <div className="f-column">
        <Expand order={"primary"} title={"Boissons"}>
          <div>ohoh</div>
          <Expand order="secondary" title="titre2">
            <div>lol</div>
            <div>lol</div>
          </Expand>
        </Expand>
        <Expand order={"primary"} title={"Carte"}>
          <div>ohoh</div>
          <Expand order="secondary" title="titre2">
            <div>lol</div>
            <div>lol</div>
          </Expand>
        </Expand>
      </div>
    </div>
  );
};

export default Menu;
