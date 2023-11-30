import { apiCall } from './api/api.js';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants.ts";

// Define types for SearchField action
type SetSearchFieldAction = {
    type: typeof CHANGE_SEARCH_FIELD;
    payload: string;
}


// Searchfield action
export const setSearchField = (text: string): SetSearchFieldAction => {
    return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
    }
}

// Robot API action
export const requestRobots = () => (dispatch: any) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    return apiCall('https://dummyjson.com/users')
         .then((data: object) => dispatch({ type: REQUEST_ROBOTS_SUCCESS,
        payload: data}))
         .catch((error: Error )=> dispatch({ type: REQUEST_ROBOTS_FAILED, 
            payload: error }))
}