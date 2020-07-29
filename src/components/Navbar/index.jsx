import React, { useState } from 'react';
import HireMeIcon from '../../assets/HireMeIcon';
import './Navbar.scss';
import Hamburger from '../Hamburger';
import Dropdown from '../Dropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (state) => {
    setDropdown(state);
  };
  return (
    <div className="navbar-wrap">
      <div className="navbar">
        <button type="button">
          <span>Hire Me</span>
          <HireMeIcon />
        </button>
        <div className="navbar__nav-links">
          <a href="#aboutMe">About me</a>
          <a href="#skills">Skills</a>
          <a href="#works">My Works</a>
          {/* <a href="#fghg">Contact</a> */}
        </div>
        <Hamburger close={dropdown} handleDropdown={handleDropdown} />
      </div>
      <div className="dropdown-wrap">
        <Dropdown close={dropdown} />
      </div>
    </div>
  );
};

export default Navbar;
