import React from "react";

// Search box that updates each time the input is changed
const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
        <input 
        className="pa3 ba b--light-blue bw2 bg-lightest-blue"
        type="search" 
        placeholder="Search RoboFriends" 
        onChange={searchChange}
        />
        </div>
    )
}

export default SearchBox;