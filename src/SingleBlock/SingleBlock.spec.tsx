import React from "react";
import { fireEvent, render } from "@testing-library/react";

import SingleBlock from "./SingleBlock";

import type { Block } from "../App";

describe("SingleBlock", () => {
  it("should render with the basic block info", () => {
    const exampleBlock = {
      displayName: "example 1",
      metadata: {
        blockPricingStrategy: {
          credits: 101
        }
      }
    } as unknown as Block;

    const { queryByText } = render(
      <SingleBlock
        added={false}
        block={exampleBlock}
        setItemsInCart={jest.fn()}
      />
    );

    expect(queryByText("example 1")).not.toBe(null);
    expect(queryByText("101 credits")).not.toBe(null);
    const addToCartButton = queryByText("Add to Cart");
    expect(addToCartButton).not.toBe(null);
    expect(addToCartButton?.className.includes("containedPrimary")).toBe(true);
  });

  it("should render when currently in the cart", () => {
    const exampleBlock = {
      displayName: "example 1",
      metadata: {
        blockPricingStrategy: {
          credits: 1
        }
      }
    } as unknown as Block;

    const { queryByText } = render(
      <SingleBlock
        added={true}
        block={exampleBlock}
        setItemsInCart={jest.fn()}
      />
    );

    expect(queryByText("example 1")).not.toBe(null);
    expect(queryByText("1 credit")).not.toBe(null);
    const addToCartButton = queryByText("Remove");
    expect(addToCartButton).not.toBe(null);
    expect(addToCartButton?.className.includes("outlinedPrimary")).toBe(true);
  });

  it("should fire setItemsInCart when button is clicked", () => {
    const exampleBlock = {
      displayName: "example 1",
      metadata: {
        blockPricingStrategy: {
          credits: 1
        }
      }
    } as unknown as Block;

    const setItemsInCartSpy = jest.fn();

    const { queryByText } = render(
      <SingleBlock
        added={false}
        block={exampleBlock}
        setItemsInCart={setItemsInCartSpy}
      />
    );

    const addToCartButton = queryByText("Add to Cart") as HTMLButtonElement;

    fireEvent.click(addToCartButton);

    expect(setItemsInCartSpy).toHaveBeenCalledTimes(1);
    expect(setItemsInCartSpy).toHaveBeenCalledWith(exampleBlock, false);
  });
});
