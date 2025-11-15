import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';

// صفحات احراز هویت
import Login from './pages/auth/Login';
import RegisterBuyer from './pages/auth/RegisterBuyer';
import RegisterSeller from './pages/auth/RegisterSeller';

// صفحات اصلی
import BuyerDashboard from './pages/dashboard/BuyerDashboard';
import SellerDashboard from './pages/dashboard/SellerDashboard';
import DemandList from './pages/demands/DemandList';
import CreateDemand from './pages/demands/CreateDemand';
import ShopList from './pages/shops/ShopList';

// صفحات استاتیک
import About from './pages/static/About';
import Contact from './pages/static/Contact';
import FAQ from './pages/static/FAQ';

import './styles/global.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* صفحه اصلی */}
          <Route path="/" element={<Home />} />
          
          {/* احراز هویت */}
          <Route path="/login" element={<Login />} />
          <Route path="/register/buyer" element={<RegisterBuyer />} />
          <Route path="/register/seller" element={<RegisterSeller />} />
          
          {/* داشبوردها */}
          <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
          <Route path="/dashboard/seller" element={<SellerDashboard />} />
          
          {/* تقاضاها */}
          <Route path="/demands" element={<DemandList />} />
          <Route path="/demands/create" element={<CreateDemand />} />
          
          {/* فروشگاه‌ها */}
          <Route path="/shops" element={<ShopList />} />
          
          {/* صفحات استاتیک */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
