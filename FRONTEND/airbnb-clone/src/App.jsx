import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'
import Checkout from './pages/Checkout'

function App() {
  return (

   
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>

 
  )
}

export default App

