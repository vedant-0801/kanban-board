import React from 'react';
import '../styles/KanbanCard.css';


const KanbanCard = ({ ticket }) => {
  return (
    <div className="kanban-card">
      <h3 className="card-title">{ticket.title}</h3>
      <p className="card-description">{ticket.description}</p>
      <p className="card-meta">
        <span>User: {ticket.user}</span>
        <span>Priority: {ticket.priority}</span>
      </p>
    </div>
  );
};

export default KanbanCard;
