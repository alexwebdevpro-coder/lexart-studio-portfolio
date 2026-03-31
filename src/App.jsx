import { useRef, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ErrorBoundary from './components/ui/ErrorBoundary'
import { useParticles } from './hooks/useParticles'
import './styles/App.css'

const Home      = lazy(() => import('./pages/Home'))
const About     = lazy(() => import('./pages/About'))
const Contact   = lazy(() => import('./pages/Contact'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Services  = lazy(() => import('./pages/Services'))
const Mentions  = lazy(() => import('./pages/Mentions'))
const Politique = lazy(() => import('./pages/Politique'))

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
          <ErrorBoundary>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/mentions-legales" element={<Mentions />} />
                <Route path="/politique-de-confidentialite" element={<Politique />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
