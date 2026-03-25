import React from 'react'

const cats = [
  { img: 'https://stylethread.monamedia.net/wp-content/uploads/2022/08/cat-01.jpg', label: 'Áo sơ mi', count: 12 },
  { img: 'https://stylethread.monamedia.net/wp-content/uploads/2022/08/cat-02.jpg', label: 'Áo thun', count: 7 },
  { img: 'https://stylethread.monamedia.net/wp-content/uploads/2022/08/cat-03.jpg', label: 'Quần jean', count: 8 },
  { img: 'https://stylethread.monamedia.net/wp-content/uploads/2022/08/cat-04.jpg', label: 'Váy', count: 14 },
]

export default function Categories() {
  return (
    <section className="section reveal">
      <div className="container">
        <h2 className="section-title">Danh mục sản phẩm</h2>
        <p className="section-subtitle">Thời trang phong cách hãy là chính mình</p>
        <div className="categories-grid">
          {cats.map((c, i) => (
            <a key={i} href="#" className="cat-item">
              <img src={c.img} alt={c.label} />
              <div className="cat-label">{c.label} <span>{c.count}</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
