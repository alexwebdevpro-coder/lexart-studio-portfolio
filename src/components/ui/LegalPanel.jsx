import '../../styles/Politique.css'
import '../../styles/AccordionItem.css'

function LegalPanel({ title, subtitle, statusText, total, openCount, clock, children }) {
  return (
    <div className="cp-root w-100 position-relative overflow-hidden">
      <div className="cyber-corner tl position-absolute"></div>
      <div className="cyber-corner tr position-absolute"></div>
      <div className="cyber-corner bl position-absolute"></div>
      <div className="cyber-corner br position-absolute"></div>
      <div className="cp-scanlines position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="cp-sweep position-absolute top-0 h-100"></div>

      <div className="cp-content position-relative">

        <div className="cp-header mb-4">
          <div className="cp-logo-row d-flex align-items-center gap-2 mb-3">
            <div className="cp-logo-box d-flex align-items-center justify-content-center position-relative flex-shrink-0">
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="6" height="6" fill="#ff6a00"/>
                <rect x="9" y="1" width="6" height="6" fill="#ff6a00" opacity="0.35"/>
                <rect x="1" y="9" width="6" height="6" fill="#ff6a00" opacity="0.35"/>
                <rect x="9" y="9" width="6" height="6" fill="#ff6a00"/>
              </svg>
            </div>
            <div className="cp-logo-text">LEXART_STUDIO <span>// PORTFOLIO.SYS</span></div>
          </div>
          <div className="cp-title">{title}</div>
          <div className="cp-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />
          <div className="cp-statusbar d-flex align-items-center gap-2 mt-3">
            <div className="cp-dot"></div>
            <div className="cp-status-text flex-grow-1">{statusText}</div>
            <div className="cp-counter">{openCount}/{total} SECTIONS</div>
          </div>
        </div>

        <div className="cp-divider"></div>

        {children}

        <div className="cp-divider"></div>

        <div className="cp-footer d-flex justify-content-between flex-wrap gap-2">
          <span>© 2026 ALEXIS ZIRNHELT — LEXART STUDIO</span>
          <span>{clock}</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

      </div>
    </div>
  )
}

export default LegalPanel
