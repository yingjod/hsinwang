import React from 'react'
import { createRoot } from 'react-dom/client'
import StoreStatus from './component/StoreStatus'// Import StoreStatus component
import InfoAccordion from './component/InfoAccordion' // Import InfoAccordion component
import OrderSection from './component/OrderSection' 
import Navbar from './component/Navbar' 
import OrderForm from './OrderForm' 
import ProductPage from './ProductListPage'
import CakeOrder from './ProductPage'



import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement) // 创建 root 实例
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

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

const OrderFormRoot = document.getElementById('order-form-root')
if (OrderFormRoot) {
  createRoot(OrderFormRoot).render(<OrderForm />) 
}

const ProductPageRoot = document.getElementById('product-page-root')
if (ProductPageRoot) {
  createRoot(ProductPageRoot).render(<ProductPage />) 
}

const CakeOrderRoot = document.getElementById('cake-order-root')
if (CakeOrderRoot) {
  createRoot(CakeOrderRoot).render(<CakeOrder />) 
}

