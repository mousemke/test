/* eslint-disable import/order */
/* eslint-disable import/first */
import { render } from "@testing-library/react";

import App from "./App";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn()
}));

jest.mock("../Header", () =>
  jest.fn().mockImplementation(() => <div>Header</div>)
);

jest.mock("../BlocksList", () =>
  jest.fn().mockImplementation(() => <div>BlocksList</div>)
);

jest.mock("../Cart", () => jest.fn().mockImplementation(() => <div>Cart</div>));

jest.mock("../Spinner", () =>
  jest.fn().mockImplementation(() => <div>Spinner</div>)
);

jest.mock("../api", () => ({
  getBlocks: jest.fn()
}));

// normally we keep all imports on the top,
// but we need to import them after the mock
import React from "react";
import BlocksList from "../BlocksList";
import Cart from "../Cart";
import api from "../api";
/* eslint-enable */

describe("test test", () => {
  it("should render with base values", () => {
    const useStateSpy = (React.useState as jest.Mock)
      .mockReturnValueOnce([101, jest.fn()]) // remainingCredits
      .mockReturnValueOnce([[{}], jest.fn()]) // blocks
      .mockReturnValueOnce([null, jest.fn()]) // error
      .mockReturnValueOnce([{}, jest.fn()]); // itemsInCart

    const { getByText } = render(<App />);

    expect(getByText("Header")).not.toBe(null);
    expect(getByText("BlocksList")).not.toBe(null);
    expect(getByText("Cart")).not.toBe(null);

    useStateSpy.mockRestore();
  });

  it("should call getBlocks and show the spinner on load", () => {
    const useStateSpy = (React.useState as jest.Mock)
      .mockReturnValueOnce([102, jest.fn()]) // remainingCredits
      .mockReturnValueOnce([[], jest.fn()]) // blocks
      .mockReturnValueOnce([null, jest.fn()]) // error
      .mockReturnValueOnce([{}, jest.fn()]); // itemsInCart

    (api.getBlocks as jest.Mock).mockReset();

    const { getByText } = render(<App />);

    expect(api.getBlocks).toHaveBeenCalled();
    expect(getByText("Spinner")).not.toBe(null);

    (api.getBlocks as jest.Mock).mockReset();
    useStateSpy.mockRestore();
  });

  it("should display an error if there is one", () => {
    const useStateSpy = (React.useState as jest.Mock)
      .mockReturnValueOnce([103, jest.fn()]) // remainingCredits
      .mockReturnValueOnce([[], jest.fn()]) // blocks
      .mockReturnValueOnce(["what an error!", jest.fn()]) // error
      .mockReturnValueOnce([{}, jest.fn()]); // itemsInCart;

    const { getByText } = render(<App />);

    expect(getByText("Error: what an error!")).not.toBe(null);

    useStateSpy.mockRestore();
  });
});

describe("buyBlocks", () => {
  it("should subtract the appropriate credit and clear the cart", () => {
    (Cart as jest.Mock).mockReset();

    const setRemainingCreditsSpy = jest.fn();
    const setItemsInCartStateSpy = jest.fn();

    const useStateSpy = (React.useState as jest.Mock)
      .mockReturnValueOnce([104, setRemainingCreditsSpy]) // remainingCredits
      .mockReturnValueOnce([[{}], jest.fn()]) // blocks
      .mockReturnValueOnce([null, jest.fn()]) // error
      .mockReturnValueOnce([{}, setItemsInCartStateSpy]); // itemsInCart;

    render(<App />);

    const buyBlocks = (Cart as jest.Mock).mock.calls[0][0].buyBlocks;

    buyBlocks(90);

    expect(setRemainingCreditsSpy).toBeCalledWith(14);
    expect(Object.keys(setItemsInCartStateSpy.mock.calls[0][0]).length).toBe(0);

    useStateSpy.mockRestore();
  });
});

describe("setItemsInCart", () => {
  it("should add an item when appropriate", () => {
    (BlocksList as jest.Mock).mockReset();

    const setItemsInCartStateSpy = jest.fn();

    const useStateSpy = (React.useState as jest.Mock)
      .mockReturnValueOnce([104, jest.fn()]) // remainingCredits
      .mockReturnValueOnce([[{}], jest.fn()]) // blocks
      .mockReturnValueOnce([null, jest.fn()]) // error
      .mockReturnValueOnce([{}, setItemsInCartStateSpy]); // itemsInCart;

    render(<App />);

    const setItemsInCart = (BlocksList as jest.Mock).mock.calls[0][0]
      .setItemsInCart;

    const addedItem = { id: "666" };

    setItemsInCart(addedItem);

    expect(Object.keys(setItemsInCartStateSpy.mock.calls[0][0]).length).toBe(1);

    useStateSpy.mockRestore();
  });

  it("should remove an item when appropriate", () => {
    (BlocksList as jest.Mock).mockReset();

    const setItemsInCartStateSpy = jest.fn();
    const addedItem = { id: "666" };

    const useStateSpy = (React.useState as jest.Mock)
      .mockReturnValueOnce([104, jest.fn()]) // remainingCredits
      .mockReturnValueOnce([[{}], jest.fn()]) // blocks
      .mockReturnValueOnce([null, jest.fn()]) // error
      .mockReturnValueOnce([{ 666: addedItem }, setItemsInCartStateSpy]); // itemsInCart;

    render(<App />);

    const setItemsInCart = (BlocksList as jest.Mock).mock.calls[0][0]
      .setItemsInCart;

    setItemsInCart(addedItem, true);

    expect(Object.keys(setItemsInCartStateSpy.mock.calls[0][0]).length).toBe(0);

    useStateSpy.mockRestore();
  });
});
