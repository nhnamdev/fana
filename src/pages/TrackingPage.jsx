import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TrackingPage() {
  const [form, setForm] = useState({ orderid: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="tracking-page">
      {/* Breadcrumb */}
     <div className="contact-breadcrumb">
        <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/01/breadcrumbs-woo.jpg" alt="" />
        <div className="contact-breadcrumb-overlay">
          <div className="container">
            <h1 className="page-title">Tracking</h1>
            
          </div>
        </div>
      </div>

      <div className="container tracking-container">
        <div className="tracking-form-wrap">
          <p className="tracking-desc">
            Để theo dõi đơn hàng của bạn xin vui lòng nhập ID đơn hàng vào ô dưới đây và nhấn nút "Theo dõi".
            ID đơn hàng đã được gửi cho bạn qua biên lai và qua email xác nhận mà bạn nhận được.
          </p>

          {submitted ? (
            <div className="woocommerce-info tracking-not-found">
              Không tìm thấy đơn hàng với ID <strong>{form.orderid}</strong>. Vui lòng kiểm tra lại thông tin.
            </div>
          ) : null}

          <form className="tracking-form" onSubmit={handleSubmit}>
            <div className="tracking-form-row">
              <div className="tracking-field">
                <label htmlFor="orderid">ID Đơn hàng</label>
                <input
                  type="text"
                  id="orderid"
                  placeholder="Tìm thấy trong email xác nhận đơn hàng của bạn."
                  value={form.orderid}
                  onChange={e => setForm(f => ({ ...f, orderid: e.target.value }))}
                  required
                />
              </div>
              <div className="tracking-field">
                <label htmlFor="order_email">Email thanh toán</label>
                <input
                  type="email"
                  id="order_email"
                  placeholder="Email được sử dụng trong quá trình thanh toán."
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn tracking-btn">THEO DÕI</button>
          </form>
        </div>
      </div>
    </div>
  )
}
