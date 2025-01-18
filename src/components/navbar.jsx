import React from "react";
import "./Navbar.css"; // Import file CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/fitness.png" alt="Gym Logo" className="navbar-logo" />
      <div className="logo">Fitlog</div>
       
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/record">Program Record</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
