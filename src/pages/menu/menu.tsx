import React from "react";

import { Expand } from "../../components/expand/expand";
import "./menu.scss";

import { content } from "../../content";

export const Menu: React.FC = () => {
  console.log("content:", content);
  return (
    <div className="flex menu-layout">
      <h2>La carte</h2>
      <div className="f-column">
        {/* la carte */}
        <Expand order={"primary"} title={content[0].name} categories={content[0].categories} />

        {/* boissons */}
        <Expand order={"primary"} title={content[1].name} categories={content[1].categories} />
      </div>
    </div>
  );
};

export default Menu;
