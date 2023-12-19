import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assests/Images/logo.svg";
import "./index.css";

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const isDropdownOpen = (index) => activeDropdown === index;

  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" className="logo" />
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <div className="dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen(0) ? "open" : ""}`}
          onClick={() => toggleDropdown(0)}
        >
          <span>Pages</span>
          <div className="dropdown-icon">{isDropdownOpen(0) ? "▲" : "▼"}</div>
        </div>
        {isDropdownOpen(0) && (
          <div className="dropdown-content">
            <Link to="/about/overview">Overview</Link>
            <Link to="/about/team">Team</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
