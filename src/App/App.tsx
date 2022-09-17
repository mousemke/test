import React, { useEffect, useState } from "react";
import { getBlocks } from "../api";
import BlocksList from "../BlocksList";

import type { Blocks } from "./App.types";

/**
 * An app placeholder to make sure our setup works
 *
 * @returns our example
 */
const App = (): JSX.Element => {
  const [blocks, setBlocks] = useState<Blocks>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBlocks(setBlocks, setError);
  }, []);

  if (error) {
    return <div>{error}</div>
  }

  if (blocks.length === 0) {
    return <div>hi!</div>;
  }

  return <BlocksList blocks={blocks} />;
};

export default App;
