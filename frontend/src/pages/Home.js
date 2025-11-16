import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      {/* هیرو سکشن */}
      <section style={heroStyle}>
        <div style={heroContentStyle}>
          <h1>به Immortex خوش آمدید</h1>
          <p style={heroSubtitleStyle}>
            اولین بازار معکوس پوشاک در ایران
            <br />
            شما تقاضا می‌کنید، فروشگاه‌ها به شما پیشنهاد می‌دهند!
          </p>
          <div style={heroButtonsStyle}>
            <Link to="/register/buyer" className="btn-primary">
              ثبت‌نام خریدار
            </Link>
            <Link to="/register/seller" className="btn-secondary">
              ثبت‌نام فروشگاه
            </Link>
          </div>
        </div>
      </section>

      {/* ویژگی‌ها */}
      <section style={featuresStyle}>
        <h2 style={sectionTitleStyle}>چگونه کار می‌کند؟</h2>
        <div style={featuresGridStyle}>
          <div className="card">
            <h3>۱. ثبت تقاضا</h3>
            <p>نیاز پوشاک خود را با جزئیات ثبت کنید</p>
          </div>
          <div className="card">
            <h3>۲. دریافت پیشنهاد</h3>
            <p>فروشگاه‌های معتبر به شما پیشنهاد می‌دهند</p>
          </div>
          <div className="card">
            <h3>۳. مقایسه و انتخاب</h3>
            <p>بهترین پیشنهاد را از بین گزینه‌ها انتخاب کنید</p>
          </div>
          <div className="card">
            <h3>۴. خرید مطمئن</h3>
            <p>با اطمینان و تضمین کیفیت خرید کنید</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const heroStyle = {
  background: 'linear-gradient(135deg, var(--primary) 0%, #1a1a2e 100%)',
  color: 'var(--primary-foreground)',
  padding: '4rem 0',
  textAlign: 'center',
  borderRadius: 'var(--radius)',
  margin: '2rem 0'
};

const heroContentStyle = {
  maxWidth: '600px',
  margin: '0 auto'
};

const heroSubtitleStyle = {
  fontSize: '1.1rem',
  marginBottom: '2rem',
  lineHeight: '1.8',
  opacity: 0.9
};

const heroButtonsStyle = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap'
};

const featuresStyle = {
  padding: '4rem 0'
};

const sectionTitleStyle = {
  textAlign: 'center',
  marginBottom: '3rem'
};

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem'
};

export default Home;
