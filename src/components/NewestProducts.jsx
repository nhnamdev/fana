import React, { useState } from 'react'
import ProductCard from './ProductCard'

const tabs = [
  { key: 'clothing', label: 'Bộ sưu tập' },
  { key: 'accessories', label: 'Phụ kiện' },
  { key: 'dresses', label: 'Váy' },
  { key: 'shirts', label: 'Áo sơ mi' },
  { key: 'tshirts', label: 'Áo thun' },
]

export default function NewestProducts({ products, onAddToCart }) {
  const [active, setActive] = useState('clothing')
  const filtered = products.filter(p => p.cat === active).slice(0, 5)

  return (
    <section className="section reveal">
      <div className="container">
        <div className="section-header-tabs">
          <h2 className="section-title">Sản phẩm mới nhất</h2>
          <div className="tabs">
            {tabs.map(t => (
              <button key={t.key} className={`tab${active === t.key ? ' active' : ''}`} onClick={() => setActive(t.key)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="products-grid">
          {filtered.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
        </div>
        <div className="text-center mt-3">
          <a href="#" className="btn-outline">Xem tất cả</a>
        </div>
      </div>
    </section>
  )
}
