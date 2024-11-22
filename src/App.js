import React, { useState, useEffect } from 'react'
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartPage from './CartPage'
import Navbar from './component/Navbar'
import ProductPage from './ProductPage'
import ProductListPage from './ProductListPage'
import HomePage from './HomePage'


function App() {

  const [cakes, setCakes] = useState([])
  const [breads, setBreads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://127.0.0.1:8000/api/product/cake/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setCakes(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://127.0.0.1:8000/api/product/breads/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setBreads(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])



  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/productpage" element={<ProductListPage />} />
        <Route path="/product/:category/:productId" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
