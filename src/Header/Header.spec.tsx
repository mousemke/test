import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("should display the remaining credits", () => {
    const { queryByText } = render(<Header remainingCredits={20} />);

    expect(queryByText("Credits:")).not.toBe(null);
    expect(queryByText("20")).not.toBe(null);
  });
});
