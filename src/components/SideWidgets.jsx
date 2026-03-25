import { useState, useEffect } from 'react'

export default function SideWidgets() {
  const [scrolled, setScrolled] = useState(false)
  const [zaloOpen, setZaloOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="side-widgets">
      <button
        className={`back-to-top${scrolled ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Lên đầu trang"
      >
        <i className="fa fa-arrow-up" />
      </button>

      <div className="btn-app-fixed-zalo">
        <a className="btn-app-fixed-icon" aria-label="chat-zalo" href="#" onClick={e => { e.preventDefault(); setZaloOpen(o => !o) }}>
          <img src="https://owen.cdn.vccloud.vn/media/wysiwyg/popup_zalo.png" alt="Zalo" />
        </a>
        {zaloOpen && (
          <div className="btn-app-fixed-content open">
            <span className="close-tai-app" onClick={() => setZaloOpen(false)}>✕</span>
            <a href="https://zalo.me/2673878658060360278" target="_blank" rel="noopener">
              <img src="https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/POPUP_ZALO.png" alt="Chat Zalo" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
