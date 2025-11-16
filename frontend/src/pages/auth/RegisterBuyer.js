import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterBuyer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ثبت‌نام خریدار:', formData);
    // بعداً با API连接 می‌شود
  };

  return (
    <div className="container">
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>ثبت‌نام خریدار</h2>
        <p style={subtitleStyle}>فرم زیر را برای ایجاد حساب خریدار پر کنید</p>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>نام</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyle}
              placeholder="نام خود را وارد کنید"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>نام خانوادگی</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyle}
              placeholder="نام خانوادگی خود را وارد کنید"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>ایمیل</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="example@email.com"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>شماره تماس</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
              placeholder="09xxxxxxxxx"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>رمز عبور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              placeholder="حداقل ۸ کاراکتر"
              minLength="8"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>تکرار رمز عبور</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={inputStyle}
              placeholder="رمز عبور را مجدداً وارد کنید"
              required
            />
          </div>

          <button type="submit" style={submitButtonStyle}>
            ثبت‌نام
          </button>
        </form>

        <div style={loginLinkStyle}>
          <p>قبلاً حساب دارید؟ <Link to="/login" style={linkStyle}>وارد شوید</Link></p>
          <p>فروشگاه دارید؟ <Link to="/register/seller" style={linkStyle}>ثبت‌نام فروشگاه</Link></p>
        </div>
      </div>
    </div>
  );
};

const formContainerStyle = {
  maxWidth: '500px',
  margin: '2rem auto',
  padding: '2rem',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '0.5rem',
  color: '#333'
};

const subtitleStyle = {
  textAlign: 'center',
  marginBottom: '2rem',
  color: '#666'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
};

const labelStyle = {
  fontWeight: 'bold',
  color: '#333'
};

const inputStyle = {
  padding: '12px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '16px',
  fontFamily: 'inherit'
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginTop: '1rem'
};

const loginLinkStyle = {
  textAlign: 'center',
  marginTop: '2rem',
  paddingTop: '2rem',
  borderTop: '1px solid #eee'
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default RegisterBuyer;
