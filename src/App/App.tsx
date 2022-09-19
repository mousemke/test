import React, { useCallback, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import api from "../api";
import BlocksList from "../BlocksList";
import Cart from "../Cart";
import Header from "../Header";
import Spinner from "../Spinner";

import useStyles from "./App.styles";

import type { Block, Blocks, ItemsInCart } from "./App.types";

/**
 *
 */
const STARTING_CREDITS = 10000;

/**
 * The main control app of our page. This is also where most of our state lives
 *
 * @returns our example
 */
const App = (): JSX.Element => {
  const [remainingCredits, setRemainingCredits] =
    useState<number>(STARTING_CREDITS);
  const [blocks, setBlocks] = useState<Blocks>([]);
  const [error, setError] = useState<string | null>(null);
  const [itemsInCart, setItemsInCartState] = useState<ItemsInCart>({});

  const classes = useStyles();

  /**
   * Adds or removes an item in the cart, then sets the new array to the
   * itemsInCart state
   *
   * @param block item to add or remove
   * @param added whether to add the item
   */
  const setItemsInCart = (block: Block, alreadyAdded: boolean) => {
    if (!alreadyAdded) {
      setItemsInCartState({ ...itemsInCart, [block.id]: block });
    } else {
      const newItemsInCart = { ...itemsInCart };
      delete newItemsInCart[block.id];

      setItemsInCartState(newItemsInCart);
    }
  };

  useEffect(() => {
    api.getBlocks(setBlocks, setError);
  }, []);

  /**
   * Actually fires the mechanism to buy the blocks while clearing the cart and
   * deducting the credits
   */
  const buyBlocks = useCallback(
    (totalCredits: number) => {
      setRemainingCredits(remainingCredits - totalCredits);
      setItemsInCartState({});
    },
    [remainingCredits, setItemsInCartState, setRemainingCredits]
  );

  if (error) {
    return (
      <Typography variant="h6" component="div" color="error">
        Error: {error}
      </Typography>
    );
  }

  if (blocks.length === 0) {
    return <Spinner />;
  }

  return (
    <div>
      <Header remainingCredits={remainingCredits} />
      <div className={classes.appWrapper}>
        <BlocksList
          blocks={blocks}
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
        />
        <Cart
          buyBlocks={buyBlocks}
          itemsInCart={itemsInCart}
          remainingCredits={remainingCredits}
        />
      </div>
    </div>
  );
};

export default App;
