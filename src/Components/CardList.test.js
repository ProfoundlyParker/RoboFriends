import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

it("expect to snapshot CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "Johnny123",
      email: "john@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
