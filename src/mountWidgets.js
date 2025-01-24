import React from 'react'
import { createRoot } from 'react-dom/client'
import StoreStatus from './component/StoreStatus'
import InfoAccordion from './component/InfoAccordion'
import OrderSection from './component/OrderSection'
import OrderForm from './OrderForm'
import ProductPage from './ProductListPage'
import CakeOrder from './ProductPage'

function mountComponent(Component, rootId) {
  const rootElement = document.getElementById(rootId)
  if (rootElement) {
    createRoot(rootElement).render(<Component />)
  }
}

mountComponent(StoreStatus, 'store-status-root')
mountComponent(InfoAccordion, 'info-accordion-root')
mountComponent(OrderSection, 'order-section-root')
mountComponent(OrderForm, 'order-form-root')
mountComponent(ProductPage, 'product-page-root')
mountComponent(CakeOrder, 'cake-order-root')
