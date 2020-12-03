import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Addition from "../components/Addition";

describe("Addition", () => {
  it("should calculate the sum of of the two input values", () => {
    //Render component
    const { getByTestId } = render(<Addition />);

    // Get values with the help of data-testid and store in variables
    const inputOne = getByTestId("val-one");
    const inputTwo = getByTestId("val-two");
    const sum = getByTestId("sum");

    //Think of fireEvent as the test worlds answer to onClick, onChange, onFocus, onBlur etc.
    fireEvent.change(inputOne, { target: { value: 2 } });
    fireEvent.change(inputTwo, { target: { value: 5 } });

    //Adding + to make sure that all values are of type number
    const totalOfInputs = +inputOne.value + +inputTwo.value;
    expect(+sum.textContent).toEqual(totalOfInputs);
  });

  it.each`
    valueOne | valueTwo
    ${0}     | ${8}
    ${10}    | ${6}
    ${7}     | ${10}
  `(
    "should caluclate the sum of $valueOne and $valueTwo",
    ({ valueOne, valueTwo }) => {
      //Render component
      const { getByTestId } = render(<Addition />);

      // Get values with the help of data-testid and store in variables
      const inputOne = getByTestId("val-one");
      const inputTwo = getByTestId("val-two");
      const sum = getByTestId("sum");

      //Think of fireEvent as the test worlds answer to onClick, onChange, onFocus, onBlur etc.
      fireEvent.change(inputOne, { target: { value: valueOne } });
      fireEvent.change(inputTwo, { target: { value: valueTwo } });

      //Adding + to make sure that all values are of type number
      const totalOfInputs = +inputOne.value + +inputTwo.value;

      expect(+sum.textContent).toEqual(totalOfInputs);
    }
  );
});
