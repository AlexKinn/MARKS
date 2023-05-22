import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic or redirect to search results page
    console.log("Search query:", searchQuery);
    setSearchQuery("");
  };

  return (
    <div>
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search products or categories"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
    </div>
  );
};

export default SearchBar;