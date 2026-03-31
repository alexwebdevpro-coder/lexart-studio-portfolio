import '../../styles/Title.css'

function Title({ text, subtitle }) {
  return (
    <div className="cyber-wrapper">
      <div className="cyber-scanline"></div>
      <h1 className="cyber-h1" data-text={text}>{text}</h1>
      <div className="cyber-underline"></div>
      {subtitle && <p className="cyber-subtitle">{subtitle}</p>}
    </div>
  )
}

export default Title
