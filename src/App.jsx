import { Box } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Welcome from './pages/Welcome'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import BlogPage from './pages/BlogPage'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
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
        
          {/* <Route exact path="/" element={<Welcome />} /> */}
          <Route exact path="/" element={<Home />} />
        
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Box>
    </>
  )
}

export default App
