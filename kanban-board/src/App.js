// src/App.js
import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import GroupingControls from './components/GroupingControls';
import SortingControls from './components/SortingControls';
import { fetchTickets } from './services/apiService.js';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      const ticketsData = await fetchTickets();
      setTickets(ticketsData.tickets);
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <div className="controls">
        <GroupingControls setGrouping={setGrouping} />
        <SortingControls setSorting={setSorting} />
      </div>
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;

