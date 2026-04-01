import AccordionItem from '../components/ui/AccordionItem'
import LegalPanel from '../components/ui/LegalPanel'
import { useLegalPage } from '../hooks/useLegalPage'

const TOTAL = 7

function Politique() {
  const { openIndex, toggle, openCount, clock } = useLegalPage()

  return (
    <LegalPanel
      title="POLITIQUE_DE_CONFIDENTIALITÉ"
      subtitle="REV.2025.03 &nbsp;·&nbsp; RGPD (UE) 2016/679 &nbsp;·&nbsp; NODE: FR-NANCY"
      statusText="SYSTÈME CONFORME — DONNÉES PROTÉGÉES — CHIFFREMENT ACTIF"
      total={TOTAL}
      openCount={openCount}
      clock={clock}
    >
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
    </LegalPanel>
  )
}

export default Politique
