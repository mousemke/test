import React from "react";

import useStyles from "./Spinner.styles";

/**
 * A simple spinner to show we're waiting
 */
const Spinner = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.spinnerWrapper}>
      <div className={classes.spinner}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
