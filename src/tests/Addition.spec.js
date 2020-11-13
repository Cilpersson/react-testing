import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Addition from "../components/Addition";

describe("Addition", () => {
  let getByTestId;
  beforeEach(() => {
    ({ getByTestId } = render(<Addition />));
  });

  it("should calculate the sum of of the values", () => {
    const inputOne = getByTestId("valone");
    const inputTwo = getByTestId("valtwo");
    const sum = getByTestId("sum");

    fireEvent.change(inputOne, { target: { value: 5 } });
    fireEvent.change(inputTwo, { target: { value: 15 } });

    const totalOfInputs = +inputOne.value + +inputTwo.value;
    expect(sum).toHaveTextContent(totalOfInputs);
  });
});
