import React, { useState } from 'react';

const Filter = ({ setGrouping, setSort, onDisplayChange }) => {
  const [displayOption, setDisplayOption] = useState('group-by');

  const handleDisplayChange = (e) => {
    const selectedOption = e.target.value;
    setDisplayOption(selectedOption);
    onDisplayChange(selectedOption);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="filter">
      <label>
        Display:
        <select onChange={handleDisplayChange}>
          <option value="group-by">Group By</option>
          <option value="sort-by">Sort By</option>
        </select>
      </label>
      {displayOption === 'group-by' && (
        <label>
          Group By:
          <select onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
            
          </select>
        </label>
      )}
      {displayOption === 'sort-by' && (
        <label>
          Sort By:
          <select onChange={handleSortChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      )}
    </div>
  );
};

export default Filter;
