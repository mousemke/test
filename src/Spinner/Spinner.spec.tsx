import React from "react";
import { render } from "@testing-library/react";

import Spinner from "./Spinner";

describe("Spinner", () => {
  it("should render with the correct base class and children", () => {
    const { container } = render(<Spinner />);

    const spinnerWrapper = container.firstElementChild as HTMLDivElement;

    expect(spinnerWrapper.className.includes("Spinner-spinner")).toBe(true);
    expect(spinnerWrapper.children[0].children.length).toBe(2);
  });
});
