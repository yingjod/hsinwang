import React, { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <a href="/#home" className="logo">
        <img src="./img/欣旺-removebg-preview (1).png" alt="Logo" />
      </a>
      <div className={`bx bx-menu ${menuOpen ? 'open' : ''}`} id="menu-icon" onClick={toggleMenu}></div>

      <ul className={`navbar ${menuOpen ? 'active' : ''}`}>
        <li><a href="/#order">Products</a></li>
        <li><a href="/#store">Store</a></li> 
        <li><a href="/#about">About</a></li>
        <li><a href="/#QA">Q&A</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </header>
  )
}

export default Navbar
