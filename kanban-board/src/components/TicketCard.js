// src/components/TicketCard.js
import React from 'react';
import './TicketCard.css';

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
}

export default TicketCard;

