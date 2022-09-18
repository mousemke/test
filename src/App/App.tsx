import React, { useCallback, useEffect, useState } from "react";
import api from "../api";
import BlocksList from "../BlocksList";
import Cart from "../Cart";
import Header from "../Header";

import useStyles from "./App.styles";

import type { Block, Blocks, ItemsInCart } from "./App.types";

/**
 *
 */
const STARTING_CREDITS = 10000;

/**
 * An app placeholder to make sure our setup works
 *
 * @returns our example
 */
const App = (): JSX.Element => {
  // initiates global styles
  const classes = useStyles();

  const [remainingCredits, setRemainingCredits] =
    useState<number>(STARTING_CREDITS);
  const [blocks, setBlocks] = useState<Blocks>([]);
  const [error, setError] = useState<string | null>(null);
  const [itemsInCart, setItemsInCartState] = useState<ItemsInCart>({});

  /**
   *
   * @param block
   */
  const setItemsInCart = (block: Block, added: boolean) => {
    if (!added) {
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
   *
   */
  const buyBlocks = useCallback(
    (totalCredits: number) => {
      setRemainingCredits(remainingCredits - totalCredits);
      setItemsInCartState({});
    },
    [itemsInCart, remainingCredits, setItemsInCartState]
  );

  if (error) {
    return <div>{error}</div>;
  }

  if (blocks.length === 0) {
    return <div>loading!</div>;
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
          setRemainingCredits={setRemainingCredits}
        />
      </div>
    </div>
  );
};

export default App;
