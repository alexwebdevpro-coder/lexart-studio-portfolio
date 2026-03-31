import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Title from '../components/ui/Title'
import { useParticles } from '../hooks/useParticles'
import '../styles/Contact.css'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

emailjs.init({ publicKey: PUBLIC_KEY })

function Contact() {
  const canvasRef = useRef(null)
  const rootRef   = useRef(null)
  const formRef   = useRef(null)
  const [btnState, setBtnState] = useState('idle') // idle | sending | sent | error

  useParticles(canvasRef, rootRef)

  function handleSend(e) {
    e.preventDefault()
    setBtnState('sending')

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current)
      .then(() => {
        setBtnState('sent')
        formRef.current.reset()
        setTimeout(() => setBtnState('idle'), 3000)
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        console.error('Status:', err.status, '| Text:', err.text)
        setBtnState('error')
        setTimeout(() => setBtnState('idle'), 3000)
      })
  }

  const btnLabel =
    btnState === 'sending' ? 'Envoi en cours...' :
    btnState === 'sent'    ? 'Message envoyé ✓' :
    btnState === 'error'   ? 'Erreur — réessayer' :
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

        <form ref={formRef} onSubmit={handleSend}>
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
                <input className="cy-input w-100" type="text" name="name" placeholder="Jean Dupont" required />
              </div>
              <div className="col-12 col-sm-6">
                <label className="cy-label d-flex align-items-center text-uppercase">
                  <span className="cy-label-arrow">&gt;</span> Entreprise
                  <span className="cy-label-opt">(optionnel)</span>
                </label>
                <input className="cy-input w-100" type="text" name="company" placeholder="Nom de l'entreprise" />
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-12 col-sm-6">
                <label className="cy-label d-flex align-items-center text-uppercase">
                  <span className="cy-label-arrow">&gt;</span> Adresse e-mail
                </label>
                <input className="cy-input w-100" type="email" name="email" placeholder="jean.dupont@email.com" required />
              </div>
              <div className="col-12 col-sm-6">
                <label className="cy-label d-flex align-items-center text-uppercase">
                  <span className="cy-label-arrow">&gt;</span> Numéro de téléphone
                </label>
                <input className="cy-input w-100" type="tel" name="phone" placeholder="+33 6 00 00 00 00" />
              </div>
            </div>

            <div className="mb-3">
              <label className="cy-label d-flex align-items-center text-uppercase">
                <span className="cy-label-arrow">&gt;</span> Sujet
              </label>
              <input className="cy-input w-100" type="text" name="subject" placeholder="Votre sujet..." required />
            </div>

            <div className="mb-3">
              <label className="cy-label d-flex align-items-center text-uppercase">
                <span className="cy-label-arrow">&gt;</span> Message
              </label>
              <textarea className="cy-input w-100" name="message" placeholder="Votre message..." required></textarea>
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                className={`cy-btn${btnState === 'sent' ? ' sent' : ''}${btnState === 'error' ? ' error' : ''}`}
                disabled={btnState !== 'idle'}
              >
                {btnLabel}
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contact
