import React from 'react'
import { createRoot } from 'react-dom/client'
import StoreStatus from './StoreStatus'// Import StoreStatus component
import InfoAccordion from './InfoAccordion' // Import InfoAccordion component

// Render StoreStatus to the specified mount point
const storeStatusRoot = document.getElementById('store-status-root')
if (storeStatusRoot) {
  createRoot(storeStatusRoot).render(<StoreStatus />) // Correct usage of createRoot
}

// Render InfoAccordion to the specified mount point
const infoAccordionRoot = document.getElementById('info-accordion-root')
if (infoAccordionRoot) {
  createRoot(infoAccordionRoot).render(<InfoAccordion />) // Correct usage of createRoot
}
