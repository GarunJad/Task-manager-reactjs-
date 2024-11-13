// TaskSearch.js
import React, { useState } from 'react';

function TaskSearch({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search tasks"
    />
  );
}

export default TaskSearch;
