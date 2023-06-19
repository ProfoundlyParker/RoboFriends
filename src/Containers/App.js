import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";


const App = () => { 
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')
    const [filtered, setFilteredRobots] = useState(robots)

    useEffect(() => {
        fetch('https://dummyjson.com/users')
             .then(response => response.json())
             .then(users => {setRobots(users.users)})
            //  console.log("hello");
    }, [])

    useEffect(()=> {
        const filtered = robots.filter(users => {
            return users.firstName.toLowerCase().includes(searchfield.toLowerCase()) || 
            users.lastName.toLowerCase().includes(searchfield.toLowerCase())
        })
        setFilteredRobots(filtered)}, [robots, searchfield])

    // useEffect(() => {
    //     const filteredRobots = robots.filter(robot => {
    //         return robots.firstName.toLowerCase().includes(searchfield.toLowerCase());
    //     })
    // }, [filteredRobots, searchfield])

   const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

        return !robots.length ?
        <h1>Loading...</h1> :
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




    // const filteredRobots = Object.values(robots).filter(robots => { return robots.users.firstName.toLowerCase().includes(searchfield.toLowerCase()) })
        // const filteredRobots = robots.filter(robot => {
        //     return console.log(robot)
        //     // return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        // })
    //    const filteredRobots = (robots) => { for (let i = 0; i < robots.users.length; i++) {
    //         let obj = robots.users[i];
    //         console.log(obj);
    //         // return obj.firstName.toLowerCase().includes(searchfield.toLocaleLowerCase());
    //     }}
