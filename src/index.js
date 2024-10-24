// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import StoreStatus from './StoreStatus'; // 引入 StoreStatus 組件
import InfoAccordion from './InfoAccordion'; // 引入 InfoAccordion 組件

// 渲染 StoreStatus 到指定的掛載點
const storeStatusRoot = document.getElementById('store-status-root');
if (storeStatusRoot) {
  ReactDOM.render(<StoreStatus />, storeStatusRoot);
}

// 渲染 InfoAccordion 到指定的掛載點
const infoAccordionRoot = document.getElementById('info-accordion-root');
if (infoAccordionRoot) {
  ReactDOM.render(<InfoAccordion />, infoAccordionRoot);
}
