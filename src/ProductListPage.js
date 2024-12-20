
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import { Link } from 'react-router-dom'

function ProductPage() {
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
