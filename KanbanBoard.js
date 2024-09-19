import React, { useState, useEffect } from 'react';
import KanbanColumn from './KanbanColumn';
import '../styles/KanbanBoard.css';


const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status'); // Default group by status

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
      })
      .catch(error => console.error('Error fetching tickets:', error));
  }, []);

  // Grouping logic based on status, user, or priority
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const key = ticket[groupBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(ticket);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {/* Display Controls */}
      <div className="kanban-controls">
        <button onClick={() => setGroupBy('status')}>Group by Status</button>
        <button onClick={() => setGroupBy('user')}>Group by User</button>
        <button onClick={() => setGroupBy('priority')}>Group by Priority</button>
      </div>

      {/* Columns */}
      <div className="kanban-columns">
        {Object.keys(groupedTickets).map((group, index) => (
          <KanbanColumn key={index} group={group} tickets={groupedTickets[group]} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
