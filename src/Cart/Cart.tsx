import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import clsx from "clsx";

import useStyles from "./Cart.styles";

import type { CartProps } from "./Cart.types";

/**
 *
 */
const Cart = (props: CartProps): JSX.Element => {
  const { buyBlocks, itemsInCart, remainingCredits } = props;

  const classes = useStyles();

  const itemsInCartArr = Object.values(itemsInCart);
  const totalCredits = itemsInCartArr.reduce<number>((total, block) => total + block.metadata.pricingStrategy.credits, 0);

  const notEnoughCredits = (remainingCredits - totalCredits) < 0;

  return (
    <Box className={classes.cartWrapper}>
      <Typography component="div" className={classes.cartHeader}>
        Cart
      </Typography>
      <div className={classes.blocksList}>
        {itemsInCartArr.map((block, i) => {
          const credits = block.metadata.pricingStrategy.credits;

          return (
            <div key={i} className={classes.block}>
              <Typography>
                {block.displayName}
              </Typography>
              <Typography className={classes.blockCredits}>
                {credits} credit{credits === 1 ? "" : "s"}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className={classes.footer}>
        <div className={classes.totalBlockCreditsWrapper}>
          <Typography component="span" color={notEnoughCredits ? "error" : undefined}>
            Total
          </Typography>
          <Typography component="span" color={notEnoughCredits ? "error" : undefined} className={classes.totalBlockCredits}>
            {totalCredits} credits
          </Typography>
        </div>
        <Button
          className={clsx(classes.buyNowButton, notEnoughCredits && classes.notEnoughCredits)}
          color={notEnoughCredits ? "error" : "primary"}
          onClick={() => buyBlocks(totalCredits)}
          variant={notEnoughCredits ? "outlined" : "contained"}
        >
          Buy Now
        </Button>
        {notEnoughCredits ? (
          <Typography
            align="center"
            color="error"
            component="div"
            variant="caption"
          >
            You do not have enough credits
          </Typography>
        ) : null}
      </div>
    </Box>
  );
};

export default Cart;
