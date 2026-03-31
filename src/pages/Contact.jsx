import { useRef, useState } from 'react'
import Title from '../components/ui/Title'
import { useParticles } from '../hooks/useParticles'
import '../styles/Contact.css'

function Contact() {
  const canvasRef = useRef(null)
  const rootRef = useRef(null)
  const [btnState, setBtnState] = useState('idle') // idle | sending | sent

  useParticles(canvasRef, rootRef)

  function handleSend() {
    setBtnState('sending')
    setTimeout(() => {
      setBtnState('sent')
      setTimeout(() => setBtnState('idle'), 2500)
    }, 1800)
  }

  const btnLabel =
    btnState === 'sending' ? 'Envoi en cours...' :
    btnState === 'sent'    ? 'Message envoyé ✓' :
    'Envoyer le message'

  return (
    <div>
      <Title
        text="CONTACT"
        subtitle="N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question."
      />

      <section ref={rootRef} className="contact-section position-relative overflow-hidden pb-5">
        <canvas ref={canvasRef} id="particles" className="position-absolute top-0 start-0 w-100 h-100"></canvas>
        <div className="cy-scanlines position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="cy-grid-lines position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="cy-card mx-auto">
          <div className="cy-corner tl position-absolute"></div>
          <div className="cy-corner tr position-absolute"></div>
          <div className="cy-corner bl position-absolute"></div>
          <div className="cy-corner br position-absolute"></div>

          <div className="row g-3 mb-3">
            <div className="col-12 col-sm-6">
              <label className="cy-label d-flex align-items-center text-uppercase">
                <span className="cy-label-arrow">&gt;</span> Nom et prénom
              </label>
              <input className="cy-input" type="text" placeholder="Jean Dupont" />
            </div>
            <div className="col-12 col-sm-6">
              <label className="cy-label d-flex align-items-center text-uppercase">
                <span className="cy-label-arrow">&gt;</span> Entreprise
                <span className="cy-label-opt">(optionnel)</span>
              </label>
              <input className="cy-input" type="text" placeholder="Nom de l'entreprise" />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-12 col-sm-6">
              <label className="cy-label d-flex align-items-center text-uppercase">
                <span className="cy-label-arrow">&gt;</span> Adresse e-mail
              </label>
              <input className="cy-input" type="email" placeholder="jean.dupont@email.com" />
            </div>
            <div className="col-12 col-sm-6">
              <label className="cy-label d-flex align-items-center text-uppercase">
                <span className="cy-label-arrow">&gt;</span> Numéro de téléphone
              </label>
              <input className="cy-input" type="tel" placeholder="+33 6 00 00 00 00" />
            </div>
          </div>

          <div className="mb-3">
            <label className="cy-label">
              <span className="cy-label-arrow">&gt;</span> Sujet
            </label>
            <input className="cy-input" type="text" placeholder="Votre sujet..." />
          </div>

          <div className="mb-3">
            <label className="cy-label">
              <span className="cy-label-arrow">&gt;</span> Message
            </label>
            <textarea className="cy-input" placeholder="Votre message..."></textarea>
          </div>

          <div className="text-center mt-4">
            <button
              className={`cy-btn${btnState === 'sent' ? ' sent' : ''}`}
              onClick={handleSend}
              disabled={btnState !== 'idle'}
            >
              {btnLabel}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
