import { useState, useEffect } from 'react'
import AccordionItem from '../components/ui/AccordionItem'
import '../styles/Politique.css'
import '../styles/AccordionItem.css'

const TOTAL = 7

function Mentions() {
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
          <div className="cp-title">MENTIONS_LÉGALES</div>
          <div className="cp-subtitle">REV.2026.03 &nbsp;·&nbsp; LOI N°2004-575 &nbsp;·&nbsp; NODE: FR-NANCY</div>
          <div className="cp-statusbar d-flex align-items-center gap-2 mt-3">
            <div className="cp-dot"></div>
            <div className="cp-status-text flex-grow-1">DOCUMENT CONFORME — MISE À JOUR 31/03/2026 — DROIT FRANÇAIS</div>
            <div className="cp-counter">{openCount}/{TOTAL} SECTIONS</div>
          </div>
        </div>

        <div className="cp-divider"></div>

        {/* Accordion */}
        <AccordionItem num="01" title="Éditeur du site" isOpen={openIndex === 0} onToggle={() => toggle(0)}>
          <div className="cp-rights">
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">NOM DU SITE</p>
              <p className="cp-right-desc">Lexart Studio</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">URL</p>
              <p className="cp-right-desc">lexart-studio.fr</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">PROPRIÉTAIRE</p>
              <p className="cp-right-desc">Alexis ZIRNHELT</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">STATUT</p>
              <p className="cp-right-desc">Particulier</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">ADRESSE</p>
              <p className="cp-right-desc">Nancy, France</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">E-MAIL</p>
              <p className="cp-right-desc">alex.webdev.pro@gmail.com</p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem num="02" title="Hébergement" isOpen={openIndex === 1} onToggle={() => toggle(1)}>
          <div className="cp-contact d-flex align-items-center mt-2">
            <div className="cp-contact-icon d-flex align-items-center justify-content-center flex-shrink-0">
              <svg viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="7" rx="1" stroke="#ff6a00" strokeWidth="1.1"/>
                <path d="M4 10v2M10 10v2M2 13h10" stroke="#ff6a00" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="cp-contact-label">HÉBERGEUR</p>
              <p className="cp-contact-value">O2SWITCH — o2switch SAS</p>
            </div>
          </div>
          <div className="cp-tags d-flex flex-wrap my-2">
            <span className="cp-tag">222-224 BD GUSTAVE FLAUBERT</span>
            <span className="cp-tag">63000 CLERMONT-FERRAND</span>
            <span className="cp-tag">FRANCE</span>
          </div>
          <p className="cp-text">
            Site web : <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer">o2switch.fr</a>
          </p>
        </AccordionItem>

        <AccordionItem num="03" title="Propriété intellectuelle" isOpen={openIndex === 2} onToggle={() => toggle(2)}>
          <p className="cp-text">
            L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, structure)
            est la propriété exclusive d'<strong>Alexis ZIRNHELT</strong>, sauf mention contraire.
            Toute reproduction, distribution, modification ou utilisation de ces contenus, sans
            autorisation expresse et préalable, est strictement interdite.
          </p>
          <p className="cp-text">
            Les projets présentés à titre de référence et réalisés pour des tiers restent la propriété
            de leurs commanditaires respectifs.
          </p>
        </AccordionItem>

        <AccordionItem num="04" title="Protection des données personnelles" isOpen={openIndex === 3} onToggle={() => toggle(3)}>
          <p className="cp-text"><strong>4.1 — Responsable du traitement</strong></p>
          <p className="cp-text">
            Le responsable du traitement des données est <strong>Alexis ZIRNHELT</strong>,
            joignable à l'adresse : alex.webdev.pro@gmail.com.
          </p>

          <p className="cp-text mt-2"><strong>4.2 — Données collectées</strong></p>
          <p className="cp-text">Le formulaire de contact peut collecter les informations suivantes :</p>
          <div className="cp-tags d-flex flex-wrap my-2">
            <span className="cp-tag">NOM &amp; PRÉNOM</span>
            <span className="cp-tag">ADRESSE E-MAIL</span>
            <span className="cp-tag">MESSAGE LIBRE</span>
          </div>
          <p className="cp-text">Ces données ne sont pas transmises à des tiers.</p>

          <p className="cp-text mt-2"><strong>4.3 — Durée de conservation</strong></p>
          <p className="cp-text">
            Les données collectées via le formulaire sont conservées pour une durée maximale
            de <strong>3 ans</strong> à compter du dernier contact.
          </p>

          <p className="cp-text mt-2"><strong>4.4 — Droits des utilisateurs</strong></p>
          <div className="cp-rights">
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">ACCÈS</p>
              <p className="cp-right-desc">Vos données personnelles</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">RECTIFICATION</p>
              <p className="cp-right-desc">En cas d'inexactitude</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">EFFACEMENT</p>
              <p className="cp-right-desc">Droit à l'oubli</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">LIMITATION</p>
              <p className="cp-right-desc">Du traitement</p>
            </div>
            <div className="cp-right position-relative overflow-hidden">
              <p className="cp-right-title">OPPOSITION</p>
              <p className="cp-right-desc">À un traitement</p>
            </div>
          </div>
          <p className="cp-text mt-2">
            Pour exercer ces droits : <strong>alex.webdev.pro@gmail.com</strong>.
            Vous disposez également du droit de réclamation auprès de la{' '}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
          </p>
        </AccordionItem>

        <AccordionItem num="05" title="Liens hypertextes" isOpen={openIndex === 4} onToggle={() => toggle(4)}>
          <p className="cp-text">
            Le site Lexart Studio peut contenir des liens vers des sites tiers. Ces liens sont
            fournis à titre informatif. L'éditeur ne saurait être tenu responsable du contenu
            de ces sites externes ni des pratiques de confidentialité qui y sont appliquées.
          </p>
        </AccordionItem>

        <AccordionItem num="06" title="Limitation de responsabilité" isOpen={openIndex === 5} onToggle={() => toggle(5)}>
          <p className="cp-text">
            Les informations contenues sur ce site sont fournies à titre indicatif. L'éditeur
            s'efforce de maintenir les informations à jour mais ne peut garantir leur exactitude
            ou exhaustivité à tout moment.
          </p>
          <p className="cp-text">
            La responsabilité de l'éditeur ne saurait être engagée en cas d'erreur ou d'omission.
          </p>
        </AccordionItem>

        <AccordionItem num="07" title="Droit applicable et juridiction compétente" isOpen={openIndex === 6} onToggle={() => toggle(6)}>
          <p className="cp-text">
            Les présentes mentions légales sont régies par le <strong>droit français</strong>.
            En cas de litige, et après tentative de résolution amiable, les tribunaux compétents
            seront ceux du ressort du domicile de l'éditeur.
          </p>
          <div className="cp-tags d-flex flex-wrap my-2">
            <span className="cp-tag">DROIT FRANÇAIS</span>
            <span className="cp-tag dim">RÉSOLUTION AMIABLE PRÉALABLE</span>
          </div>
        </AccordionItem>

        <div className="cp-divider"></div>

        {/* Footer */}
        <div className="cp-footer d-flex justify-content-between flex-wrap gap-2">
          <span>© 2026 ALEXIS ZIRNHELT — LEXART STUDIO</span>
          <span>{clock}</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

      </div>
    </div>
  )
}

export default Mentions
