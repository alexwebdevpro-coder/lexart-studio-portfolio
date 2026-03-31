import '../../styles/CardServices.css'

function CardServices({ label, icon, title, desc }) {
  const num = parseInt(label.replace('SVC-', ''), 10) - 1
  const hex = `0xFF${(0x6400 + num).toString(16).toUpperCase()}`
  return (
    <div className="card service-card h-100 overflow-hidden position-relative">
      <div className="card-corner-tr position-absolute"></div>
      <div className="card-corner-bl position-absolute"></div>
      <div className="service-card__glow position-absolute"></div>
      <div className="service-card__streak position-absolute"></div>

      <div className="card-body d-flex flex-column align-items-center text-center p-4 gap-2">
        <div className="service-label text-uppercase">{label}</div>
        <i className={`bi ${icon} service-icon d-block`}></i>
        <div className="card-title service-title text-uppercase mb-0">{title}</div>
        <p className="card-text service-desc m-0">{desc}</p>
      </div>

      <div className="service-card__hex position-absolute">{hex}</div>
    </div>
  )
}

export default CardServices
