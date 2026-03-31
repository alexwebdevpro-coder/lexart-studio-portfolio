import '../../styles/CardPortfolio.css'

function CardPortfolio({ label, img, title, desc, tags, link }) {
  return (
    <div className="card portfolio-card h-100 overflow-hidden position-relative">
      <div className="card-corner-p-tl position-absolute"></div>
      <div className="card-corner-p-tr position-absolute"></div>
      <div className="card-corner-p-bl position-absolute"></div>
      <div className="card-corner-p-br position-absolute"></div>
      <div className="portfolio-card__glow position-absolute"></div>

      <div className="portfolio-img-wrap position-relative overflow-hidden">
        <img src={img} alt={title} className="card-img-top portfolio-img w-100" />
        <div className="portfolio-img-overlay position-absolute"></div>
        <span className="portfolio-label position-absolute text-uppercase">{label}</span>
      </div>

      <div className="card-body d-flex flex-column p-4 gap-2">
        <div className="card-title portfolio-title mb-0">{title}</div>
        <p className="card-text portfolio-desc m-0">{desc}</p>
        <div className="portfolio-tags d-flex flex-wrap gap-2 mt-auto pt-3">
          {tags.map(tag => (
            <span className="portfolio-tag" key={tag}>{tag}</span>
          ))}
        </div>
        <a href={link} className="portfolio-btn text-decoration-none text-uppercase mt-2" target="_blank" rel="noreferrer">
          VOIR LE PROJET <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

export default CardPortfolio
