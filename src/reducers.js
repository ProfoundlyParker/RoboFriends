import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants.js"

// Initial Search state
const initialStateSearch = {
    searchField: ''
}

// Search robots
export const searchRobots = (state=initialStateSearch, { type, payload }) => {
    switch(type) {
        case CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: payload
            }
            default:
                return state;
    }
}

// Initial robot state
const initialStateRobots = {
    isPending: false,
    users: [],
    error: null
}

// Robot API actions
export const getRobotsReducer = (state=initialStateRobots, action) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                users: action.payload.users
            }
        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.error
            }
        default:
            return state;
    }
}