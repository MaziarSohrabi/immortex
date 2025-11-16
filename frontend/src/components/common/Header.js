import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="container">
        <div style={navStyle}>
          <Link to="/" style={logoStyle}>
            <h2 style={logoTitleStyle}>Immortex</h2>
            <small style={logoSubtitleStyle}>بازار معکوس پوشاک</small>
          </Link>
          
          <nav style={navLinksStyle}>
            <Link to="/demands" style={navLinkStyle}>تقاضاها</Link>
            <Link to="/shops" style={navLinkStyle}>فروشگاه‌ها</Link>
            <Link to="/about" style={navLinkStyle}>درباره ما</Link>
          </nav>
          
          <div style={authButtonsStyle}>
            <Link to="/login" style={secondaryButtonStyle}>ورود</Link>
            <Link to="/register/buyer" style={primaryButtonStyle}>خریدار</Link>
            <Link to="/register/seller" style={secondaryButtonStyle}>فروشگاه</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: 'var(--background)',
  borderBottom: '1px solid var(--border)',
  padding: '1rem 0',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  backdropFilter: 'blur(8px)'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem'
};

const logoStyle = {
  textDecoration: 'none'
};

const logoTitleStyle = {
  color: 'var(--primary)',
  margin: 0,
  fontSize: '1.25rem',
  fontWeight: 'bold'
};

const logoSubtitleStyle = {
  color: 'var(--muted-foreground)',
  fontSize: '0.7rem',
  display: 'block'
};

const navLinksStyle = {
  display: 'flex',
  gap: '1rem',
  flex: 1,
  justifyContent: 'center'
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'var(--foreground)',
  padding: '0.5rem 0.75rem',
  borderRadius: 'var(--radius)',
  transition: 'all 0.2s ease',
  fontWeight: 'var(--font-weight-medium)'
};

const authButtonsStyle = {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center'
};

const primaryButtonStyle = {
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  padding: '0.4rem 0.8rem',
  borderRadius: 'var(--radius)',
  textDecoration: 'none',
  fontWeight: 'var(--font-weight-medium)',
  fontSize: '0.8rem',
  transition: 'all 0.2s ease',
  display: 'inline-block'
};

const secondaryButtonStyle = {
  backgroundColor: 'transparent',
  color: 'var(--foreground)',
  padding: '0.4rem 0.8rem',
  borderRadius: 'var(--radius)',
  textDecoration: 'none',
  fontWeight: 'var(--font-weight-medium)',
  fontSize: '0.8rem',
  transition: 'all 0.2s ease',
  border: '1px solid var(--border)',
  display: 'inline-block'
};

export default Header;
