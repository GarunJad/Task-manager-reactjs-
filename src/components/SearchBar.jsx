import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar flex justify-center mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search tasks..."
        className="p-4 w-full max-w-3xl rounded-lg border-2 border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
      
      />
    </div>
  );
};

export default SearchBar;