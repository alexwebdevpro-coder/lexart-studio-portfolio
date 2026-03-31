import { useState } from 'react'
import { IconArrowRight, IconArrowLeft, IconHexagon, IconGlobe, IconGithub } from './Icons'
import '../../styles/CardPortfolio.css'

function Corners() {
  return (
    <>
      <div className="card-corner-p-tl"></div>
      <div className="card-corner-p-tr"></div>
      <div className="card-corner-p-bl"></div>
      <div className="card-corner-p-br"></div>
    </>
  )
}

function CardPortfolio({ label, img, title, desc, tags, link, github }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={`flip-card${flipped ? ' flipped' : ''}`}>
      <div className="flip-card-inner">

        {/* ── FACE AVANT ───────────────────────────────────── */}
        <div className="flip-card-front">
          <Corners />
          <div className="portfolio-card__glow"></div>

          <div className="portfolio-img-wrap">
            <img src={img} alt={title} className="portfolio-img" loading="lazy" />
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
                VOIR LE PROJET <span style={{ marginLeft: '0.25rem' }}><IconArrowRight /></span>
              </button>
            </div>
          </div>
        </div>

        {/* ── FACE ARRIÈRE ─────────────────────────────────── */}
        <div className="flip-card-back">
          <Corners />

          <div className="back-hex">
            <IconHexagon />
          </div>

          <span className="back-label">{label}</span>
          <div className="back-title">{title}</div>
          <div className="back-separator"></div>

          <div className="back-actions">
            {link && link !== '#' ? (
              <a href={link} className="back-btn" target="_blank" rel="noreferrer">
                <IconGlobe />
                VOIR LE SITE
              </a>
            ) : (
              <span className="back-btn back-btn--disabled">
                <IconGlobe />
                SITE INDISPONIBLE
              </span>
            )}

            {github ? (
              <a href={github} className="back-btn back-btn--github" target="_blank" rel="noreferrer">
                <IconGithub />
                VOIR GITHUB
              </a>
            ) : (
              <span className="back-btn back-btn--github back-btn--disabled">
                <IconGithub />
                REPO PRIVÉ
              </span>
            )}
          </div>

          <button className="back-return" onClick={() => setFlipped(false)}>
            <span style={{ marginRight: '0.25rem' }}><IconArrowLeft /></span> RETOUR
          </button>
        </div>

      </div>
    </div>
  )
}

export default CardPortfolio
