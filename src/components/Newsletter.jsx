import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  return (
    <section className="newsletter-section">
      <div className="container newsletter-inner">
        <div>
          <p className="newsletter-sub">Newsletter</p>
          <h2>Đăng ký và nhận giảm giá tới <span style={{ color: '#F2431B' }}>20%</span> cho <br />đơn hàng đầu tiên</h2>
        </div>
        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Nhập email..." value={email} onChange={e => setEmail(e.target.value)} />
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    </section>
  )
}
