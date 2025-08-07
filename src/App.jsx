import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

import Header from './components/Header';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import Tracking from './pages/Tracking';
import ContactUs from './pages/ContactUs';

import FAQs from './components/FAQs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

// ✅ Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
    

      <div className="min-h-[calc(100vh-64px)] w-full overflow-hidden bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
         
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
