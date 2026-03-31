import { useState, useEffect } from 'react'
import '../styles/Politique.css'
import '../styles/AccordionItem.css'

const TOTAL = 7

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
          <div className="cp-body-line"></div>
          {children}
        </div>
      </div>
    </div>
  )
}

function Politique() {
  const [openIndex, setOpenIndex] = useState(null)
  const [clock, setClock]         = useState('')

  useEffect(() => {
    function tick() {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      const s = String(now.getSeconds()).padStart(2, '0')
      setClock(`SYS_TIME: ${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  function toggle(i) {
    setOpenIndex(prev => prev === i ? null : i)
  }

  const openCount = openIndex !== null ? 1 : 0

  return (
    <div className="cp-root w-100 position-relative overflow-hidden">
      <div className="cp-corner tl position-absolute"></div>
      <div className="cp-corner tr position-absolute"></div>
      <div className="cp-corner bl position-absolute"></div>
      <div className="cp-corner br position-absolute"></div>
      <div className="cp-scanlines position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="cp-sweep position-absolute top-0 h-100"></div>

      <div className="cp-content position-relative">

        {/* Header */}
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
          <div className="cp-title">POLITIQUE_DE_CONFIDENTIALITÉ</div>
          <div className="cp-subtitle">REV.2025.03 &nbsp;·&nbsp; RGPD (UE) 2016/679 &nbsp;·&nbsp; NODE: FR-NANCY</div>
          <div className="cp-statusbar d-flex align-items-center gap-2 mt-3">
            <div className="cp-dot"></div>
            <div className="cp-status-text flex-grow-1">SYSTÈME CONFORME — DONNÉES PROTÉGÉES — CHIFFREMENT ACTIF</div>
            <div className="cp-counter">{openCount}/{TOTAL} SECTIONS</div>
          </div>
        </div>

        <div className="cp-divider"></div>

        {/* Accordion */}
        <AccordionItem num="01" title="Responsable du traitement" isOpen={openIndex === 0} onToggle={() => toggle(0)}>
          <p className="cp-text">
            Le site <strong>Lexart Studio</strong> est un portfolio personnel de développeur web.
            En tant que responsable du traitement, je suis le seul à décider de la finalité
            et des moyens mis en œuvre pour traiter vos données personnelles.
          </p>
          <div className="cp-contact d-flex align-items-center mt-2">
            <div className="cp-contact-icon d-flex align-items-center justify-content-center flex-shrink-0">
              <svg viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="4.5" r="2.5" stroke="#ff6a00" strokeWidth="1.1"/>
                <path d="M1.5 13c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="#ff6a00" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="cp-contact-label">RESPONSABLE DU TRAITEMENT</p>
              <p className="cp-contact-value">ALEXIS ZIRNHELT</p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem num="02" title="Données collectées" isOpen={openIndex === 1} onToggle={() => toggle(1)}>
          <p className="cp-text">Ce site collecte uniquement les données que vous fournissez volontairement via le formulaire de contact :</p>
          <div className="cp-tags d-flex flex-wrap my-2">
            <span className="cp-tag">PRÉNOM &amp; NOM</span>
            <span className="cp-tag">ADRESSE E-MAIL</span>
            <span className="cp-tag">CONTENU DU MESSAGE</span>
          </div>
          <p className="cp-text">Aucune donnée n'est collectée à votre insu. Aucun cookie de traçage ni outil d'analytics tiers n'est utilisé sur ce site.</p>
        </AccordionItem>

        <AccordionItem num="03" title="Finalités et base légale" isOpen={openIndex === 2} onToggle={() => toggle(2)}>
          <p className="cp-text">Les données collectées ont un objectif unique : vous répondre suite à votre prise de contact.</p>
          <div className="cp-tags d-flex flex-wrap my-2">
            <span className="cp-tag">RÉPONDRE À VOS DEMANDES</span>
            <span className="cp-tag dim">BASE LÉGALE : INTÉRÊT LÉGITIME</span>
          </div>
          <p className="cp-text">Vos données ne sont jamais utilisées à des fins commerciales, de prospection, ou revendues à des tiers.</p>
        </AccordionItem>

        <AccordionItem num="04" title="Durée de conservation" isOpen={openIndex === 3} onToggle={() => toggle(3)}>
          <p className="cp-text">Vos données sont conservées le temps nécessaire à la gestion de votre demande, puis supprimées dans un délai raisonnable.</p>
          <div className="cp-tags d-flex flex-wrap my-2">
            <span className="cp-tag">DURÉE MAX. : 12 MOIS</span>
          </div>
          <p className="cp-text">En l'absence de suite donnée à notre échange, elles ne sont pas conservées au-delà de cette durée.</p>
        </AccordionItem>

        <AccordionItem num="05" title="Sous-traitants et transferts" isOpen={openIndex === 4} onToggle={() => toggle(4)}>
          <p className="cp-text">
            Le formulaire de contact est acheminé via le service <strong>EmailJS</strong> (emailjs.com),
            qui agit en qualité de sous-traitant. EmailJS traite les données uniquement pour assurer
            l'acheminement technique des messages.
          </p>
          <p className="cp-text">Aucun autre tiers n'a accès à vos données. Aucun transfert hors Union Européenne n'est effectué de ma propre initiative.</p>
        </AccordionItem>

        <AccordionItem num="06" title="Vos droits (RGPD)" isOpen={openIndex === 5} onToggle={() => toggle(5)}>
          <p className="cp-text">Conformément au RGPD, vous disposez des droits suivants :</p>
          <div className="cp-rights">
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">ACCÈS</p>
              <p className="cp-right-desc">Copie des données vous concernant</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">RECTIFICATION</p>
              <p className="cp-right-desc">Corriger des données inexactes</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">SUPPRESSION</p>
              <p className="cp-right-desc">Effacement de vos données</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">OPPOSITION</p>
              <p className="cp-right-desc">Vous opposer à un traitement</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">LIMITATION</p>
              <p className="cp-right-desc">Restreindre un traitement</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">RÉCLAMATION</p>
              <p className="cp-right-desc">Saisir la CNIL si nécessaire</p>
            </div>
          </div>
          <p className="cp-text mt-2">Je m'engage à répondre dans un délai de <strong>30 jours</strong>.</p>
        </AccordionItem>

        <AccordionItem num="07" title="Contact" isOpen={openIndex === 6} onToggle={() => toggle(6)}>
          <p className="cp-text">Pour toute question relative à cette politique ou à l'exercice de vos droits :</p>
          <div className="cp-contact d-flex align-items-center mt-2">
            <div className="cp-contact-icon d-flex align-items-center justify-content-center flex-shrink-0">
              <svg viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="8" rx="1" stroke="#ff6a00" strokeWidth="1.1"/>
                <path d="M1 4l6 4.5L13 4" stroke="#ff6a00" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="cp-contact-label">CANAL DE TRANSMISSION</p>
              <p className="cp-contact-value">alex.webdev.pro@gmail.com</p>
            </div>
          </div>
          <p className="cp-text mt-2">
            Vous pouvez également contacter la <strong>CNIL</strong> via{' '}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>.
          </p>
        </AccordionItem>

        <div className="cp-divider"></div>

        {/* Footer */}
        <div className="cp-footer d-flex justify-content-between flex-wrap gap-2">
          <span>© 2025 ALEXIS ZIRNHELT — LEXART STUDIO</span>
          <span>{clock}</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

      </div>
    </div>
  )
}

export default Politique
