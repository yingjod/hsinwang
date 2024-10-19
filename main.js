import React from 'react';
import ReactDOM from 'react-dom';
import App from './src'; // 導入 App 組件

ReactDOM.render(<App />, document.getElementById('root'));






const openingHour = 11;  
const closingHour = 19; 
const closingMinute = 30; 

const options = { timeZone: 'Asia/Taipei', hour: '2-digit', minute: '2-digit', hour12: false };
const currentDayDate = new Date().toLocaleString('en-US', options);
const [currentHour, currentMinute] = currentDayDate.split(':').map(Number); 


const currentDay = new Date().toLocaleString('en-US', { timeZone: 'Asia/Taipei', weekday: 'long' });


const isOpenTime = (currentHour > openingHour && currentHour < closingHour) || 
                   (currentHour === openingHour && currentMinute >= 0) || 
                   (currentHour === closingHour && currentMinute <= closingMinute);


const isOpenDay = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(currentDay);


const isOpen = isOpenTime && isOpenDay;

const statusElement = document.getElementById('store-status');

if (statusElement) {
    if (isOpen) {
        statusElement.innerHTML = 'Open';
        statusElement.style.color = 'green';
    } else {
        statusElement.innerHTML = 'Closed';
        statusElement.style.color = 'red';
    }
}

console.log(isOpen ? "Open" : "Closed"); 
console.log("Current Day:", currentDay); 
console.log('Current time in Taiwan (HH:MM):', currentHour + ':' + currentMinute);
