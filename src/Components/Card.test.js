import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("expect to snapshot Card component", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
