import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CardList from "../Components/CardList.tsx";
import SearchBox from "../Components/SearchBox.tsx";
import Scroll from "../Components/Scroll.tsx";
import "./App.css";
import { setSearchField, requestRobots } from '../actions.ts'
import Header from "../Components/Header.tsx";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction, Store } from "redux";

// Define RootState
type RootState = {
    getRobotsReducer: {
        isPending: boolean;
        users: {
            users: Robot[]; // Define the Robot type as per your application
        };
    };
    searchRobots: {
        searchField: string;
    }
}

// Define Robot type
export type Robot = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
}

// App props from Redux
type AppProps = {
    store: Store;
}

const App: React.FC<AppProps> = ({ store }) => { 
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
    // Set state for searchBox
    const [searchResults, setSearchResults] = useState<Robot[]>([]);

    // Sets state for robots and isPending
    const getRobotsReducer = useSelector((state: RootState) => state.getRobotsReducer);
    const { isPending, users: robosUsers } = getRobotsReducer;
    //Access state changes to search box
    // const dispatch = useDispatch();
    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchField(event.target.value))
    };
    // Sets state for text
    const text = useSelector((state: RootState) => state.searchRobots.searchField)

    // Select robots from state
    useEffect(() =>  {
        dispatch(requestRobots());
    }, [dispatch])

 
    //Can search for robots based on first or last name, or email
        useEffect(() => {
            const users = robosUsers.users;
            if (Array.isArray(users)) {
                const filteredRobots = users.filter((robots) => {
                    return (
                        robots.firstName.toLowerCase().includes(text.toLowerCase()) ||
                        robots.lastName.toLowerCase().includes(text.toLowerCase()) ||
                        robots.email.toLowerCase().includes(text.toLowerCase())
                    );
                });
                setSearchResults(filteredRobots);
            }
        }, [text, robosUsers]);


    //Returns waiting for API if API link is down and can't load bots
        return isPending ? (
        <h1>Waiting for API...</h1> 
        ) : (
            <div className="tc">
            <Header />
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                {/* Displays robots array when searchfield is empty, updates cards with search
                results to display requested robots */}
                <CardList robots={text === "" ? robosUsers.users : searchResults} />
            </Scroll>
            </div>
        )
    };


export default App;
