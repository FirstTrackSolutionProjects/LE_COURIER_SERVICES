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
      <Box className="h-[calc(100vh - 64px)] w-full overflow-hidden">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Box>
    </>
  )
}

export default App
