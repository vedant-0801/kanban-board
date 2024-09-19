import React from 'react';
import KanbanCard from './KanbanCard';
import '../styles/KanbanColumn.css';


const KanbanColumn = ({ group, tickets }) => {
  return (
    <div className="kanban-column">
      <div className="column-header">
        {group}
      </div>
      <div className="column-body">
        {tickets.map(ticket => (
          <KanbanCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
