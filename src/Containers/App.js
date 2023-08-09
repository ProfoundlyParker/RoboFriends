import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";


const App = () => { 
    // Set State for robots & filteredbots
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')
    const [filtered, setFilteredRobots] = useState(robots)

    useEffect(() => {
        fetch('https://dummyjson.com/users')
             .then(response => response.json())
             .then(users => {setRobots(users.users)})
    }, [])

    //Can search for robots based on first or last name, or email
    useEffect(()=> {
        const filtered = robots.filter(users => {
            return users.firstName.toLowerCase().includes(searchfield.toLowerCase()) || 
            users.lastName.toLowerCase().includes(searchfield.toLowerCase()) ||
            users.email.toLowerCase().includes(searchfield.toLowerCase())
        })
        setFilteredRobots(filtered)}, [robots, searchfield])

   const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }
    //Returns waiting for API if API link is down and can't load bots
        return !robots.length ?
        <h1>Waiting for API...</h1> :
        (
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList 
                robots={filtered}
                />
            </Scroll>
            </div>
        )};


export default App;
