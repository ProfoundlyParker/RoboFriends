import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";
import { setSearchField, requestRobots } from '../actions.js'


const App = ({ store }) => { 
    // Set State for robots & filteredbots
    // const [robots, setRobots] = useState([])
    // const [searchField, setSearchField] = useState('')
    // const [filtered, setFilteredRobots] = useState(robots)
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();
    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    };
    const text = useSelector(state => state.searchRobots.searchField)

    const robosUsers = useSelector(state => state.getRobotsReducer.users)

    useEffect(() =>  {
        dispatch(requestRobots());
    }, [dispatch])

    // useEffect(() => {
    //     fetch('https://dummyjson.com/users')
    //          .then(response => response.json())
    //          .then(users => {setRobots(users.users)})
    // }, [])

    //Can search for robots based on first or last name, or email
    // useEffect(()=> {
    //     const filtered = robots.filter(users => {
    //         return users.firstName.toLowerCase().includes(searchField.toLowerCase()) || 
    //         users.lastName.toLowerCase().includes(searchField.toLowerCase()) ||
    //         users.email.toLowerCase().includes(searchField.toLowerCase())
    //     })
    //     setFilteredRobots(filtered)}, [robots, searchField])

//    const onSearchChange = (event) => {
//         setSearchField(event.target.value);
//     }

        useEffect(() => {
            const filteredRobots = robosUsers.filter(robots => {
                    return robots.firstName.toLowerCase().includes(text.toLowerCase()) || 
                    robots.lastName.toLowerCase().includes(text.toLowerCase()) ||
                    robots.email.toLowerCase().includes(text.toLowerCase())
            });
            setSearchResults(filteredRobots);
        }, [text,robosUsers])

        const newRobot = searchResults;

    //Returns waiting for API if API link is down and can't load bots
        // return !newRobot.length ?
        // <h1>Waiting for API...</h1> :
        return (
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                {
                    text === "" ? <CardList robots={ robosUsers }/> : <CardList robots={ newRobot }/>
                }
            </Scroll>
            </div>
        )};


export default App;
