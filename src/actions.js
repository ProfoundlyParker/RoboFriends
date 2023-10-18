import { apiCall } from './api/api';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants.js"

// Searchfield action
export const setSearchField = (text) => {
    return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
    }
}

// Robot API action
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    apiCall('https://dummyjson.com/users')
         .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS,
        payload: data}))
         .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, 
            payload: error}))
}