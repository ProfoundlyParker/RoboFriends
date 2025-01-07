import { Reducer } from "react";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants.ts";
import { Robot } from "../src/Containers/App.tsx";

// Define types for search state
type SearchState = {
  searchField: string;
};

// Define types for the search action
type ChangeSearchFieldAction = {
  type: typeof CHANGE_SEARCH_FIELD;
  payload: string;
};

// Combine search action types
export type SearchAction = ChangeSearchFieldAction;

// Initial Search state
const initialStateSearch: SearchState = {
  searchField: "",
};

// Search robots
export const searchRobots: Reducer<SearchState, SearchAction> = (
  state = initialStateSearch,
  { type, payload },
) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: payload,
      };
    default:
      return state;
  }
};

// Define types for the robots state
type RobotsState = {
  isPending: boolean;
  users: object;
  error: Error | null;
};

// Define types for the robots actions
type RequestRobotsPendingAction = {
  type: typeof REQUEST_ROBOTS_PENDING;
};

type RequestRobotsSuccessAction = {
  type: typeof REQUEST_ROBOTS_SUCCESS;
  payload: Robot[];
};

type RequestRobotsFailedAction = {
  type: typeof REQUEST_ROBOTS_FAILED;
  payload: Error;
};

// Combine all robots actions
export type RobotsAction =
  | RequestRobotsPendingAction
  | RequestRobotsSuccessAction
  | RequestRobotsFailedAction;

// Initial robot state
const initialStateRobots: RobotsState = {
  isPending: false,
  users: [],
  error: null,
};

// Robot API actions
export const getRobotsReducer: Reducer<RobotsState, RobotsAction> = (
  state = initialStateRobots,
  action,
) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isPending: false,
      };
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
