import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";
import { setSearchField, requestRobots } from '../actions.js'
import Header from "../Components/Header";



const App = ({ store }) => { 
    // Set state for searchBox
    const [searchResults, setSearchResults] = useState([]);

    // Sets state for robots and isPending
    const getRobotsReducer = useSelector(state => state.getRobotsReducer);
    const { isPending, users: robosUsers } = getRobotsReducer;
    //Access state changes to search box
    const dispatch = useDispatch();
    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    };
    // Sets state for text
    const text = useSelector(state => state.searchRobots.searchField)

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
