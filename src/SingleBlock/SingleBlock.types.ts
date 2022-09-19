import type { Block } from "../App";

export interface SingleBlockProps {
  /**
   * Whether this block is currently in the cart
   */
  added: boolean;

  /**
   * The block object
   */
  block: Block;

  /**
   * Adds or reomves an item from the cart
   */
  setItemsInCart: (block: Block, added: boolean) => void;
}
