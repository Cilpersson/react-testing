import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

/*
A snapshot, as the name suggests, allows us to save the snapshot of a given component. 
It helps a lot when you update or do some refactoring, and want to get or compare the changes.
*/

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
