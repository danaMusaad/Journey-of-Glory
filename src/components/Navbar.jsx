import React from 'react';
import './Navbar.css';

function Navbar() {

  // دالة تغلق المينو تلقائي لما تضغط على أي رابط
  const closeMenu = () => {
    const toggle = document.getElementById('toggle');
    if (toggle) {
      toggle.checked = false;  // تفك التحديد وتغلق القائمة
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">مسيرة من العز</div>
      <input type="checkbox" id="toggle" className="menu-toggle" />
      <label htmlFor="toggle" className="menu-icon">☰</label>

      <ul className="nav-links">
        <li><a href="#" onClick={closeMenu}>الرئيسية</a></li>
        <li><a href="#kings" onClick={closeMenu}>الحكام</a></li>
        <li><a href="#achievements" onClick={closeMenu}>الإنجازات</a></li>
        <li><a href="#gallery" onClick={closeMenu}>الصور</a></li>
        <li><a href="#about" onClick={closeMenu}>عن الموقع</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
