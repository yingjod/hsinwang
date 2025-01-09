// StoreStatus.js
import React, { useState, useEffect } from 'react'

function StoreStatus() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let isMounted = true

    const openingHour = 11
    const closingHour = 19
    const closingMinute = 30

    const options = { timeZone: 'Asia/Taipei', hour: '2-digit', minute: '2-digit', hour12: false }
    const currentDayDate = new Date().toLocaleString('en-US', options)
    const [currentHour, currentMinute] = currentDayDate.split(':').map(Number)

    const currentDay = new Date().toLocaleString('en-US', { timeZone: 'Asia/Taipei', weekday: 'long' })

    const isOpenTime = (currentHour > openingHour && currentHour < closingHour) ||
      (currentHour === openingHour && currentMinute >= 0) ||
      (currentHour === closingHour && currentMinute <= closingMinute)

    const isOpenDay = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(currentDay);

    setIsOpen(isOpenTime && isOpenDay)

    return () => {
      isMounted = false // 组件卸载时设置为 false，防止更新状态
    }
  }, [])

  return (
    <div id="store-status" style={{ color: isOpen ? 'green' : 'red', fontWeight: 'bold' }}>
      {isOpen ? 'Open' : 'Closed'}
    </div>
  )
}

export default StoreStatus
