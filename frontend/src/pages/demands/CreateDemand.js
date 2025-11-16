import React, { useState } from 'react';

const CreateDemand = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    size: '',
    color: '',
    brand: '',
    material: '',
    budget: '',
    deadline: '',
    description: '',
    images: []
  });

  const categories = [
    'تیشرت',
    'پیراهن',
    'شلوار',
    'کت',
    'ژاکت',
    'هودی',
    'لباس زیر',
    'لباس ورزشی',
    'کفش',
    'اکسسوری'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'سایز دقیق در توضیحات'];
  const colors = ['مشکی', 'سفید', 'آبی', 'قرمز', 'سبز', 'زرد', 'قهوه‌ای', 'خاکستری', 'بنفش', 'نارنجی', 'سایر'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    // بعداً کامل می‌شود
    console.log('آپلود تصویر');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ثبت تقاضا:', formData);
    // بعداً با API连接 می‌شود
  };

  return (
    <div className="container">
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>ثبت تقاضای جدید</h2>
        <p style={subtitleStyle}>نیاز پوشاک خود را با جزئیات ثبت کنید</p>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>عنوان تقاضا</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={inputStyle}
              placeholder="مثال: تیشرت مردانه ساده"
              required
            />
          </div>

          <div style={gridStyle}>
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
              <label style={labelStyle}>سایز</label>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">انتخاب سایز</option>
                {sizes.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={gridStyle}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>رنگ</label>
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">انتخاب رنگ</option>
                {colors.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>بودجه (تومان)</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                style={inputStyle}
                placeholder="مثال: 150000"
                min="0"
                required
              />
            </div>
          </div>

          <div style={gridStyle}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>برند مورد نظر</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                style={inputStyle}
                placeholder="اختیاری - مثال: Adidas"
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>جنس پارچه</label>
              <input
                type="text"
                name="material"
                value={formData.material}
                onChange={handleChange}
                style={inputStyle}
                placeholder="اختیاری - مثال: نخی"
              />
            </div>
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>مهلت دریافت پیشنهاد</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>توضیحات کامل</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="جزئیات کامل نیاز خود را شرح دهید...
مثال: 
- تیشرت مردانه
- رنگ مشکی
- جنس نخی
- آستین کوتاه
- مناسب ورزش"
              rows="6"
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>تصاویر نمونه (اختیاری)</label>
            <div style={uploadStyle}>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                style={fileInputStyle}
              />
              <div style={uploadTextStyle}>
                برای آپلود تصویر کلیک کنید یا فایل را بکشید
              </div>
            </div>
          </div>

          <button type="submit" style={submitButtonStyle}>
            ثبت تقاضا
          </button>
        </form>
      </div>
    </div>
  );
};

const formContainerStyle = {
  maxWidth: '800px',
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

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem'
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
  minHeight: '120px'
};

const uploadStyle = {
  border: '2px dashed #ddd',
  borderRadius: '8px',
  padding: '2rem',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const fileInputStyle = {
  display: 'none'
};

const uploadTextStyle = {
  color: '#666'
};

const submitButtonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '15px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginTop: '1rem'
};

export default CreateDemand;
