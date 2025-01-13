import { render } from "@testing-library/react";
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
  const { asFragment } = render(<CardList robots={mockRobots} />);
  expect(asFragment()).toMatchSnapshot();
});
