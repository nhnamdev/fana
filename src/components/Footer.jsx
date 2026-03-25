import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-services">
        <div className="container footer-services-inner">
          {[
            { icon: 'fa-truck-fast', title: 'Vận chuyển toàn quốc', sub: 'Đồng giá 50k' },
            { icon: 'fa-store', title: 'Hệ thống cửa hàng', sub: '100 cửa hàng trên toàn hệ thống' },
            { icon: 'fa-phone-volume', title: 'Hotline: (+84)0313-728-397', sub: 'Hỗ trợ khách hàng tận tâm' },
            { icon: 'fa-rotate-left', title: '7 ngày đổi trả sản phẩm', sub: 'Nếu sản phẩm lỗi' },
          ].map((s, i) => (
            <div key={i} className="service-item">
              <i className={`fa ${s.icon}`} />
              <div><strong>{s.title}</strong><p>{s.sub}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-links">
        <div className="container footer-links-inner">
          <div className="footer-col">
            <h4>Danh mục</h4>
            {['Giới thiệu', 'Sản phẩm', 'Tin tức', 'Liên hệ'].map(l => <a key={l} href="#">{l}</a>)}
          </div>
          <div className="footer-col">
            <h4>Liên kết</h4>
            {['Chính sách đổi trả', 'Chính sách giao hàng', 'Chính sách bảo mật', 'Điều khoản dịch vụ'].map(l => <a key={l} href="#">{l}</a>)}
          </div>
          <div className="footer-col">
            <h4>Liên hệ</h4>
            <p>Tìm địa chỉ của chúng tôi. <a href="#">Xem ngay</a></p>
            <p><a href="tel:0313728397">(+84) 0313-728-397</a></p>
            <p><a href="mailto:info@themona.global">info@themona.global</a></p>
          </div>
          <div className="footer-col">
            <h4>Địa chỉ</h4>
            <p><strong>Địa chỉ:</strong> 1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM</p>
            <p><strong>Giờ hoạt động:</strong> 09:00 – 20:00</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© Thiết kế và lập trình bởi <strong>MonaMedia</strong></p>
        </div>
      </div>
    </footer>
  )
}
