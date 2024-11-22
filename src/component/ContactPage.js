// src/ContactPage.js
import React from 'react'

const ContactPage = () => {
  return (
    <section className="contact" id="contact">
      <div className="social">
        <a href="https://www.facebook.com/hsinwangbakery/" target="_blank" rel="noopener noreferrer">
          <img src="img/facebook_3669678.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/hsinwangbakery/" target="_blank" rel="noopener noreferrer">
          <img src="img/instagram_1384015.png" alt="Instagram" />
        </a>
        <a href="mailto:hsinwangbakery0505@gmail.com?subject=Hello&body=This is a message" target="_blank" rel="noopener noreferrer">
          <img src="img/email_5249753.png" alt="Email" />
        </a>
        <a href="https://lin.ee/Eny98PQ" target="_blank" rel="noopener noreferrer">
          <img src="img/line_3669731.png" alt="Line" />
        </a>
      </div>
      <div className="develope">
        <p>Design by <a href="https://portfolio-yl.vercel.app/" target="_blank" rel="noopener noreferrer">YING LI</a></p>
        <p>&copy; 2024 YING LI All rights reserved.</p>
      </div>
    </section>
  )
}

export default ContactPage
