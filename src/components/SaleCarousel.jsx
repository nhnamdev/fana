import React, { useRef, useState } from 'react'
import ProductCard from './ProductCard'

export default function SaleCarousel({ products, onAddToCart }) {
  const [offset, setOffset] = useState(0)
  const trackRef = useRef(null)
  const saleItems = products.filter(p => p.oldPrice)
  const visible = 5

  const move = (dir) => {
    const max = saleItems.length - visible
    const next = Math.max(0, Math.min(offset + dir, max))
    setOffset(next)
    const cardWidth = trackRef.current.children[0]?.offsetWidth + 20 || 0
    trackRef.current.style.transform = `translateX(-${next * cardWidth}px)`
  }

  return (
    <section className="section bg-light reveal">
      <div className="container">
        <h2 className="section-title">Đang khuyến mãi</h2>
        <div className="products-carousel">
          <button className="carousel-btn" onClick={() => move(-1)}><i className="fa fa-chevron-left" /></button>
          <div className="products-track-wrapper">
            <div className="products-track" ref={trackRef}>
              {saleItems.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
            </div>
          </div>
          <button className="carousel-btn" onClick={() => move(1)}><i className="fa fa-chevron-right" /></button>
        </div>
      </div>
    </section>
  )
}
