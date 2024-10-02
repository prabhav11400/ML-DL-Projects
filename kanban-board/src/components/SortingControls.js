// src/components/SortingControls.js
import React from 'react';

function SortingControls({ setSorting }) {
  const handleSortingChange = (event) => {
    setSorting(event.target.value);
  };

  return (
    <div className="sorting-controls">
      <label>Sort by:</label>
      <select onChange={handleSortingChange}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortingControls;

