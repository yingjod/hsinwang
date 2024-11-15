// Navbar.js
import React from 'react'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <header>
      <a href="/#home" className="logo"> <img src="img/欣旺-removebg-preview (1).png" alt=""></img> </a>
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li><a href="productpage.html">Products</a></li>
        <li><a href="/#store">Store</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#QA">Q&A</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a href="cart.html"><ShoppingCart size={32}/></a></li>

      </ul>
    </header>
  )
}

export default Navbar
