import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Your Website Name. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
