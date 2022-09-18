import React from "react";
import { ItemsInCart } from "../App";

export interface CartProps {
  buyBlocks: (total: number) => void;
  itemsInCart: ItemsInCart;
  remainingCredits: number;
  setRemainingCredits: React.Dispatch<React.SetStateAction<number>>;
}
