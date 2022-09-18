import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useStyles from "./Header.styles";

import type { HeaderProps } from "./Header.types";

/**
 * The top bar of the page. Shows the remaining credits
 */
const Header = (props: HeaderProps): JSX.Element => {
  const { remainingCredits } = props;

  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography component="span">Credits:</Typography>
      <Typography component="span" className={classes.creditsRemaining}>
        {remainingCredits}
      </Typography>
    </Box>
  );
};

export default Header;
