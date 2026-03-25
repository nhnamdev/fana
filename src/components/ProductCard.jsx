import React from 'react'

export default function ProductCard({ product, onAddToCart }) {
  const { name, price, oldPrice, img, img2, badge, badgeType, stars } = product
  const starStr = '★'.repeat(stars) + '☆'.repeat(5 - stars)

  return (
    <div className="product-card">
      <div className="product-img">
        {badge && <span className={`badge ${badgeType || ''}`}>{badge}</span>}
        <img src={img} alt={name} loading="lazy" />
        <img src={img2} alt={name} className="img-hover" loading="lazy" />
        <div className="product-actions">
          <button onClick={() => onAddToCart(product)}>
            <i className="fa fa-cart-plus" /> Thêm vào giỏ
          </button>
          <button className="btn-wish"><i className="fa fa-heart" /></button>
        </div>
      </div>
      <div className="product-info">
        <h3><a href="#">{name}</a></h3>
        <div className="product-price">
          {oldPrice && <del>{oldPrice}</del>}
          {oldPrice ? <ins>{price}</ins> : price}
        </div>
        <div className="stars">{starStr}</div>
      </div>
    </div>
  )
}
