import { Link } from 'react-router-dom'
import logotype from '../assets/svg/lexart_studio_logotype.svg'
import photo from '../assets/image/Photo-Home2.JPG'
import '../styles/Home.css'

function Home() {
  return (
    <section className="home container">

      <div className="text-center mb-5">
        <img src={logotype} alt="Lexart Studio" className="home-logotype" />
      </div>

      <div className="row align-items-center g-5">

        <div className="col-12 col-lg-6">
          <h1 className="home-name fw-bold mb-2">Alexis ZIRNHELT</h1>
          <p className="home-role mb-4">Développeur web fullstack</p>
          <p className="home-description mb-5">
            Je conçois et développe des applications web modernes. À travers mes projets,
            j'explore différentes technologies pour créer des expériences web efficaces
            et accessibles.
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <Link to="/portfolio" className="home-btn-primary">
              Voir mes projets
            </Link>
            <a href="#" className="home-btn-secondary">
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <div className="home-photo-wrapper">
            <img src={photo} alt="Alexis ZIRNHELT" className="home-photo" />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Home
