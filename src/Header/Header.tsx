import React from "react";
// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useStyles from "./Header.styles";

import type { HeaderProps } from "./Header.types";

/**
 *
 */
const Header = (props: HeaderProps): JSX.Element => {
  const { remainingCredits } = props;

  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography component="span">Credits:{" "}</Typography>
      <Typography component="span" className={classes.creditsRemaining}>
        {remainingCredits}
      </Typography>
    </Box>
  );
};

export default Header;
