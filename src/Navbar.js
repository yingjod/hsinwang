// Navbar.js
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <a href="/#home" className="logo"> <img src="img/logo-trans.png" alt=""></img> </a>
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li><a href="/#home">Home</a></li>
        <li><a href="/#order">Order</a></li>
        <li><a href="/#store">Store</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#QA">Q&A</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </header>
  )
}

export default Navbar
