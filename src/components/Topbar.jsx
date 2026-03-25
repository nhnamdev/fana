import React from 'react'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span>Hỗ trợ khách hàng: <a href="tel:0313728397">0313728397</a></span>
        <span className="topbar-center">Miễn phí vận chuyển cho đơn hàng trên 500k &nbsp;–&nbsp; MUA NGAY</span>
        <div className="topbar-right">
          <a href="#"><i className="fa fa-location-dot" /> Địa chỉ cửa hàng</a>
          <a href="#"><i className="fa fa-cart-shopping" /> Theo dõi đơn hàng</a>
        </div>
      </div>
    </div>
  )
}
