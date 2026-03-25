import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { products, menProducts } from './data/products'
import useScrollReveal from './hooks/useScrollReveal'
import { CartProvider, useCart } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

import Topbar from './components/Topbar'
import Header from './components/Header'
import Hero from './components/Hero'
import SaleCarousel from './components/SaleCarousel'
import NewestProducts from './components/NewestProducts'
import Bestsellers from './components/Bestsellers'
import BannerFull from './components/BannerFull'
import Categories from './components/Categories'
import WomenSection from './components/WomenSection'
import DoubleBanner from './components/DoubleBanner'
import MenSection from './components/MenSection'
import Blog from './components/Blog'
import Gallery from './components/Gallery'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import SideWidgets from './components/SideWidgets'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import TrackingPage from './pages/TrackingPage'
import AuthPage from './pages/AuthPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function HomePage({ onAddToCart }) {
  useScrollReveal()
  return (
    <>
      <Hero />
      <SaleCarousel products={products} onAddToCart={onAddToCart} />
      <NewestProducts products={products} onAddToCart={onAddToCart} />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <BannerFull
        img="https://stylethread.monamedia.net/wp-content/uploads/2022/09/banner-01.jpg"
        tag="Thời Trang Đi Biển"
        title="Trang phục nữ duyên dáng tự tin tỏa sáng cùng nắng hè!"
        btnText="Khám phá ngay"
      />
      <Categories />
      <WomenSection products={products} onAddToCart={onAddToCart} />
      <DoubleBanner />
      <MenSection products={menProducts} onAddToCart={onAddToCart} />
      <Blog />
      <BannerFull
        img="https://stylethread.monamedia.net/wp-content/uploads/2022/08/banner-06.jpg"
        tag="Bừng Sáng Cùng Mùa Hè"
        title="Phiên bản giới hạn, độc đáo cho riêng bạn"
        desc="Trang phục biển hoàn hảo cho mùa hè rực rỡ!"
        btnText="Xem Bộ Sưu Tập"
        btnClass="btn-white"
        light
      />
      <Gallery />
      <Newsletter />
    </>
  )
}

function AppInner() {
  const { addToCart, cartCount } = useCart()
  const [toast, setToast] = useState('')

  const handleAddToCart = useCallback((product) => {
    addToCart(product)
    setToast('Đã thêm vào giỏ hàng!')
    setTimeout(() => setToast(''), 2000)
  }, [addToCart])

  return (
    <>
      <Topbar />
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/tracking-order" element={<TrackingPage />} />
        <Route path="/account" element={<ProtectedRoute><AuthPage /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
      <SideWidgets />
      {toast && <div className="toast show">{toast}</div>}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <AppInner />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
