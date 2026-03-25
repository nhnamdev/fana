import React from 'react'

const posts = [
  { img: 'https://stylethread.monamedia.net/wp-content/uploads/2022/01/blog-07-500x333.jpg', date: '4 Tháng Mười Hai, 2022', title: 'How to choose the right customer for your photo?', excerpt: 'The About Love film by acclaimed director Emmanuel Adjei features a soulful musical performance...' },
  { img: 'https://stylethread.monamedia.net/wp-content/uploads/2022/01/blog-06-500x333.jpg', date: '4 Tháng Mười, 2022', title: 'Will perfect your fashion', excerpt: 'The About Love film by acclaimed director Emmanuel Adjei features a soulful musical performance...' },
  { img: 'https://stylethread.monamedia.net/wp-content/uploads/2022/01/blog-04-500x333.jpg', date: '4 Tháng Tám, 2022', title: 'How To Start A Business With fashion', excerpt: 'The About Love film by acclaimed director Emmanuel Adjei features a soulful musical performance...' },
  { img: 'https://stylethread.monamedia.net/wp-content/uploads/2022/01/blog-03-500x333.jpg', date: '4 Tháng Sáu, 2022', title: "A Beginner's Guide To Your Fashion", excerpt: 'The About Love film by acclaimed director Emmanuel Adjei features a soulful musical performance...' },
]

export default function Blog() {
  return (
    <section className="section bg-light reveal">
      <div className="container">
        <h2 className="section-title">Phối đồ chuẩn xu hướng 2024</h2>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <article key={i} className="blog-card">
              <a href="#"><img src={p.img} alt={p.title} /></a>
              <div className="blog-info">
                <span className="blog-date"><i className="fa fa-clock" /> {p.date}</span>
                <h3><a href="#">{p.title}</a></h3>
                <p>{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
