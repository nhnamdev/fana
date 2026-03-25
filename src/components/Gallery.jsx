import React from 'react'

const imgs = [
  'https://stylethread.monamedia.net/wp-content/uploads/2022/08/gallery-01.jpg',
  'https://stylethread.monamedia.net/wp-content/uploads/2022/08/gallery-02.jpg',
  'https://stylethread.monamedia.net/wp-content/uploads/2022/08/gallery-03.jpg',
  'https://stylethread.monamedia.net/wp-content/uploads/2022/08/gallery-04.jpg',
]

export default function Gallery() {
  return (
    <section className="section bg-light reveal">
      <div className="container">
        <h2 className="section-title">Theo dõi mạng xã hội</h2>
        <div className="gallery-grid">
          {imgs.map((src, i) => (
            <a key={i} href="#" className="gallery-item">
              <img src={src} alt={`Gallery ${i + 1}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
