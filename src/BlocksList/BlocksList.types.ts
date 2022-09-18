import type { Block, Blocks, ItemsInCart } from "../App";

export interface BlocksListProps {
  /**
   * All available blocks
   */
  blocks: Blocks;

  /**
   * All items added to the cart
   */
  itemsInCart: ItemsInCart;

  /**
   * A callback that sets the cart items
   */
  setItemsInCart: (block: Block, added: boolean) => void;
}
