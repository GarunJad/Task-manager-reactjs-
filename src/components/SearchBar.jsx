// components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search tasks..."
    className="search-bar"
  />
);

export default SearchBar;
