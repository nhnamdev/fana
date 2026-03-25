import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, removeFromCart, updateQty, cartTotal } = useCart()
  const [coupon, setCoupon] = useState('')

  const shipping = 30000
  const total = cartTotal + (items.length > 0 ? shipping : 0)

  return (
    <div className="cart-page">
      {/* Breadcrumb */}
      <div className="contact-breadcrumb">
        <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/01/breadcrumbs-woo.jpg" alt="" />
        <div className="contact-breadcrumb-overlay">
          <div className="container">
            <h1 className="page-title">Giỏ hàng</h1>
            
          </div>
        </div>
      </div>

      <div className="container cart-container">
        <div className={`cart-left${items.length === 0 ? ' cart-left--full' : ''}`}>
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="woocommerce-info">
                Chưa có sản phẩm nào trong giỏ hàng.
              </div>
              <Link to="/shop" className="btn-primary cart-return-btn">
                Quay trở lại cửa hàng
              </Link>
            </div>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tạm tính</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id}>
                      <td>
                        <button className="cart-remove" onClick={() => removeFromCart(item.id)}>
                          <i className="fa fa-xmark" />
                        </button>
                      </td>
                      <td>
                        <div className="cart-product">
                          <img src={item.img} alt={item.name} />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="cart-price">
                        {item.price}
                      </td>
                      <td>
                        <div className="qty-stepper">
                          <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                          <input
                            type="number"
                            value={item.qty}
                            min="1"
                            onChange={e => updateQty(item.id, parseInt(e.target.value) || 1)}
                          />
                          <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                        </div>
                      </td>
                      <td className="cart-subtotal">
                        {(item.priceNum * item.qty).toLocaleString('vi-VN')}₫
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-actions">
                <Link to="/shop" className="btn-outline">
                  <i className="fa fa-arrow-left" /> Tiếp tục mua sắm
                </Link>
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-right">
            <div className="cart-coupon">
              <h3>Mã giảm giá</h3>
              <p>Nếu bạn có mã giảm giá, hãy nhập vào đây.</p>
              <div className="coupon-input">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                />
                <button className="btn-primary">Áp dụng</button>
              </div>
            </div>

            <div className="cart-totals">
              <h3>Tổng giỏ hàng</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Tạm tính</td>
                    <td>{cartTotal.toLocaleString('vi-VN')}₫</td>
                  </tr>
                  <tr>
                    <td>Phí vận chuyển</td>
                    <td>{shipping.toLocaleString('vi-VN')}₫</td>
                  </tr>
                  <tr className="total-row">
                    <td>Tổng cộng</td>
                    <td>{total.toLocaleString('vi-VN')}₫</td>
                  </tr>
                </tbody>
              </table>
              <Link to="/checkout" className="btn-primary btn-checkout">
                Tiến hành thanh toán
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
