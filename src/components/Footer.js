import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <h3>This is the footer component</h3>
      <p>&copy; {new Date().getFullYear()} Your Finance App</p>
    </footer>
  );
}

export default Footer;
