import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ links }) {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand navbar-logo">
          <img src="/images/logo.png" alt="Logo" />
          <h3>Finance Tracker</h3>
        </div>
        <ul className="nav-list">
          {links.map((link, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-item-link" to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
