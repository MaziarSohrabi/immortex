import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div style={footerContentStyle}>
          <div style={footerSectionStyle}>
            <h4>Immortex</h4>
            <p>بازار معکوس پوشاک</p>
            <p>اولین پلتفرم逆向 بازار مد و پوشاک در ایران</p>
          </div>
          
          <div style={footerSectionStyle}>
            <h4>لینک‌های سریع</h4>
            <Link to="/about" style={footerLinkStyle}>درباره ما</Link>
            <Link to="/contact" style={footerLinkStyle}>تماس با ما</Link>
            <Link to="/faq" style={footerLinkStyle}>سوالات متداول</Link>
          </div>
          
          <div style={footerSectionStyle}>
            <h4>خدمات</h4>
            <Link to="/register/buyer" style={footerLinkStyle}>ثبت‌نام خریدار</Link>
            <Link to="/register/seller" style={footerLinkStyle}>ثبت‌نام فروشگاه</Link>
            <Link to="/demands" style={footerLinkStyle}>مشاهده تقاضاها</Link>
          </div>
        </div>
        <div style={copyrightStyle}>
          <p>© 2024 Immortex. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '2rem 0',
  marginTop: 'auto'
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '2rem'
};

const footerSectionStyle = {
  flex: 1,
  minWidth: '200px'
};

const footerLinkStyle = {
  display: 'block',
  color: '#ccc',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  transition: 'color 0.3s ease'
};

const copyrightStyle = {
  borderTop: '1px solid #555',
  paddingTop: '1rem',
  marginTop: '2rem',
  textAlign: 'center'
};

export default Footer;
