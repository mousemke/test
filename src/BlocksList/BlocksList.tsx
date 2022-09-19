import React from "react";
import SingleBlock from "../SingleBlock";

import useStyles from "./BlocksList.styles";

import type { BlocksListProps } from "./BlocksList.types";

/**
 * A list of all available blocks
 */
const BlocksList = (props: BlocksListProps): JSX.Element => {
  const { blocks, itemsInCart, setItemsInCart } = props;

  const classes = useStyles();

  return (
    <div className={classes.blocksListWrapper}>
      {blocks.map((block, i) => (
        <SingleBlock
          added={Boolean(itemsInCart[block.id])}
          key={i}
          block={block}
          setItemsInCart={setItemsInCart}
        />
      ))}
    </div>
  );
};

export default BlocksList;
