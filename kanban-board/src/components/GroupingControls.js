// src/components/GroupingControls.js
import React from 'react';

function GroupingControls({ setGrouping }) {
  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  return (
    <div className="grouping-controls">
      <label>Group by:</label>
      <select onChange={handleGroupingChange}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default GroupingControls;

