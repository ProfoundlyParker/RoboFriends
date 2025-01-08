import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

//First method
// it('expect to render Card component', () => {
//     expect(shallow(<Card />).length).toEqual(1)
// })

//Snapshot
it("expect to snapshot Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
