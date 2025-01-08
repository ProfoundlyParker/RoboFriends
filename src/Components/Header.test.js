import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

//Snapshot
it("expect to snapshot Header component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
