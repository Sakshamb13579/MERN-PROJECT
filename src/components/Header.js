import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav>
        <h3>This will be the navbar header component</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
