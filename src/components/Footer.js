
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#16171a', color: '#EEBC1D', padding: '20px', textAlign: 'center', fontFamily: 'Montserrat' }}>
      <p>&copy; {new Date().getFullYear()} CoinpediaPro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;