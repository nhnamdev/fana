import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">
      {/* Breadcrumb */}
      <div className="contact-breadcrumb">
        <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/01/breadcrumbs-woo.jpg" alt="" />
        <div className="contact-breadcrumb-overlay">
          <div className="container">
            <h1 className="page-title">Liên hệ</h1>
            <ol className="breadcrumb">
              <li><Link to="/">Trang chủ</Link></li>
              <li className="sep">/</li>
              <li>Liên hệ</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="contact-hero">
        <div className="container contact-hero-inner">
          <div className="contact-hero-text">
            <h2>Để lại thông tin liên hệ nếu bạn có câu hỏi hoặc thắc mắc</h2>
            <p>Chúng tôi luôn nỗ lực mỗi ngày để mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất của chúng tôi.</p>
          </div>
          <div className="contact-hero-img">
            <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/09/contact-01.png" alt="Contact" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container contact-layout">
        {/* Form */}
        <div className="contact-form-wrap">
          <h3 className="contact-section-title">Gửi liên hệ</h3>
          <p className="contact-section-sub">Thời gian làm việc: Thứ Hai - Chủ Nhật, 10:00 AM - 9:00 PM</p>

          {sent && <div className="contact-success">Gửi thành công! Chúng tôi sẽ liên hệ lại sớm.</div>}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <input
                type="text" name="name" placeholder="Họ tên"
                value={form.name} onChange={handleChange} required
              />
              <input
                type="email" name="email" placeholder="Email"
                value={form.email} onChange={handleChange} required
              />
            </div>
            <div className="contact-form-row">
              <input
                type="tel" name="phone" placeholder="Số điện thoại"
                value={form.phone} onChange={handleChange} required
              />
              <input
                type="text" name="subject" placeholder="Chủ đề"
                value={form.subject} onChange={handleChange} required
              />
            </div>
            <textarea
              name="message" placeholder="Nội dung" rows={6}
              value={form.message} onChange={handleChange}
            />
            <button type="submit" className="btn-contact-submit">Gửi liên hệ</button>
          </form>
        </div>

        {/* Sidebar info */}
        <aside className="contact-info-wrap">
          <h3 className="contact-section-title">Thông tin liên hệ</h3>
          <ul className="contact-info-list">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:info@themona.global">info@themona.global</a>
            </li>
            <li>
              <i className="fa fa-phone" />
              <a href="tel:0313728397">(+84) 0313-728-397</a>
            </li>
            <li>
              <i className="fa fa-location-dot" />
              <span>1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM</span>
            </li>
            <li>
              <i className="fa fa-file-lines" />
              <a href="tel:0313728397">(+84) 0313-728-397</a>
            </li>
          </ul>

          <hr className="contact-divider" />

          <h3 className="contact-section-title">Theo dõi mạng xã hội</h3>
          <ul className="contact-social-list">
            <li><a href="#"><i className="fa-brands fa-facebook" /> Facebook</a></li>
            <li><a href="#"><i className="fa-brands fa-twitter" /> Twitter</a></li>
            <li><a href="#"><i className="fa-brands fa-instagram" /> Instagram</a></li>
            <li><a href="#"><i className="fa-brands fa-pinterest" /> Pinterest</a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin" /> Linkedin</a></li>
          </ul>
        </aside>
      </div>

      {/* Services bar */}
      {/* <div className="contact-services">
        <div className="container contact-services-inner">
          <div className="contact-service-item">
            <i className="fa fa-truck-fast" />
            <div>
              <h4>Vận chuyển toàn quốc</h4>
              <p>Đồng giá 50k</p>
            </div>
          </div>
          <div className="contact-service-item">
            <i className="fa fa-store" />
            <div>
              <h4>Hệ thống cửa hàng</h4>
              <p>100 cửa hàng trên toàn hệ thống</p>
            </div>
          </div>
          <div className="contact-service-item">
            <i className="fa fa-phone-volume" />
            <div>
              <h4>Hotline: (+84)0313-728-397</h4>
              <p>Hỗ trợ khách hàng tận tâm</p>
            </div>
          </div>
          <div className="contact-service-item">
            <i className="fa fa-rotate-left" />
            <div>
              <h4>7 ngày đổi trả sản phẩm</h4>
              <p>Nếu sản phẩm lỗi</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
