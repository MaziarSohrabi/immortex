import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterSeller = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    category: '',
    description: '',
    password: '',
    confirmPassword: ''
  });

  const categories = [
    'لباس مردانه',
    'لباس زنانه',
    'لباس بچگانه',
    'اکسسوری',
    'کفش',
    ' ورزشی',
    'مجلسی',
    'اسپورت'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ثبت‌نام فروشگاه:', formData);
    // بعداً با API连接 می‌شود
  };

  return (
    <div className="container">
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>ثبت‌نام فروشگاه</h2>
        <p style={subtitleStyle}>فرم زیر را برای ایجاد حساب فروشگاه پر کنید</p>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>نام فروشگاه</label>
            <input
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={handleChange}
              style={inputStyle}
              placeholder="نام فروشگاه خود را وارد کنید"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>نام مالک</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              style={inputStyle}
              placeholder="نام و نام خانوادگی مالک"
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
            <label style={labelStyle}>آدرس فروشگاه</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="آدرس کامل فروشگاه"
              rows="3"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>دسته‌بندی</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="">انتخاب دسته‌بندی</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>توضیحات فروشگاه</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="توضیحات درباره فروشگاه و محصولات"
              rows="4"
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
            ثبت‌نام فروشگاه
          </button>
        </form>

        <div style={loginLinkStyle}>
          <p>قبلاً حساب دارید؟ <Link to="/login" style={linkStyle}>وارد شوید</Link></p>
          <p>خریدار هستید؟ <Link to="/register/buyer" style={linkStyle}>ثبت‌نام خریدار</Link></p>
        </div>
      </div>
    </div>
  );
};

const formContainerStyle = {
  maxWidth: '600px',
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

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
  minHeight: '80px'
};

const submitButtonStyle = {
  backgroundColor: '#28a745',
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

export default RegisterSeller;
