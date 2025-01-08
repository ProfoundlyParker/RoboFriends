import React, { ChangeEventHandler } from "react";

// Setting type for search change that happens when input field is updated
type SearchBoxProps = {
  searchChange: ChangeEventHandler<HTMLInputElement>;
  // Can also look like this:
  // searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

// Search box that updates each time the input is changed
const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div className="p-2 block box-border">
      <input
        aria-label="Search Robots"
        className="p-4 border-4 border-solid border-search-border bg-search-bg"
        type="search"
        placeholder="Search RoboFriends"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
