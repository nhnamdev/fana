import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AuthPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div>
      <div className="breadcrumb-hero">
        <div className="container">
          <h1>Tài khoản của tôi</h1>
          <div className="breadcrumb">
            <Link to="/">Trang Chủ</Link> &gt; <span>Tài khoản</span>
          </div>
        </div>
      </div>

      <div className="container auth-container">
        <div className="account-dashboard">
          <div className="account-sidebar">
            <div className="account-user">
              <div className="user-avatar">
                <i className="fa fa-user" />
              </div>
              <h3>{user?.username || 'User'}</h3>
              <p>{user?.email || 'user@example.com'}</p>
            </div>
            <nav className="account-nav">
              <a href="#" className="active"><i className="fa fa-dashboard" /> Bảng điều khiển</a>
              <a href="#"><i className="fa fa-shopping-bag" /> Đơn hàng</a>
              <a href="#"><i className="fa fa-map-marker" /> Địa chỉ</a>
              <a href="#"><i className="fa fa-user-circle" /> Chi tiết tài khoản</a>
              <a href="#" onClick={handleLogout}><i className="fa fa-sign-out" /> Đăng xuất</a>
            </nav>
          </div>

          <div className="account-content">
            <h2>Bảng điều khiển</h2>
            <p>
              Xin chào <strong>{user?.username}</strong> (không phải <strong>{user?.username}</strong>? 
              <a href="#" onClick={handleLogout}> Đăng xuất</a>)
            </p>
            <p>
              Từ bảng điều khiển tài khoản của bạn, bạn có thể xem <a href="#">đơn hàng gần đây</a>, 
              quản lý <a href="#">địa chỉ giao hàng và thanh toán</a>, và <a href="#">chỉnh sửa mật khẩu 
              và chi tiết tài khoản</a>.
            </p>

            <div className="account-stats">
              <div className="stat-box">
                <i className="fa fa-shopping-bag" />
                <div>
                  <h4>0</h4>
                  <p>Đơn hàng</p>
                </div>
              </div>
              <div className="stat-box">
                <i className="fa fa-heart" />
                <div>
                  <h4>0</h4>
                  <p>Yêu thích</p>
                </div>
              </div>
              <div className="stat-box">
                <i className="fa fa-map-marker" />
                <div>
                  <h4>0</h4>
                  <p>Địa chỉ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
