import React from 'react'
import ProductCard from './ProductCard'

export default function WomenSection({ products, onAddToCart }) {
  const items = products.filter(p => p.cat === 'dresses' || p.cat === 'shirts').slice(0, 4)
  return (
    <section className="section reveal from-left">
      <div className="container">
        <h2 className="section-title">Bộ thời trang phái nữ</h2>
        <p className="section-subtitle">Thời trang phong cách hãy là chính mình</p>
      </div>
      <div className="container two-col-banner">
        <div className="banner-card">
          <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/08/banner-02.jpg" alt="Women banner" />
          <div className="banner-card-content left">
            <p className="tag">Bộ sưu tập phổ biến 2024</p>
            <h3>Thời trang <br />Mùa hè</h3>
            <a href="#" className="btn-primary">Mua ngay</a>
          </div>
        </div>
        <div className="products-grid-2x2">
          {items.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
        </div>
      </div>
    </section>
  )
}
