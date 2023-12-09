import React, { useState, useEffect } from 'react';
import Board from './components/board';
import Filter from './components/filter';
import './styles.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sort, setSort] = useState('priority');

  const onDisplayChange = (displayOption) => {
    if (displayOption === 'group-by') {
      setGrouping('status');
    } else {
      setSort('priority');
    }
  };

  useEffect(() => {
    // Fetch initial data
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets));
  }, []);

  return (
    <>
      <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <div className="nav-area">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </div>
      </header>

      <div className="app">
        <Filter setGrouping={setGrouping} setSort={setSort} onDisplayChange={onDisplayChange} />
        <Board tickets={tickets} grouping={grouping} sort={sort} />
      </div>
    </>
  );
};

export default App;
