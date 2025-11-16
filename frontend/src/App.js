import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

const Home = () => (
  <div className="container">
    <section style={heroStyle}>
      <div style={heroContentStyle}>
        <h1>به Immortex خوش آمدید</h1>
        <p style={heroSubtitleStyle}>
          اولین بازار معکوس پوشاک در ایران
        </p>
        <div style={heroButtonsStyle}>
          <a href="/register/buyer" className="btn-primary">
            ثبت‌نام خریدار
          </a>
          <a href="/register/seller" className="btn-secondary">
            ثبت‌نام فروشگاه
          </a>
        </div>
      </div>
    </section>
  </div>
);

const heroStyle = {
  background: 'linear-gradient(135deg, #030213 0%, #1a1a2e 100%)',
  color: 'white', padding: '4rem 0', textAlign: 'center', borderRadius: '0.625rem', margin: '2rem 0'
};

const heroContentStyle = { maxWidth: '600px', margin: '0 auto' };
const heroSubtitleStyle = { fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8', opacity: 0.9 };
const heroButtonsStyle = { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' };

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
