import { render } from "@testing-library/react";
import Header from "./Header";

it("expect to snapshot Header component", () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
