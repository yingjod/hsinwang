// src/StorePage.js
import React from 'react'
import StoreStatus from './StoreStatus'

const StorePage = () => {
  return (
    <section className="store" id="store">
      <div className="heading">
        <span>店鋪資訊</span>
        <h1>地址及營業時間</h1>
      </div>
      <div className="store-container">
        <div className="store-text">
          <h2>｜ Banqiao 板橋本店 ｜</h2>
          <h3>新北市板橋區光武街8號</h3>
          <h3>（ 近捷運新埔站5號出口 ）</h3>
          <h3>星期二 Tue - 星期六 Sat</h3>
          <div className="openhour">
            <h3>11:00 - 19:30 | </h3>
            <StoreStatus />
          </div>
          <h3> - 售完提早打烊 - </h3>
          <h3> - 造訪前請先來電詢問以免向隅 - </h3>
          <h3>T: 02-8251-0168</h3>
        </div>
        <div className="store-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.264166055768!2d121.465448477095!3d25.025107677822298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9f3c5864b8d%3A0x90d412d86d1fd40!2z5qyj5pe66bq15YyF5bqX!5e0!3m2!1sen!2suk!4v1728568282518!5m2!1sen!2suk"
            width="600"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default StorePage
