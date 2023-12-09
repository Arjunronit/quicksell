import React from 'react';
import Card from './card';

const Board = ({ tickets, grouping, sort }) => {
  const groupTickets = () => {
    const groupedTickets = {};

    tickets.forEach((ticket) => {
      let groupKey;
      if (grouping === 'user') {
        groupKey = ticket.userId;
      } else if (grouping === 'priority') {
        groupKey = getPriorityLabel(ticket.priority);
      } else {
        groupKey = ticket[grouping];
      }

      if (!groupedTickets[groupKey]) {
        groupedTickets[groupKey] = [];
      }
      groupedTickets[groupKey].push(ticket);
    });

    return groupedTickets;
  };

  const sortTickets = (groupedTickets) => {
    for (const key in groupedTickets) {
      if (sort === 'priority') {
        groupedTickets[key].sort((a, b) => {
          const priorityOrder = { 4: 0, 3: 1, 2: 2, 1: 3, 0: 4 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
      } else if (sort === 'title') {
        groupedTickets[key].sort((a, b) => a.title.localeCompare(b.title));
      }
      // Add more sorting options if needed
    }

    return groupedTickets;
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 4:
        return 'Urgent';
      case 3:
        return 'High';
      case 2:
        return 'Medium';
      case 1:
        return 'Low';
      case 0:
        return 'No priority';
      default:
        return '';
    }
  };

  const groupedTickets = groupTickets();
  const sortedTickets = sortTickets(groupedTickets);

  return (
    <div className="board">
      {Object.keys(sortedTickets).map((groupKey) => (
        <div key={groupKey}>
          <div className="grouptitle">
            <span className="material-symbols-outlined">radio_button_unchecked</span>
            <p>{groupKey}</p>
            {grouping === 'priority' && <span className="material-symbols-outlined">{getPriorityLabel(groupKey)}</span>}
          </div>
          {sortedTickets[groupKey].map((ticket) => (
            <Card key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
