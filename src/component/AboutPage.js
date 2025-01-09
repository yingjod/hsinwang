// src/AboutPage.js
import React from 'react'

const AboutPage = () => {
  return (
    <section className="about" id="about">
      <div className="heading">
        <span>關於我們</span>
        <h1>誠心誠意的麵包與甜點，想成為你們的日常</h1>
      </div>

      <section className="about-container">
        <div className="about-text">
          <h3>「欣旺」，代表的是 Louis 與 Claire 的新希望，</h3>
          <h3>也是他們共同打造的夢想。</h3>
          <h3>兩位創辦人，帶著對麵包與甜點的熱情，</h3>
          <h3>從不同的背景出發，</h3>
          <h3>最終在這裡相遇，開始了一段全新的旅程。</h3>
        </div>

        <div className="about-img-1">
          <img src="img/IMG0167.jpg" alt="Bakery" />
        </div>

        <div className="about-text-1">
          <h3>欣旺麵包店秉持茶道「一期一會」的精神，珍惜每一位顧客與我們相遇的瞬間。</h3>
          <h3>我們專注於歐洲傳統風味，使用自製天然酵種和新鮮食材，打造真誠的味道。</h3>
        </div>

        <div className="about-img-2">
          <img src="img/IMG9368.jpg" alt="Bakery products" />
        </div>

        <div className="about-text-2">
          <h3>兩人背景不同，一個專注麵包，一個專長甜點，</h3>
          <h3>但在彼此的專長中找到平衡，為顧客帶來獨特的味覺體驗。</h3>
          <h3>我們希望欣旺成為顧客感受溫暖的地方，</h3>
          <h3>用美味的麵包和甜點，陪伴每個美好日常。</h3>
        </div>
      </section>
    </section>
  )
}

export default AboutPage
