import React from 'react';
import PropTypes from 'prop-types';
import '../styles/tabs.css'

function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="tabs">
      <button className={activeTab === 'weather' ? 'active' : ''} onClick={() => onTabChange('weather')}>Weather</button>
      <button className={activeTab === 'about' ? 'active' : ''} onClick={() => onTabChange('about')}>About</button>
    </div>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Tabs;
