import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RegisterPage() {
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' })
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Mật khẩu không khớp!')
      return
    }
    // Giả lập đăng ký thành công
    register({ username: form.email.split('@')[0], email: form.email })
    navigate('/account')
  }

  const handleSocialRegister = (provider) => {
    // Giả lập đăng ký social
    register({ username: `User from ${provider}`, email: `user@${provider}.com` })
    navigate('/account')
  }

  return (
    <div>
      <div className="breadcrumb-hero">
        <div className="container">
          <h1>Đăng ký</h1>
          <div className="breadcrumb">
            <Link to="/">Trang Chủ</Link> &gt; <span>Đăng ký</span>
          </div>
        </div>
      </div>

      <div className="container auth-container">
        <div className="auth-box-center">
          <h2 className="auth-title">Tạo tài khoản mới</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Địa chỉ email <span className="required">*</span></label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Mật khẩu <span className="required">*</span></label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Xác nhận mật khẩu <span className="required">*</span></label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                required
              />
            </div>

            <p className="auth-note">
              Thông tin cá nhân của bạn sẽ được sử dụng để tăng trải nghiệm sử dụng website, 
              quản lý truy cập vào tài khoản của bạn, và cho các mục đích cụ thể khác được mô tả trong 
              <a href="#"> chính sách riêng tư</a> của chúng tôi.
            </p>

            <button type="submit" className="btn auth-btn full-width">ĐĂNG KÝ</button>
          </form>

          <div className="auth-divider">
            <span>Hoặc đăng ký với</span>
          </div>

          <div className="social-login">
            <button 
              className="social-btn google-btn" 
              onClick={() => handleSocialRegister('google')}
            >
              <i className="fab fa-google" />
              <span>Đăng ký với Google</span>
            </button>
            <button 
              className="social-btn facebook-btn" 
              onClick={() => handleSocialRegister('facebook')}
            >
              <i className="fab fa-facebook-f" />
              <span>Đăng ký với Facebook</span>
            </button>
          </div>

          <div className="auth-footer">
            Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
