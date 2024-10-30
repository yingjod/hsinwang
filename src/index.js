import React from 'react'
import { createRoot } from 'react-dom/client'
import StoreStatus from './StoreStatus'// Import StoreStatus component
import InfoAccordion from './InfoAccordion' // Import InfoAccordion component
import OrderSection from './OrderSection' 
import Navbar from './Navbar' 
import OrderForm from './OrderForm' 


// Render StoreStatus to the specified mount point
const storeStatusRoot = document.getElementById('store-status-root')
if (storeStatusRoot) {
  createRoot(storeStatusRoot).render(<StoreStatus />) 
}

// Render InfoAccordion to the specified mount point
const infoAccordionRoot = document.getElementById('info-accordion-root')
if (infoAccordionRoot) {
  createRoot(infoAccordionRoot).render(<InfoAccordion />) 
}


const OrderSectionRoot = document.getElementById('order-section-root')
if (OrderSectionRoot) {
  createRoot(OrderSectionRoot).render(<OrderSection />) 
}

const NavbarRoot = document.getElementById('navbar-root')
if (NavbarRoot) {
  createRoot(NavbarRoot).render(<Navbar />) 
}

const OrderFormRoot = document.getElementById('order-form-root')
if (OrderFormRoot) {
  createRoot(OrderFormRoot).render(<OrderForm />) 
}

