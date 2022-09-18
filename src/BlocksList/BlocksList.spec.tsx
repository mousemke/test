import React from "react";
import { render } from "@testing-library/react";

import BlocksList from "./BlocksList";

import type { Block, Blocks } from "../App";

jest.mock("../Block", () =>
  jest.fn().mockImplementation(() => <div>Block</div>)
);

describe("BlocksList", () => {
  it("should show all blocks", () => {
    const block = {} as Block;
    const blocks: Blocks = [block, block, block];

    const { queryAllByText } = render(
      <BlocksList blocks={blocks} itemsInCart={{}} setItemsInCart={jest.fn()} />
    );

    expect(queryAllByText("Block").length).toBe(3);
  });
});
