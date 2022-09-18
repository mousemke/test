import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useStyles from "./Block.styles";

import type { BlockProps } from "./Block.types";

/**
 *
 */
const Block = (props: BlockProps): JSX.Element => {
  const { added, block, setItemsInCart } = props;
  const { displayName, metadata } = block;

  const classes = useStyles();

  const credits = metadata.blockPricingStrategy.credits;

  return (
    <Box className={classes.blockWrapper}>
      <Typography component="div" className={classes.displayName}>
        {displayName}
      </Typography>
      <Typography component="div" className={classes.credits}>
        {credits} credit{credits === 1 ? "" : "s"}
      </Typography>
      <Button
        className={classes.addToCartButton}
        onClick={() => setItemsInCart(block, added)}
        variant={added ? "outlined" : "contained"}
      >
        {added ? "Remove" : "Add to Cart" }
      </Button>
    </Box>
  );
};

export default Block;