import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";
import { setSearchField, requestRobots } from '../actions.js'
import Header from "../Components/Header";


const App = ({ store }) => { 
    // Set State for searchBox
    const [searchResults, setSearchResults] = useState([]);
    //Access state changes to search box
    const dispatch = useDispatch();
    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    };
    const text = useSelector(state => state.searchRobots.searchField)

    // Initial Robot State before searching
    const robosUsers = useSelector(state => state.getRobotsReducer.users)


    useEffect(() =>  {
        dispatch(requestRobots());
    }, [dispatch])

 
    //Can search for robots based on first or last name, or email
        useEffect(() => {
            const filteredRobots = robosUsers.filter(robots => {
                    return robots.firstName.toLowerCase().includes(text.toLowerCase()) || 
                    robots.lastName.toLowerCase().includes(text.toLowerCase()) ||
                    robots.email.toLowerCase().includes(text.toLowerCase())
            });
            setSearchResults(filteredRobots);
        }, [text,robosUsers])

        // Set CardList to display search results
        const newRobot = searchResults;

    //Returns waiting for API if API link is down and can't load bots
        return !newRobot.length ?
        <h1>Waiting for API...</h1> :
        (
            <div className="tc">
            <Header />
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                {
                    text === "" ? <CardList robots={ robosUsers }/> : <CardList robots={ newRobot }/>
                }
            </Scroll>
            </div>
        )};


export default App;
