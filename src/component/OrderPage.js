// src/OrderPage.js
import React from 'react'
import OrderSection from './OrderSection'
import { Link } from 'react-router-dom'

const OrderPage = () => {
  return (
    <section className="order" id="order">
      <div className="heading">
        <span>立即訂購</span>
        <h1>節慶蛋糕</h1>
      </div>

      <OrderSection />
      <br />
      <br />
      <Link to="/productpage" className="btn">看更多商品..</Link>
    </section>
  )
}

export default OrderPage
