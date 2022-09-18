import React from "react";
import Block from "../Block";

import useStyles from "./BlocksList.styles";

import type { BlocksListProps } from "./BlocksList.types";

/**
 *
 */
const BlocksList = (props: BlocksListProps): JSX.Element => {
  const { blocks, itemsInCart, setItemsInCart } = props;

  const classes = useStyles();

  return (
    <div className={classes.blocksListWrapper}>
      {blocks.map((block, i) => (<Block added={Boolean(itemsInCart[block.id])} key={i} block={block} setItemsInCart={setItemsInCart} />))}
    </div>
  );
};

export default BlocksList;
