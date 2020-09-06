import React, { FunctionComponent } from "react";

import { ArrowDownward } from "@material-ui/icons";

export const Home: FunctionComponent = ({}: any) => {
  return (
    <div>
      <h2>Les Berthom</h2>
      <div>
        <p>Consultez la carte digitale de votre établissement</p>
        <p>N'hésitez pas à contacter un membre de l'établissement si vous avez la moindre question</p>
        <p>C'est parti !</p>
      </div>
      <ArrowDownward fontSize="large" />
    </div>
  );
};

export default Home;
