import { render } from "@testing-library/react";
import Scroll from "./Scroll";

//Snapshot
it("expect to snapshot Scroll component", () => {
  const { asFragment } = render(<Scroll />);
  expect(asFragment()).toMatchSnapshot();
});