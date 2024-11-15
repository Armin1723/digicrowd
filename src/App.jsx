import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound' 
import ServicePagesBackup from './components/backup/ServicePagesBackup'
import ServicePagesCarousel from './components/backup/ServicePagesCarousel'
import useLenis from './utils/Lenis'


const App = () => {
  useLenis();
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='/services' element={<ServicePagesBackup />} />
      <Route path='/portfolio' element={<ServicePagesCarousel />} />
      <Route path="*" element={<NotFound />} />    

    </Routes>
    </BrowserRouter>
  )
}

export default App
