function CardServices({ icon, title, desc }) {
  return (
    <div className="card service-card h-100">
      <div className="card-body d-flex flex-column align-items-center text-center p-4 gap-3">
        <i className={`bi ${icon} service-icon`}></i>
        <div className="card-title service-title mb-0">{title}</div>
        <p className="card-text service-desc m-0">{desc}</p>
      </div>
    </div>
  )
}

export default CardServices
