import { NavLink } from "react-router-dom";
import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <p className="footer-brand-name">LEXART STUDIO</p>
            <p className="footer-tagline">&gt; dev web &bull; Nancy_</p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Lexart Studio.<br />
              Tous droits réservés.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          <div className="footer-group">
            <p className="footer-heading">NAVIGATION</p>
            <nav className="footer-nav">
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/about">À propos</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>

          <div className="footer-group">
            <p className="footer-heading">LÉGAL</p>
            <nav className="footer-legal">
              <NavLink to="/mentions-legales">Mentions légales</NavLink>
              <NavLink to="/politique-de-confidentialite">Politique de confidentialité</NavLink>
            </nav>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span className="footer-bottom-name">LEXART STUDIO — {new Date().getFullYear()}</span>
          <span className="footer-status">
            <span className="footer-status-dot"></span>
            disponible pour missions
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
