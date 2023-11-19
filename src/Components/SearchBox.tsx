import React, { ChangeEventHandler } from "react";

// Setting type for search change that happens when input field is updated
type SearchBoxProps = {
    searchChange: ChangeEventHandler<HTMLInputElement>;
    // Can also look like this:
    // searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// Search box that updates each time the input is changed
const SearchBox = ({ searchChange }: SearchBoxProps) => {
    return (
        <div className="pa2">
        <input 
        aria-label="Search Robots"
        className="pa3 ba b--light-blue bw2 bg-lightest-blue"
        type="search" 
        placeholder="Search RoboFriends" 
        onChange={searchChange}
        />
        </div>
    )
}

export default SearchBox;