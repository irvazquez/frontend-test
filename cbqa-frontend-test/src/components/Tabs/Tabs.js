import React, { useState, useContext } from 'react';
import { Tab } from './Tab';
import './styles.css';
import TodoContext from '../../TodoContext';
import { Filters } from '../Filters/Filters';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [filter, setFilter] = useState('all');
  const { todos } = useContext(TodoContext)
  const handleTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <>
      <Filters filter={filter} setFilter={setFilter} />
      <div className="tabs">
        <div className="tabs-nav">
          {Object.entries(todos).map(([key]) => (
            <div
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              onClick={() => handleTab(key)}
            >
              {`User ${key}`}
            </div>
          ))}
        </div>
        {Object.entries(todos).map(([key, value]) => (
          <div className={`tab-body ${key === activeTab ? 'active' : ''}`}>
            <Tab
              key={key}
              content={value}
              userId={key}
              filter={filter}
            />
          </div>
        ))}
      </div>
    </>
  )
}
