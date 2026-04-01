import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/ui/Title";
import photo from "../assets/image/Photo-About.webp";
import { stats, timeline, tags } from "../data/about";
import "../styles/About.css";

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <Title text="À PROPOS" />

      <section className="about container pb-5">
        <div className="row align-items-start g-5">

          {/* Colonne gauche — photo + stats */}
          <div className="col-12 col-lg-5 d-flex flex-column align-items-center">
            <div className="photo-panel position-relative">
              <div className="photo-frame position-relative">
                <span className="corner corner-tl"></span>
                <span className="corner corner-tr"></span>
                <span className="corner corner-bl"></span>
                <span className="corner corner-br"></span>
                <img src={photo} alt="Alexis ZIRNHELT" className="photo-img w-100 d-block" loading="lazy" />
                <div className="photo-overlay"></div>
                <div className="photo-hud">
                  <span className="hud-tag">
                    <span className="status-dot d-inline-block"></span>
                    EN LIGNE
                  </span>
                </div>
              </div>
            </div>

            <div className="stats-panel w-100">
              {stats.map(({ label, val }) => (
                <div className="stat-row d-flex align-items-center" key={label}>
                  <div className="stat-label">{label}</div>
                  <div className="stat-bar-bg overflow-hidden">
                    <div className="stat-bar-fill" style={{ width: animate ? `${val}%` : "0%" }}></div>
                  </div>
                  <div className="stat-val text-end">{val}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite — texte */}
          <div className="col-12 col-lg-7">
            <div className="sys-bar d-flex flex-wrap mb-4">
              <span>STATUT: <strong>RECONVERSION ACTIVE</strong></span>
              <span>FORMATION: <strong>EN COURS</strong></span>
              <span>OBJECTIF: <strong>FULLSTACK</strong></span>
            </div>

            <div className={`text-block fade-in mb-5${animate ? " visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
              <div className="text-block-label text-uppercase">// MISSION PRINCIPALE</div>
              <p>
                Actuellement en formation au <strong>Centre de Formation Européen</strong>,
                je construis pas à pas ma nouvelle identité de <strong>développeur web fullstack</strong>.
                Chaque ligne de code est un module de plus dans ma progression — méthodique, déterminée.
              </p>
            </div>

            <div className={`fade-in${animate ? " visible" : ""}`} style={{ transitionDelay: "0.4s" }}>
              <div className="text-block-label text-uppercase">// HISTORIQUE DU SYSTÈME</div>
              <div className="timeline d-flex flex-column">
                {timeline.map(({ year, title, desc, active }, i) => (
                  <div className="timeline-item d-flex" key={i}>
                    <div className="timeline-line d-flex flex-column align-items-center">
                      <div className={`timeline-dot${active ? " active" : ""}`}></div>
                      {!active && <div className="timeline-connector"></div>}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-year">{year}</div>
                      <div className="timeline-title">{title}</div>
                      <div className="timeline-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`fade-in mt-5${animate ? " visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
              <div className="text-block-label text-uppercase">// MODULES ACTIFS</div>
              <div className="tags-section d-flex flex-column">
                {tags.map(({ category, variant, items }) => (
                  <div key={category}>
                    <div className="tags-category-label text-uppercase">{category}</div>
                    <div className="tags-row d-flex flex-wrap">
                      {items.map(item => (
                        <span className={`tag${variant ? ` ${variant}` : ""}`} key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`fade-in mt-5${animate ? " visible" : ""}`} style={{ transitionDelay: "0.6s" }}>
              <Link to="/portfolio" className="btn-primary d-inline-block text-decoration-none text-uppercase">
                VOIR MES PROJETS
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
