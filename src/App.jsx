import { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Mentions from './pages/Mentions'
import Politique from './pages/Politique'
import { useParticles } from './hooks/useParticles'
import './styles/App.css'

function App() {
  const canvasRef = useRef(null)
  const rootRef   = useRef(null)
  useParticles(canvasRef, rootRef)

  return (
    <BrowserRouter>
      <div ref={rootRef} className="app-wrapper">
        <canvas ref={canvasRef} className="app-particles"></canvas>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mentions-legales" element={<Mentions />} />
            <Route path="/politique-de-confidentialite" element={<Politique />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
