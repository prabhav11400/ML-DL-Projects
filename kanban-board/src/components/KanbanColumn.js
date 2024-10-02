// src/components/KanbanColumn.js
import React from 'react';
import TicketCard from './TicketCard';
import './KanbanColumn.css';

function KanbanColumn({ title, tickets }) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default KanbanColumn;

