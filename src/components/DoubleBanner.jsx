import React from 'react'

export default function DoubleBanner() {
  return (
    <section className="section reveal">
      <div className="container two-col-banner">
        <div className="banner-card">
          <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/08/banner-03.jpg" alt="Banner 3" />
          <div className="banner-card-content left">
            <p className="tag">Bừng Sáng Cùng Mùa Hè</p>
            <h3>Phiên bản giới hạn, độc đáo <br />cho riêng bạn</h3>
            <p className="desc">Trang phục biển hoàn hảo cho mùa hè rực rỡ!</p>
            <a href="#" className="btn-primary">Khám phá ngay</a>
          </div>
        </div>
        <div className="banner-card">
          <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/08/banner-04.jpg" alt="Banner 4" />
          <div className="banner-card-content right-bottom">
            <p className="tag">Giảm giá 9/9</p>
            <h3>Lễ Hội Săn Sale Dành cho Nam</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
