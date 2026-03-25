import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ cartCount }) {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <nav className="main-nav">
          <Link to="/">Trang chủ</Link>
          <a href="#">Giới thiệu</a>
          <div className="nav-dropdown">
            <Link to="/shop">Sản phẩm <i className="fa fa-chevron-down" /></Link>
            <div className="dropdown-menu-custom">
              <div className="dropdown-col">
                <h4>Phụ kiện</h4>
                <a href="#">Túi xách</a>
                <a href="#">Nón</a>
                <a href="#">Nội y</a>
                <a href="#">Khăn</a>
                <a href="#">Giày</a>
              </div>
              <div className="dropdown-col">
                <h4>Quần áo</h4>
                <a href="#">Áo sơ mi</a>
                <a href="#">Áo thun</a>
                <a href="#">Áo kiểu</a>
                <a href="#">Quần jean</a>
                <a href="#">Váy</a>
              </div>
            </div>
          </div>
          <Link to="/contact">Liên hệ</Link>
        </nav>
        <Link to="/" className="logo">
          <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/01/logo.svg" alt="Fana" />
        </Link>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => setSearchOpen(o => !o)}>
            <i className="fa fa-magnifying-glass" />
          </button>
          <Link to="/login" className="icon-btn"><i className="fa fa-user" /></Link>
          <a href="#" className="icon-btn"><i className="fa fa-heart" /></a>
          <span className="divider-v" />
          <Link to="/cart" className="icon-btn cart-btn">
            <i className="fa fa-cart-shopping" />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
      <div className={`search-bar${searchOpen ? ' open' : ''}`}>
        <div className="container">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
          <button><i className="fa fa-magnifying-glass" /></button>
        </div>
      </div>
    </header>
  )
}
