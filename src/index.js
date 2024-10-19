import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 確保 App.js 在 src 資料夾內

ReactDOM.render(
    <App />,
    document.getElementById('root') // 確保這個 id 與 index.html 中的一致
);
