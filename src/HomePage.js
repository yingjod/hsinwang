// src/HomePage.js
import React from 'react'
import OrderPage from './component/OrderPage'
import StorePage from './component/StorePage'
import AboutPage from './component/AboutPage'
import ContactPage from './component/ContactPage'
import QAPage from './component/QAPage'

const HomePage = () => {
  return (
    <div>
      <div className='home-line'>
        <section className="home" id="home">
          <div className="home-text">
            <img src="img/欣旺-removebg-preview (1).png" alt="Hsin Wang Logo" />
            <h2>Happiness is a <br />tap away</h2>
          </div>
          <div className="home-img">
            <img src="img/cake-collection.png" alt="Cake Collection" />
          </div>
        </section>
      </div>

      <OrderPage />
      <StorePage />
      <AboutPage />
      <QAPage />
      <ContactPage/>

    </div>
  )
}

export default HomePage
