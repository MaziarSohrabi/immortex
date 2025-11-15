import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="container">
        <div style={navStyle}>
          <Link to="/" style={logoStyle}>
            <h2>Immortex</h2>
            <small>بازار معکوس پوشاک</small>
          </Link>
          
          <nav style={navLinksStyle}>
            <Link to="/demands" style={linkStyle}>تقاضاها</Link>
            <Link to="/shops" style={linkStyle}>فروشگاه‌ها</Link>
            <Link to="/about" style={linkStyle}>درباره ما</Link>
            <Link to="/contact" style={linkStyle}>تماس</Link>
          </nav>
          
          <div style={authButtonsStyle}>
            <Link to="/login" style={linkStyle}>ورود</Link>
            <Link to="/register/buyer" style={primaryButtonStyle}>ثبت‌نام خریدار</Link>
            <Link to="/register/seller" style={secondaryButtonStyle}>ثبت‌نام فروشگاه</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#fff',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  padding: '1rem 0',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
  textAlign: 'center'
};

const navLinksStyle = {
  display: 'flex',
  gap: '2rem'
};

const authButtonsStyle = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  padding: '0.5rem 1rem',
  transition: 'all 0.3s ease'
};

const primaryButtonStyle = {
  ...linkStyle,
  backgroundColor: '#007bff',
  color: 'white',
  borderRadius: '8px',
  fontWeight: 'bold'
};

const secondaryButtonStyle = {
  ...linkStyle,
  backgroundColor: '#28a745',
  color: 'white',
  borderRadius: '8px',
  fontWeight: 'bold'
};

export default Header;
