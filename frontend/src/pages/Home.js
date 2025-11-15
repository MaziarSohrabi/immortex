import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      {/* هیرو سکشن */}
      <section style={heroStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>به Immortex خوش آمدید</h1>
          <p style={heroSubtitleStyle}>
            اولین بازار معکوس پوشاک در ایران
            <br />
            شما تقاضا می‌کنید، فروشگاه‌ها به شما پیشنهاد می‌دهند!
          </p>
          <div style={heroButtonsStyle}>
            <Link to="/register/buyer" style={primaryButtonStyle}>
              به عنوان خریدار ثبت‌نام کنید
            </Link>
            <Link to="/register/seller" style={secondaryButtonStyle}>
              به عنوان فروشگاه ثبت‌نام کنید
            </Link>
          </div>
        </div>
      </section>

      {/* ویژگی‌ها */}
      <section style={featuresStyle}>
        <h2 style={sectionTitleStyle}>چگونه کار می‌کند؟</h2>
        <div style={featuresGridStyle}>
          <div style={featureCardStyle}>
            <h3>۱. ثبت تقاضا</h3>
            <p>نیاز پوشاک خود را با جزئیات ثبت کنید</p>
          </div>
          <div style={featureCardStyle}>
            <h3>۲. دریافت پیشنهاد</h3>
            <p>فروشگاه‌های معتبر به شما پیشنهاد می‌دهند</p>
          </div>
          <div style={featureCardStyle}>
            <h3>۳. مقایسه و انتخاب</h3>
            <p>بهترین پیشنهاد را از بین گزینه‌ها انتخاب کنید</p>
          </div>
          <div style={featureCardStyle}>
            <h3>۴. خرید مطمئن</h3>
            <p>با اطمینان و تضمین کیفیت خرید کنید</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const heroStyle = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '4rem 0',
  textAlign: 'center',
  borderRadius: '15px',
  margin: '2rem 0'
};

const heroContentStyle = {
  maxWidth: '600px',
  margin: '0 auto'
};

const heroTitleStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem'
};

const heroSubtitleStyle = {
  fontSize: '1.2rem',
  marginBottom: '2rem',
  lineHeight: '1.6'
};

const heroButtonsStyle = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap'
};

const primaryButtonStyle = {
  backgroundColor: '#fff',
  color: '#667eea',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease'
};

const secondaryButtonStyle = {
  backgroundColor: 'transparent',
  color: '#fff',
  border: '2px solid #fff',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease'
};

const featuresStyle = {
  padding: '4rem 0'
};

const sectionTitleStyle = {
  textAlign: 'center',
  marginBottom: '3rem',
  fontSize: '2rem',
  color: '#333'
};

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem'
};

const featureCardStyle = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  textAlign: 'center',
  transition: 'transform 0.3s ease'
};

export default Home;
