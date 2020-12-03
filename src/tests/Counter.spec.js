import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter", () => {
  let getByTestId;

  beforeEach(() => {
    ({ getByTestId } = render(<Counter />));
  });

  it("should equal 0 before any buttons are clicked", () => {
    expect(getByTestId("counter-value").textContent).toEqual(
      "Counter value: 0"
    );
  });

  it("should increase value of value when increase button is clicked", () => {
    fireEvent.click(getByTestId("button"));
    expect(getByTestId("counter-value").textContent).toEqual(
      "Counter value: 1"
    );
  });

  it("should reset the counter when the button is clicked", () => {
    fireEvent.click(getByTestId("reset-button"));
    expect(getByTestId("counter-value").textContent).toEqual(
      "Counter value: 0"
    );
  });

  it("should have the correct class depending on amount of clicks", () => {
    expect(getByTestId("button")).toHaveClass("counter-button-green");
    fireEvent.click(getByTestId("button"));
    expect(getByTestId("button")).toHaveClass("counter-button-blue");
  });

  // Alternative solution with it.each
  it.each`
    clicks | className
    ${0}   | ${"counter-button-green"}
    ${22}  | ${"counter-button-green"}
    ${7}   | ${"counter-button-blue"}
    ${5}   | ${"counter-button-blue"}
  `(
    "should have class $className if clicked $clicks amount of times",
    ({ clicks, className }) => {
      for (let i = 0; i < clicks; i++) {
        fireEvent.click(getByTestId("button"));
      }
      expect(getByTestId("button")).toHaveClass(className);
      expect(getByTestId("counter-value").textContent).toEqual(
        `Counter value: ${clicks}`
      );
    }
  );
});
