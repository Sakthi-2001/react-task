import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <b className="icon">☰</b>
        </li>
        <li className="nav-item">
            <b className="icon">👤</b>
        </li>
        <li className="nav-item">
          <b className="icon">⛨</b>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
