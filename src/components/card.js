import React from 'react';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <h2 className='id'>{ticket.id}</h2>
      <h2 className='title'>{ticket.title}</h2>
      <p className='para'>{ticket.tag}</p>
      
    </div>
  );
};

export default Card;
