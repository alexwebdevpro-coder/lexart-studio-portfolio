import { Link } from "react-router-dom";
import logotype from "../assets/svg/lexart_studio_logotype_v2.svg";
import photo from "../assets/image/Photo-Home2.JPG";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home container">
      <div className="text-center mb-5">
        <img src={logotype} alt="Lexart Studio" className="home-logotype" />
      </div>

      <div className="row align-items-center g-5">
        <div className="col-12 col-lg-6">
          <h1 className="home-name mb-2">
            Alexis <span>ZIRNHELT</span>
          </h1>
          <div className="home-role-wrapper">
            <p className="home-role">Développeur web fullstack</p>
            <span className="home-role-cursor">_</span>
          </div>
          <p className="home-description mb-5">
            En reconversion vers le développement web, je construis des
            interfaces qui allient <span>esthétique et performance</span>.
            Chaque projet est une occasion d'apprendre et de progresser.
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
  );
}

export default Home;
