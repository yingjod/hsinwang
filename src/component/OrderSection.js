import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function OrderSection() {
  const [cakes, setCakes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

  useEffect(() => {

    fetch(`${API_BASE_URL}/api/product/cake/`)
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

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (

    <div className="order-container">
      {cakes.map((cake) => (
        <div className="box" key={cake.id}>
          <div className="box-img">
            <img src={cake.image} alt={cake.name} />
          </div>
          <h2>{cake.name}</h2>

        </div>
      ))}
    </div>

  )
}

export default OrderSection
