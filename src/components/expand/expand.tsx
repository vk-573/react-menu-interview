import React from "react";

import { useTheme, theme } from "../../Theme";
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { ExpandMore as ExpandIcon } from "@material-ui/icons";
import { ICategory, IPrice, IProduct } from "../../interfaces";

// mapping colors because higher in order ExpandComponent must always have white text
const getColorOrder = (order: string, state: theme) => {
  switch (order) {
    case "primary:":
      return { bg: state.primary, text: "white" };
    case "secondary":
      return { bg: state.secondary, text: state.text };
    default:
      return { bg: state.primary, text: "white" };
  }
};

export const Expand: React.FC<{ order: string; title: string; categories: Array<ICategory> }> = ({ order, title, categories, children }) => {
  const { state } = useTheme();
  const colors = getColorOrder(order, state);

  // recurive function for get every child (categories && products )
  const nestedCategories = (categories || []).map(category => {
    return <Expand order="secondary" title={category.name} categories={category.categories} >
      {category.products.map((product: IProduct) => 
        <div>
          <div>{product.label}</div>
          <div>{product.description}</div>
          {product.prices.map((price: IPrice) => 
            <div>
              <div>{price.label}</div>
              <div>{price.price}</div>
            </div>
          )}
        </div>
      )}
    </Expand>
  })

  return (
    <Accordion style={{ backgroundColor: colors.bg, color: colors.text }} className="full-w">
      <AccordionSummary
        expandIcon={<ExpandIcon style={{ color: colors.text }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="f-start"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails className="f-column f-start">
        {children}
        {nestedCategories}
      </AccordionDetails>
    </Accordion>
  );
};

export default Expand;
