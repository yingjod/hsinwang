import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import { Link } from 'react-router-dom'

function ProductPage() {
  const [cakes, setCakes] = useState([])
  const [breads, setBreads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

  const fetchData = (url, setData, controller) => {
    return fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err)  // 避免因中止請求而顯示錯誤
        }
      })
  }

  useEffect(() => {
    setLoading(true)  // 開始加載
    const controllerCakes = new AbortController()
    const controllerBreads = new AbortController()

    // 同時發送兩個請求，並且當兩個都完成時再設置 loading = false
    Promise.all([
      fetchData(`${API_BASE_URL}/api/product/cake/`, setCakes, controllerCakes),
      fetchData(`${API_BASE_URL}/api/product/breads/`, setBreads, controllerBreads),
    ])
      .then(() => {
        setLoading(false)  // 當兩個請求都完成後設置 loading 為 false
      })

    // 組件卸載時取消請求
    return () => {
      controllerCakes.abort()
      controllerBreads.abort()
    }
  }, [])  // 只會在組件加載時執行一次

  // 等待數據加載完成
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className='product-page'>
      <div className="product-container">
        {cakes.map((cake) => (
          <div className="box" key={cake.id}>
            <Link to={`/product/cake/${cake.id}`}>
              <div className="box-img">
                <img src={cake.image} alt={cake.name} />
              </div>
            </Link>
            <h2>{cake.name}</h2>
          </div>
        ))}
      </div>

      <div className="product-container">
        {breads.map((bread) => (
          <div className="box-bread" key={bread.id}>
            <Link to={`/product/breads/${bread.id}`}>
              <div className="box-img">
                <img src={bread.image} alt={bread.name} />
              </div>
            </Link>
            <h2>{bread.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductPage
