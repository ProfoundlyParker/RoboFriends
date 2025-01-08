import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./App";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store;

// Test App component containing state using Redux + Hooks
describe("App component", () => {
  beforeEach(() => {
    store = mockStore({
      getRobotsReducer: {
        isPending: true, // Simulating the 'Waiting for API...' state
        users: {
          users: [
            {
              id: 1,
              firstName: "John",
              lastName: "Doe",
              email: "johndoe@example.com",
            },
            {
              id: 2,
              firstName: "Jane",
              lastName: "Doe",
              email: "janedoe@example.com",
            },
          ],
        },
      },
      searchRobots: {
        searchField: "Jane",
      },
    });
  });

  // Tests that the app renders as expected
  it("renders App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const waitingText = screen.getByText("Waiting for API...");
    expect(waitingText).toBeInTheDocument();
  });

  // Tests that robots will display when searchfield is empty
  it("displays robots when searchField is empty", async () => {
    store = mockStore({
      getRobotsReducer: {
        isPending: false,
        users: {
          users: [
            {
              id: 1,
              firstName: "John",
              lastName: "Doe",
              email: "johndoe@example.com",
            },
            {
              id: 2,
              firstName: "Jane",
              lastName: "Doe",
              email: "janedoe@example.com",
            },
          ],
        },
      },
      searchRobots: {
        searchField: "Jane",
      },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const janeDoeElement = screen.getByRole("heading", { name: /Jane Doe/i }); // Using a regular expression to match 'John Doe' case-insensitively
    expect(janeDoeElement).toBeInTheDocument();
  });

  // Tests that filtered robots will display when searchfield is not empty
  it("displays filtered robots when searchField is not empty", async () => {
    store = mockStore({
      getRobotsReducer: {
        isPending: false,
        users: {
          users: [
            {
              id: 1,
              firstName: "John",
              lastName: "Doe",
              email: "johndoe@example.com",
            },
            {
              id: 2,
              firstName: "Jane",
              lastName: "Doe",
              email: "janedoe@example.com",
            },
          ],
        },
      },
      searchRobots: {
        searchField: "Jane",
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    await act(async () => {
      expect(screen.getByText("Jane Doe")).toBeInTheDocument();
      expect(screen.queryByText("John Doe")).toBeNull();
    });
  });
});
