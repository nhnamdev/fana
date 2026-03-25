import React from 'react'
import ProductCard from './ProductCard'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section className="section bg-light reveal">
      <div className="container">
        <h2 className="section-title">Sản phẩm bán chạy</h2>
        <div className="products-grid">
          {products.slice(0, 5).map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
        </div>
        <div className="text-center mt-3">
          <a href="#" className="btn-outline">Xem thêm</a>
        </div>
      </div>
    </section>
  )
}
