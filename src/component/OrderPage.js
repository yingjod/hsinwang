// src/OrderPage.js
import React from 'react'
import OrderSection from './OrderSection'

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
      <a href="Orderform.html" className="btn">立即訂購蛋糕</a>
    </section>
  )
}

export default OrderPage
