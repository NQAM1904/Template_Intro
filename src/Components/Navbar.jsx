import React, { useState } from 'react'
import logo from '../images/logo.png'
import { HashLink } from 'react-router-hash-link';
function Navbar() {

  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li><HashLink smooth to="#" className="active">Home</HashLink></li>
        <li><HashLink smooth to="#features">Feature</HashLink></li>
        <li><HashLink smooth to="#about">About</HashLink></li>
        <li><HashLink smooth to="#presentaion">UI SS</HashLink></li>
        <li><HashLink smooth to="#download">Download</HashLink></li>
        <li><HashLink smooth to="#contact">Contact</HashLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;