import React from "react";

import { useTheme } from "../../Theme";
import { Switch } from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  switchBase: {
    color: "white",
    "&$checked": {
      color: "white",
    },
    "&$checked + $track": {
      backgroundColor: "#454545",
    },
  },
  checked: {},
  track: {},
});

export const ColorSwitch = withStyles(styles)(({ classes }: any) => {
  // triggers theme update
  const { dispatch } = useTheme();

  const switchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const light = e.target.checked;
    if (light) {
      dispatch("light");
    } else {
      dispatch("dark");
    }
  };

  return <Switch classes={classes} onChange={switchChanged} />;
});
