import React from 'react'
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './cart'
import Navbar from './component/Navbar'
import ProductPage from './ProductPage'
import HomePage from './HomePage'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
