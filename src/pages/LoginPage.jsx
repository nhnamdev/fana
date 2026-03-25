import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '', remember: false })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Giả lập đăng nhập thành công
    login({ username: form.username, email: form.username })
    navigate('/account')
  }

  const handleSocialLogin = (provider) => {
    // Giả lập đăng nhập social
    login({ username: `User from ${provider}`, email: `user@${provider}.com` })
    navigate('/account')
  }

  return (
    <div>
      <div className="breadcrumb-hero">
        <div className="container">
          <h1>Đăng nhập</h1>
          <div className="breadcrumb">
            <Link to="/">Trang Chủ</Link> &gt; <span>Đăng nhập</span>
          </div>
        </div>
      </div>

      <div className="container auth-container">
        <div className="auth-box-center">
          <h2 className="auth-title">Đăng nhập tài khoản</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tên tài khoản hoặc địa chỉ email <span className="required">*</span></label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
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

            <div className="form-actions">
              <button type="submit" className="btn auth-btn">ĐĂNG NHẬP</button>
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                />
                <span>Ghi nhớ mật khẩu</span>
              </label>
            </div>

            <a href="#" className="forgot-password">Quên mật khẩu?</a>
          </form>

          <div className="auth-divider">
            <span>Hoặc đăng nhập với</span>
          </div>

          <div className="social-login">
            <button 
              className="social-btn google-btn" 
              onClick={() => handleSocialLogin('google')}
            >
              <i className="fab fa-google" />
              <span>Đăng nhập với Google</span>
            </button>
            <button 
              className="social-btn facebook-btn" 
              onClick={() => handleSocialLogin('facebook')}
            >
              <i className="fab fa-facebook-f" />
              <span>Đăng nhập với Facebook</span>
            </button>
          </div>

          <div className="auth-footer">
            Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
