import React from "react";
import { render } from "@testing-library/react";
import Greeting from "../components/Greeting";

describe("Greeting", () => {
  let getByTestId;

  // Börja med att lägga till render för varje test för att sedan visa hur man kan använda beforeEach
  beforeEach(() => {
    ({ getByTestId } = render(<Greeting />));
  });

  it("should render personal greeting when prop is passed", () => {
    const { getByTestId } = render(<Greeting schoolName="technigo" />);
    expect(getByTestId("greeting-text-props")).toHaveTextContent(
      "Hello technigo students!"
    );
  });

  it("should render pre made message without prop passed in", () => {
    const { getByTestId } = render(<Greeting schoolName />);
    expect(getByTestId("greeting-text-no-props")).toHaveTextContent(
      "Hey, you should take a web dev course!"
    );
  });
});
