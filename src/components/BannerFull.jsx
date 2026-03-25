import React from 'react'

export default function BannerFull({ img, tag, title, desc, btnText, btnClass = 'btn-primary', light = false }) {
  return (
    <section className="banner-full">
      <img src={img} alt={title} />
      <div className="banner-full-content">
        <p className={`banner-tag${light ? ' light' : ''}`}>{tag}</p>
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
        <a href="#" className={btnClass}>{btnText}</a>
      </div>
    </section>
  )
}
