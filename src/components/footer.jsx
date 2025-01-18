import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"; // Import file CSS

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <p>&copy; {new Date().getFullYear()} Golden Gym. All rights reserved.</p>
        <Link to="/formbio">
          <p className="kuning">Form Biodata Kelompok</p>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur necessitatibus repellat voluptate, delectus magnam.</p>
        <ul className="social-links">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
