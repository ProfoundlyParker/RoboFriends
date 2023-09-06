import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants.js"

const initialStateSearch = {
    searchField: ''
}

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

const initialStateRobots = {
    isPending: false,
    users: [],
    error: null
}

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