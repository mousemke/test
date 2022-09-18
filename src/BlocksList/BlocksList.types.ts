import type { Block, Blocks, ItemsInCart } from "../App";

export interface BlocksListProps {
  blocks: Blocks;
  itemsInCart: ItemsInCart;
  setItemsInCart: (block: Block, added: boolean) => void
}
