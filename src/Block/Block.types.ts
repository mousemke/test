import type { Block } from "../App";

export interface BlockProps {
  added: boolean;
  block: Block;
  setItemsInCart: (block: Block, added: boolean) => void;
}
