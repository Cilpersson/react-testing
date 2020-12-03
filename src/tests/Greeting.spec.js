import React from "react";
import { render } from "@testing-library/react";
import Greeting from "../components/Greeting";

describe("Greeting", () => {
  it("should render a default greeting when no prop is passed", () => {
    const { getByTestId } = render(<Greeting />);
    expect(getByTestId("greeting-text-props").textContent).toEqual(
      "Hey, you should take a web dev course!"
    );
  });
  it("should render personal greeting when prop is passed", () => {
    const prop = "technigo";
    const { getByTestId } = render(<Greeting schoolName={prop} />);
    expect(getByTestId("greeting-text-props").textContent).toEqual(
      `Hello ${prop} students!`
    );
  });
});
