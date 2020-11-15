import React from 'react';
import './styles.css';

export const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <div
        className={`filter-button ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        All
      </div>
      <div
        className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </div>
      <div
        className={`filter-button ${filter === 'uncompleted' ? 'active' : ''}`}
        onClick={() => setFilter('uncompleted')}
      >
        Uncompleted
      </div>
    </div>
  )
}
