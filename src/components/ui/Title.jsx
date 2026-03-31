import '../../styles/Title.css'

function Title({ text, subtitle }) {
  return (
    <div className="cyber-wrapper d-flex flex-column align-items-center overflow-hidden position-relative">
      <div className="cyber-scanline"></div>
      <h1 className="cyber-h1 text-center text-uppercase" data-text={text}>{text}</h1>
      <div className="cyber-underline w-100 position-relative"></div>
      {subtitle && <p className="cyber-subtitle text-center m-0">{subtitle}</p>}
    </div>
  )
}

export default Title
