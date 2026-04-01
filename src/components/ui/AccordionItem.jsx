import '../../styles/AccordionItem.css'

const ArrowIcon = () => (
  <svg className="cp-arrow" viewBox="0 0 16 16" fill="none">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BarGroup = () => (
  <div className="cp-bar-group d-flex align-items-end">
    <div className="cp-bar"></div>
    <div className="cp-bar"></div>
    <div className="cp-bar"></div>
  </div>
)

function AccordionItem({ num, title, children, isOpen, onToggle }) {
  return (
    <div className={`cp-item${isOpen ? ' open' : ''}`}>
      <button className="cp-trigger w-100 d-flex align-items-center p-0 text-start border-0" aria-expanded={isOpen} onClick={onToggle}>
        <div className="cp-num-badge d-flex align-items-center justify-content-center flex-shrink-0">{num}</div>
        <span className="cp-trigger-label">{title}</span>
        <div className="cp-trigger-right d-flex align-items-center gap-2 flex-shrink-0">
          <BarGroup />
          <ArrowIcon />
        </div>
      </button>
      <div className="cp-body">
        <div className="cp-body-inner">
          <div className="cp-body-line w-100 position-relative"></div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
