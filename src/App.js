import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Results from './pages/Results'
import Account from './pages/Account'
import Support from './pages/Support'
import TDEE from './pages/TDEE'

const App = () => {
  return (
    <Box width="400px" sx={{ width: { x1: '1488px'}}} m="auto">
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/account" element={<Account />} />
        <Route path="/results" element={<Results />} />
        <Route path="/tdee-calculator" element={<TDEE />} />
        
    </Routes>
    <Footer />
    </Box>
  )
}

export default App