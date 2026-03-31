import { useState } from 'react'
import '../../styles/CardPortfolio.css'

function CardPortfolio({ label, img, title, desc, tags, link, github }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={`flip-card${flipped ? ' flipped' : ''}`}>
      <div className="flip-card-inner">

        {/* ── FACE AVANT ───────────────────────────────────── */}
        <div className="flip-card-front">
          <div className="card-corner-p-tl"></div>
          <div className="card-corner-p-tr"></div>
          <div className="card-corner-p-bl"></div>
          <div className="card-corner-p-br"></div>
          <div className="portfolio-card__glow"></div>

          <div className="portfolio-img-wrap">
            <img src={img} alt={title} className="portfolio-img" />
            <div className="portfolio-img-overlay"></div>
            <span className="portfolio-label text-uppercase">{label}</span>
          </div>

          <div className="d-flex flex-column p-4 gap-2" style={{ flex: 1 }}>
            <div className="portfolio-title">{title}</div>
            <p className="portfolio-desc">{desc}</p>
            <div className="d-flex flex-wrap gap-2 mt-auto pt-2">
              {tags.map(tag => (
                <span className="portfolio-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-2">
              <button
                className="portfolio-btn-flip"
                onClick={() => setFlipped(true)}
              >
                VOIR LE PROJET <i className="bi bi-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>

        {/* ── FACE ARRIÈRE ─────────────────────────────────── */}
        <div className="flip-card-back">
          <div className="card-corner-p-tl"></div>
          <div className="card-corner-p-tr"></div>
          <div className="card-corner-p-bl"></div>
          <div className="card-corner-p-br"></div>

          <div className="back-hex">
            <i className="bi bi-hexagon"></i>
          </div>

          <span className="back-label">{label}</span>
          <div className="back-title">{title}</div>
          <div className="back-separator"></div>

          <div className="back-actions">
            {link && link !== '#' ? (
              <a href={link} className="back-btn" target="_blank" rel="noreferrer">
                <i className="bi bi-globe2"></i>
                VOIR LE SITE
              </a>
            ) : (
              <span className="back-btn back-btn--disabled">
                <i className="bi bi-globe2"></i>
                SITE INDISPONIBLE
              </span>
            )}

            {github ? (
              <a href={github} className="back-btn back-btn--github" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
                VOIR GITHUB
              </a>
            ) : (
              <span className="back-btn back-btn--github back-btn--disabled">
                <i className="bi bi-github"></i>
                REPO PRIVÉ
              </span>
            )}
          </div>

          <button className="back-return" onClick={() => setFlipped(false)}>
            <i className="bi bi-arrow-left me-1"></i> RETOUR
          </button>
        </div>

      </div>
    </div>
  )
}

export default CardPortfolio
