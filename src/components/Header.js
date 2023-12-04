// Header.js

import React from 'react';

const Header = () => {
  const navStyle = {
    background: '#333',
    padding: '10px',
  };

  const ulStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  };

  const liStyle = {
    margin: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <header>
      <h1>Your Website Name</h1>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><a style={linkStyle} href="/">Home</a></li>
          <li style={liStyle}><a style={linkStyle} href="/about">About</a></li>
          <li style={liStyle}><a style={linkStyle} href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
