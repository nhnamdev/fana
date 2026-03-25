import React from 'react'
import ProductCard from './ProductCard'

export default function MenSection({ products, onAddToCart }) {
  return (
    <section className="section reveal from-right">
      <div className="container">
        <h2 className="section-title">Dành cho nam giới</h2>
        <p className="section-subtitle">Các kiểu dáng sang trọng, lịch lãm dành cho phái mạnh</p>
      </div>
      <div className="container two-col-banner">
        <div className="products-grid-2x2">
          {products.slice(0, 4).map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
        </div>
        <div className="banner-card">
          <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/08/banner-05.jpg" alt="Men banner" />
          <div className="banner-card-content left">
            <p className="tag">Thời trang xu hướng 2024</p>
            <h3>Giảm ngay 20% <br />cho khách hàng<br />mua lần đầu</h3>
            <a href="#" className="btn-primary">Mua ngay</a>
          </div>
        </div>
      </div>
    </section>
  )
}
