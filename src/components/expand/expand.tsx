import React from "react";

import { useTheme, theme } from "../../Theme";
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { ExpandMore as ExpandIcon } from "@material-ui/icons";

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

export const Expand: React.FC<{ order: string; title: string }> = ({ order, title, children }) => {
  const { state } = useTheme();
  const colors = getColorOrder(order, state);
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
      <AccordionDetails className="f-column f-start">{children}</AccordionDetails>
    </Accordion>
  );
};

export default Expand;
