import React from 'react';
import './Header.css';
import profile_pic from '../assets/profile.jpg'
import logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt='Logo' />
        <span>Hello Ortho</span>
      </div>
      <div className="user-avatar">
        <img src={profile_pic} alt='Profile Pic' />
      </div>
    </header>
  );
};

export default Header;
