import React from 'react';
import './Sidebar.css';
import medic from '../assets/medic.png'
import patient from '../assets/patient.png'
import option from '../assets/option.png'

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <img src={option} alt='Logo' className='option'/>
        </li>
        <li className="nav-item">
          <img src={patient} alt='Logo' className='patient' />
        </li>
        <li className="nav-item">
          <img src={medic} alt='Logo' className='medic' />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
