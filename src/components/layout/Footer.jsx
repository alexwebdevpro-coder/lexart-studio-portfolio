import { NavLink } from "react-router-dom";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row g-5 pb-5">

          <div className="col-12 col-lg-6 footer-brand">
            <p className="footer-brand-name fw-bold mb-1">LEXART STUDIO</p>
            <p className="footer-tagline mb-3">&gt; dev web &bull; Nancy_</p>
            <p className="footer-copyright mb-3">
              &copy; {new Date().getFullYear()} Lexart Studio.<br />
              Tous droits réservés.
            </p>
            <div className="d-flex gap-2">
              <a className="footer-social-icon d-flex align-items-center justify-content-center text-decoration-none" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="footer-social-icon d-flex align-items-center justify-content-center text-decoration-none" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a className="footer-social-icon d-flex align-items-center justify-content-center text-decoration-none" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="footer-social-icon d-flex align-items-center justify-content-center text-decoration-none" href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <p className="footer-heading fw-semibold mb-3">NAVIGATION</p>
            <nav className="d-flex flex-column gap-2">
              <NavLink className="footer-link text-decoration-none" to="/">Accueil</NavLink>
              <NavLink className="footer-link text-decoration-none" to="/about">À propos</NavLink>
              <NavLink className="footer-link text-decoration-none" to="/services">Services</NavLink>
              <NavLink className="footer-link text-decoration-none" to="/portfolio">Portfolio</NavLink>
              <NavLink className="footer-link text-decoration-none" to="/contact">Contact</NavLink>
            </nav>
          </div>

          <div className="col-6 col-lg-3">
            <p className="footer-heading fw-semibold mb-3">LÉGAL</p>
            <nav className="d-flex flex-column gap-2">
              <NavLink className="footer-link text-decoration-none" to="/mentions-legales">Mentions légales</NavLink>
              <NavLink className="footer-link text-decoration-none" to="/politique-de-confidentialite">Politique de confidentialité</NavLink>
            </nav>
          </div>

        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="footer-bottom-name">LEXART STUDIO — {new Date().getFullYear()}</span>
          <span className="d-flex align-items-center gap-2 footer-status fw-semibold">
            <span className="footer-status-dot rounded-circle"></span>
            disponible pour missions
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
