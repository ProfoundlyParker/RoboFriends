import React from "react";
import { shallow } from "enzyme";
import Scroll from "./Scroll";

//Snapshot
it("expect to snapshot Scroll component", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
