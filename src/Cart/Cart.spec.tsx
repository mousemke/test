import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Cart from "./Cart";

import type { ItemsInCart } from "../App";

describe("Cart", () => {
  it("should render correctly empty", () => {
    const { queryByText } = render(
      <Cart buyBlocks={jest.fn()} itemsInCart={{}} remainingCredits={100} />
    );

    expect(queryByText("Cart")).not.toBe(null);
    expect(queryByText("0 credits")).not.toBe(null);
    expect(queryByText("Buy Now")).not.toBe(null);
    expect(queryByText("You do not have enough credits")).toBe(null);
  });

  it("should render items in the cart correctly", () => {
    const items = {
      "666": {
        displayName: "example 1",
        metadata: {
          pricingStrategy: {
            credits: 1
          }
        }
      },
      "007": {
        displayName: "example 2",
        metadata: {
          pricingStrategy: {
            credits: 60
          }
        }
      }
    } as unknown as ItemsInCart;

    const { queryByText } = render(
      <Cart buyBlocks={jest.fn()} itemsInCart={items} remainingCredits={100} />
    );

    expect(queryByText("example 1")).not.toBe(null);
    expect(queryByText("1 credit")).not.toBe(null);
    expect(queryByText("example 2")).not.toBe(null);
    expect(queryByText("60 credits")).not.toBe(null);
    expect(queryByText("61 credits")).not.toBe(null);
  });

  it("should fire the buyNow function when the button is clicked", () => {
    const items = {
      "666": {
        displayName: "example 1",
        metadata: {
          pricingStrategy: {
            credits: 10
          }
        }
      }
    } as unknown as ItemsInCart;

    const buyBlocksSpy = jest.fn();

    const { queryByText } = render(
      <Cart
        buyBlocks={buyBlocksSpy}
        itemsInCart={items}
        remainingCredits={100}
      />
    );

    const buyNowButton = queryByText("Buy Now") as HTMLButtonElement;

    fireEvent.click(buyNowButton);

    expect(buyBlocksSpy).toHaveBeenCalledTimes(1);
    expect(buyBlocksSpy).toHaveBeenCalledWith(10);
  });

  it("should show errors and disble the button when there are not enough credits", () => {
    const items = {
      "666": {
        displayName: "example 1",
        metadata: {
          pricingStrategy: {
            credits: 100
          }
        }
      },
      "007": {
        displayName: "example 2",
        metadata: {
          pricingStrategy: {
            credits: 1
          }
        }
      }
    } as unknown as ItemsInCart;

    const buyBlocksSpy = jest.fn();

    const { queryByText } = render(
      <Cart
        buyBlocks={buyBlocksSpy}
        itemsInCart={items}
        remainingCredits={99}
      />
    );

    expect(
      queryByText("Total")?.className.includes("css-1nkhxq8-MuiTypography-root")
    ).toBe(true);
    expect(
      queryByText("101 credits")?.className.includes(
        "css-1nkhxq8-MuiTypography-root"
      )
    ).toBe(true);
    expect(queryByText("You do not have enough credits")).not.toBe(null);

    const buyNowButton = queryByText("Buy Now") as HTMLButtonElement;

    expect(buyNowButton?.className.includes("outlinedError")).toBe(true);
    expect(buyNowButton?.className.includes("notEnoughCredits")).toBe(true);
  });
});
