import { Box } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import Pricing from './pages/Pricing'
import Tracking from './pages/Tracking'
import ContactUs from './pages/ContactUs'
import MobileNav from './components/MobileNav'
import FAQs from './components/FAQs'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'
const App = () => {
  return (
    <>
      <Header />
      <MobileNav />
      <Box className="h-[calc(100vh - 64px)] w-full overflow-hidden">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Box>
    </>
  )
}

export default App
