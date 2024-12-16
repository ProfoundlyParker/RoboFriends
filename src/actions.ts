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
        .then((data: any) => {
            // Map through the users and replace image URLs with RoboHash
            const updatedUsers = data.users.map((user: any) => ({
                ...user,
                // Generate RoboHash image URL based on email or any unique property
                image: `https://robohash.org/${user.email}?set=set1&size=300x300`
            }));

            // Dispatch updated users data with new image URLs
            dispatch({
                type: REQUEST_ROBOTS_SUCCESS,
                payload: { ...data, users: updatedUsers }
            });
        })
         .catch((error: Error )=> dispatch({ type: REQUEST_ROBOTS_FAILED, 
            payload: error }))
}