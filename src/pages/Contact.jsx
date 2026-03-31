import { useEffect, useRef, useState } from 'react'
import Title from '../components/ui/Title'
import '../styles/Contact.css'

function Contact() {
  const canvasRef = useRef(null)
  const rootRef = useRef(null)
  const [btnState, setBtnState] = useState('idle') // idle | sending | sent

  useEffect(() => {
    const canvas = canvasRef.current
    const root = rootRef.current
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = root.offsetWidth
      canvas.height = root.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random() * 0.5 + 0.1,
    }))

    let animId
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,107,0,${p.a})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,107,0,${0.12 * (1 - dist / 90)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

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
        <canvas ref={canvasRef} id="particles"></canvas>
        <div className="cy-scanlines"></div>
        <div className="cy-grid-lines"></div>

        <div className="cy-card mx-auto">
          <div className="cy-corner tl"></div>
          <div className="cy-corner tr"></div>
          <div className="cy-corner bl"></div>
          <div className="cy-corner br"></div>

          <div className="row g-3 mb-3">
            <div className="col-12 col-sm-6">
              <label className="cy-label">
                <span className="cy-label-arrow">&gt;</span> Nom et prénom
              </label>
              <input className="cy-input" type="text" placeholder="Jean Dupont" />
            </div>
            <div className="col-12 col-sm-6">
              <label className="cy-label">
                <span className="cy-label-arrow">&gt;</span> Entreprise
                <span className="cy-label-opt">(optionnel)</span>
              </label>
              <input className="cy-input" type="text" placeholder="Nom de l'entreprise" />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-12 col-sm-6">
              <label className="cy-label">
                <span className="cy-label-arrow">&gt;</span> Adresse e-mail
              </label>
              <input className="cy-input" type="email" placeholder="jean.dupont@email.com" />
            </div>
            <div className="col-12 col-sm-6">
              <label className="cy-label">
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
