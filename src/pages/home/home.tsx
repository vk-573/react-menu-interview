import React from "react";

import { ArrowDownward } from "@material-ui/icons";

export const Home: React.FC = () => {
  return (
    <div>
      <h2>Les Berthom</h2>
      <div>
        <p>Consultez la carte digitale de votre établissement</p>
        <p>N&apos;hésitez pas à contacter un membre de l&apos;établissement si vous avez la moindre question</p>
        <p>C&apos;est parti !</p>
      </div>
      <ArrowDownward fontSize="large" />
    </div>
  );
};

export default Home;
