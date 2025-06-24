import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">مسيرة من العز</div>
      <input type="checkbox" id="toggle" className="menu-toggle" />
      <label htmlFor="toggle" className="menu-icon">☰</label>

      <ul className="nav-links"> 
        <li><a href="#">الرئيسية</a></li>
        <li><a href="#kings">الحكام</a></li>
        <li><a href="#achievements">الإنجازات</a></li>
        <li><a href="#gallery">الصور</a></li>
        <li><a href="#about">عن الموقع</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
