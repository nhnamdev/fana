import React, { useState, useEffect } from 'react'

const slides = [
  {
    bg: '#f7f4ef',
    subtitle: 'Ngày Hè Rực Rỡ',
    title: 'Bộ sưu tập phiên bản giới hạn mới nhất',
    desc: 'Thời trang đi biển cho mọi cô gái. Hòa mình vào mùa hè, tỏa sáng dưới nắng!',
    img: 'https://stylethread.monamedia.net/wp-content/uploads/revslider/slider-1/img-slider1-011.jpg',
  },
  {
    bg: '#f4ebe6',
    subtitle: 'Chào Mùa Hè',
    title: 'Bộ sưu tập giới hạn đã có mặt',
    desc: 'Trang phục biển cho phái đẹp, thêm sắc màu cho mùa hè của bạn!',
    img: 'https://stylethread.monamedia.net/wp-content/uploads/revslider/slider-1/img-slider3-011.png',
  },
  {
    bg: '#e8d9d0',
    subtitle: 'Đón Chào Ngày Mới',
    title: 'Bộ sưu tập mới nhất dành cho bạn',
    desc: 'Thời trang biển, phong cách trẻ trung. Hãy là chính bạn giữa nắng vàng!',
    img: 'https://stylethread.monamedia.net/wp-content/uploads/revslider/slider-1/img-slider2-011.png',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero-slider">
      {slides.map((s, i) => (
        <div key={i} className={`slide${i === current ? ' active' : ''}`} style={{ backgroundColor: s.bg }}>
          <div className="slide-content">
            <div className="slide-text">
              <p className="slide-subtitle">{s.subtitle}</p>
              <h1>{s.title}</h1>
              <p className="slide-desc">{s.desc}</p>
              <a href="#" className="btn-primary">Khám Phá Ngay</a>
            </div>
            <div className="slide-image">
              <img src={s.img} alt={s.subtitle} />
            </div>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <span key={i} className={`dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  )
}
