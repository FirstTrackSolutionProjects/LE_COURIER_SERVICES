import { Box } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
