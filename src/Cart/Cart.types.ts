import { ItemsInCart } from "../App";

export interface CartProps {
  /**
   * A function, passed from the App level, that controls the interaction
   * between credits and the cart
   */
  buyBlocks: (total: number) => void;

  /**
   * An object containing cart items entered by id
   */
  itemsInCart: ItemsInCart;

  /**
   * Credits available for use
   */
  remainingCredits: number;
}
