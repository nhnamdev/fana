import { useState, useMemo } from 'react'
import { shopProducts, categories } from '../data/shopProducts'
import ProductCard from '../components/ProductCard'

const PER_PAGE = 12

const sortOptions = [
  { value: 'default', label: 'Mặc định' },
  { value: 'popularity', label: 'Phổ biến' },
  { value: 'date', label: 'Mới nhất' },
  { value: 'price', label: 'Giá thấp đến cao' },
  { value: 'price-desc', label: 'Giá cao xuống thấp' },
]

const colors = ['#1a1a1a', '#333', '#e91e8c']
const sizes = ['S', 'M', 'L', 'XL']
const tags = ['accessories', 'clothing', 'fashion', 'jeans', 'Menswear', 'shoes', 'T-shirt', 'Tops', 'Trousers', 'Womenswear']

function parsePrice(str) {
  return parseInt(str.replace(/[^0-9]/g, '')) || 0
}

export default function ShopPage({ onAddToCart }) {
  const [activeCat, setActiveCat] = useState('')
  const [onSale, setOnSale] = useState(false)
  const [inStock, setInStock] = useState(false)
  const [sortBy, setSortBy] = useState('default')
  const [page, setPage] = useState(1)
  const [priceMax, setPriceMax] = useState(420000)
  const [activeColor, setActiveColor] = useState('')
  const [activeSize, setActiveSize] = useState('')

  const filtered = useMemo(() => {
    let list = [...shopProducts]
    if (activeCat) list = list.filter(p => p.cat === activeCat)
    if (onSale) list = list.filter(p => p.oldPrice)
    if (inStock) list = list.filter(p => p.inStock)
    list = list.filter(p => parsePrice(p.price) <= priceMax)
    if (sortBy === 'price') list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
    if (sortBy === 'price-desc') list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
    if (sortBy === 'popularity') list.sort((a, b) => b.stars - a.stars)
    return list
  }, [activeCat, onSale, inStock, sortBy, priceMax])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handleCatChange = (slug) => {
    setActiveCat(slug === activeCat ? '' : slug)
    setPage(1)
  }

  return (
    <div className="shop-page">
      {/* Breadcrumb */}
      <div className="shop-breadcrumb">
        <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/01/breadcrumbs-woo.jpg" alt="" />
        <div className="shop-breadcrumb-overlay">
          <div className="container">
            <h1 className="page-title">Sản phẩm</h1>
            <ol className="breadcrumb">
              <li><a href="/">Trang chủ</a></li>
              <li className="sep">/</li>
              <li>Sản phẩm</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Top banner */}
      <div className="container">
        <div className="shop-top-banner">
          <img src="https://stylethread.monamedia.net/wp-content/uploads/2022/09/banner-07.jpg" alt="" />
          <div className="shop-top-banner-content">
            <div className="sale-circle">UP TO<br /><strong>-50%</strong></div>
            <div className="banner-text">
              <h3>Sản phẩm nổi tiếng sắp ra mắt</h3>
              <p>Giao hàng miễn phí cho đơn hàng trên 500k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container shop-layout">
        {/* Sidebar */}
        <aside className="shop-sidebar">

          {/* Toolbar count - mobile */}
          <p className="result-count-sidebar">Hiển thị 1–{paged.length} của {filtered.length} sản phẩm</p>

          {/* Categories */}
          <div className="filter-group">
            <h4 className="filter-title">Danh mục sản phẩm</h4>
            <ul className="filter-cat-list">
              <li>
                <label className={`filter-cat-item${activeCat === '' ? ' active' : ''}`}>
                  <input type="radio" name="cat" checked={activeCat === ''} onChange={() => handleCatChange('')} />
                  Chưa phân loại
                </label>
              </li>
              {categories.map(c => (
                <li key={c.slug}>
                  <label className={`filter-cat-item${activeCat === c.slug ? ' active' : ''}`}>
                    <input type="radio" name="cat" checked={activeCat === c.slug} onChange={() => handleCatChange(c.slug)} />
                    {c.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="filter-group">
            <h4 className="filter-title">Giá</h4>
            <input
              type="range"
              min={200000}
              max={420000}
              step={10000}
              value={priceMax}
              onChange={e => { setPriceMax(+e.target.value); setPage(1) }}
              className="price-range"
            />
            <div className="price-range-row">
              <span className="price-range-label">Giá: 260 ₫ — {priceMax.toLocaleString('vi-VN')} ₫</span>
              <button className="btn-filter-apply" onClick={() => setPage(1)}>Lọc</button>
            </div>
          </div>

          {/* Sale / Stock */}
          <div className="filter-group">
            <label className="filter-check">
              <input type="checkbox" checked={onSale} onChange={e => { setOnSale(e.target.checked); setPage(1) }} />
              Khuyến mãi
            </label>
            <label className="filter-check">
              <input type="checkbox" checked={inStock} onChange={e => { setInStock(e.target.checked); setPage(1) }} />
              Còn hàng
            </label>
          </div>

          {/* Color */}
          <div className="filter-group">
            <h4 className="filter-title">Màu sắc</h4>
            <div className="color-swatches">
              {colors.map(c => (
                <button
                  key={c}
                  className={`color-swatch${activeColor === c ? ' active' : ''}`}
                  style={{ background: c }}
                  onClick={() => setActiveColor(activeColor === c ? '' : c)}
                  aria-label={c}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="filter-group">
            <h4 className="filter-title">Kích thước</h4>
            <div className="size-swatches">
              {sizes.map(s => (
                <button
                  key={s}
                  className={`size-swatch${activeSize === s ? ' active' : ''}`}
                  onClick={() => setActiveSize(activeSize === s ? '' : s)}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="filter-group">
            <h4 className="filter-title">Từ khóa phổ biến</h4>
            <div className="tag-cloud">
              {tags.map(t => (
                <a key={t} href="#" className="tag-item">{t}</a>
              ))}
            </div>
          </div>

        </aside>

        {/* Main content */}
        <main className="shop-main">
          {/* Toolbar */}
          <div className="shop-toolbar">
            <p className="result-count">Hiển thị {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} của {filtered.length} kết quả</p>
            <div className="shop-toolbar-right">
              <div className="shop-sort">
                <span>Sắp xếp:</span>
                <select value={sortBy} onChange={e => { setSortBy(e.target.value); setPage(1) }}>
                  {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <div className="view-toggle">
                <button className="view-btn active"><i className="fa fa-grip" /></button>
                <button className="view-btn"><i className="fa fa-list" /></button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="shop-grid">
            {paged.map(p => (
              <div key={p.id} className="shop-product-item">
                {!p.inStock && <span className="out-of-stock-label">Hết hàng</span>}
                <ProductCard product={p} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="shop-pagination">
              {page > 1 && (
                <button className="page-btn" onClick={() => setPage(p => p - 1)}>
                  <i className="fa fa-chevron-left" />
                </button>
              )}
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`page-btn${page === i + 1 ? ' active' : ''}`}
                  onClick={() => setPage(i + 1)}
                >{i + 1}</button>
              ))}
              {page < totalPages && (
                <button className="page-btn" onClick={() => setPage(p => p + 1)}>
                  <i className="fa fa-chevron-right" />
                </button>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
