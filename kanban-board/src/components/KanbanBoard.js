// src/components/KanbanBoard.js
import React from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';

function KanbanBoard({ tickets, grouping, sorting }) {
  const groupedTickets = groupTickets(tickets, grouping);
  const sortedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div className="kanban-board">
      {Object.entries(sortedTickets).map(([key, ticketList]) => (
        <KanbanColumn key={key} title={key} tickets={ticketList} />
      ))}
    </div>
  );
}

function groupTickets(tickets, grouping) {
  switch (grouping) {
    case 'status':
      return groupBy(tickets, 'status');
    case 'user':
      return groupBy(tickets, 'userId');
    case 'priority':
      return groupBy(tickets, 'priority');
    default:
      return tickets;
  }
}

function groupBy(tickets, key) {
  return tickets.reduce((acc, ticket) => {
    const groupKey = ticket[key];
    acc[groupKey] = acc[groupKey] ? [...acc[groupKey], ticket] : [ticket];
    return acc;
  }, {});
}

function sortTickets(groupedTickets, sorting) {
  return Object.fromEntries(
    Object.entries(groupedTickets).map(([key, tickets]) => [
      key,
      tickets.sort((a, b) => {
        if (sorting === 'priority') return b.priority - a.priority;
        if (sorting === 'title') return a.title.localeCompare(b.title);
        return 0;
      }),
    ])
  );
}

export default KanbanBoard;

