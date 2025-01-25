import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartPage from './CartPage'
import Navbar from './component/Navbar'
import ProductPage from './ProductPage'
import ProductListPage from './ProductListPage'
import HomePage from './HomePage'


function App() {
  const [cakes, setCakes] = useState([])
  const [breads, setBreads] = useState([])
  const [cakesLoading, setCakesLoading] = useState(true)
  const [cakesError, setCakesError] = useState(null)
  const [breadsLoading, setBreadsLoading] = useState(true)
  const [breadsError, setBreadsError] = useState(null)
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

  useEffect(() => {
    console.log('process.env:', process.env) // 打印所有环境变量
    console.log('API_BASE_URL:', process.env.REACT_APP_API_BASE_URL) // 打印特定环境变量
  }, [])

  // 获取蛋糕数据
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/product/cake/`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch cakes')
        return response.json()
      })
      .then((data) => {
        console.log('Cake data:', data)
        setCakes(data)
        setCakesLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching cakes:', error)
        setCakesError(error)
        setCakesLoading(false)
      })
  }, [])

  // 获取面包数据
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/product/breads/`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch breads')
        return response.json()
      })
      .then((data) => {
        console.log('Bread data:', data)
        setBreads(data)
        setBreadsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching breads:', error)
        setBreadsError(error)
        setBreadsLoading(false)
      })
  }, [])

  // 如果正在加载，则显示加载中
  if (cakesLoading || breadsLoading) {
    return <div>Loading...</div>
  }

  // 错误处理：如果有错误则展示
  if (cakesError || breadsError) {
    return (
      <div>
        <h2>發生錯誤：</h2>
        {cakesError && <p>Cakes: {cakesError.message}</p>}
        {breadsError && <p>Breads: {breadsError.message}</p>}
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage cakes={cakes} breads={breads} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productpage" element={<ProductListPage cakes={cakes} />} />
        <Route path="/product/:category/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App
