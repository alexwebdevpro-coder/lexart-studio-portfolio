import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import photo from "../assets/image/Photo-About.JPG";
import "../styles/About.css";

const stats = [
  { label: "HTML/CSS", val: 82 },
  { label: "JAVASCRIPT", val: 65 },
  { label: "CRÉATIVITÉ", val: 95 },
  { label: "ADAPTATION", val: 90 },
  { label: "PÉDAGOGIE", val: 90 },
];

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
          <div className="col-12 col-lg-5 d-flex flex-column align-items-center">
            <div className="photo-panel">
              <div className="photo-frame">
                <span className="corner corner-tl"></span>
                <span className="corner corner-tr"></span>
                <span className="corner corner-bl"></span>
                <span className="corner corner-br"></span>
                <img src={photo} alt="Alexis ZIRNHELT" className="photo-img" />
                <div className="photo-overlay"></div>
                <div className="photo-hud">
                  <span className="hud-tag">
                    <span className="status-dot"></span>
                    EN LIGNE
                  </span>
                </div>
              </div>
            </div>

            <div className="stats-panel w-100">
              {stats.map(({ label, val }) => (
                <div className="stat-row" key={label}>
                  <div className="stat-label">{label}</div>
                  <div className="stat-bar-bg">
                    <div
                      className="stat-bar-fill"
                      style={{ width: animate ? `${val}%` : "0%" }}
                    ></div>
                  </div>
                  <div className="stat-val">{val}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="sys-bar mb-4">
              <span>
                STATUT: <strong>RECONVERSION ACTIVE</strong>
              </span>
              <span>
                FORMATION: <strong>EN COURS</strong>
              </span>
              <span>
                OBJECTIF: <strong>FULLSTACK</strong>
              </span>
            </div>
            <div
              className={`text-block fade-in mb-5${animate ? " visible" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="text-block-label">// MISSION PRINCIPALE</div>
              <p>
                Actuellement en formation au{" "}
                <strong>Centre de Formation Européen</strong>, je construis pas
                à pas ma nouvelle identité de{" "}
                <strong>développeur web fullstack</strong>. Chaque ligne de code
                est un module de plus dans ma progression — méthodique,
                déterminée.
              </p>
            </div>

            <div
              className={`fade-in${animate ? " visible" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="text-block-label">// HISTORIQUE DU SYSTÈME</div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-line">
                    <div className="timeline-dot"></div>
                    <div className="timeline-connector"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">AVANT 2024</div>
                    <div className="timeline-title">Enseignement du Cirque</div>
                    <div className="timeline-desc">
                      Pédagogie • Créativité • Rigueur • Gestion du risque — des
                      compétences transversales qui façonnent encore ma vision
                      du code.
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-line">
                    <div className="timeline-dot active"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">2025 → NOW</div>
                    <div className="timeline-title">
                      Développeur Web en Formation
                    </div>
                    <div className="timeline-desc">
                      Création d'applications modernes et fonctionnelles.
                      Relever de nouveaux défis numériques chaque jour.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`fade-in mt-5${animate ? " visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
              <div className="text-block-label">// MODULES ACTIFS</div>
              <div className="tags-section">

                <div>
                  <div className="tags-category-label">Frontend</div>
                  <div className="tags-row">
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">React</span>
                    <span className="tag">Vue.js</span>
                    <span className="tag">Angular</span>
                    <span className="tag">Bootstrap</span>
                  </div>
                </div>

                <div>
                  <div className="tags-category-label">Backend</div>
                  <div className="tags-row">
                    <span className="tag cyan">Node.js</span>
                    <span className="tag cyan">PHP</span>
                  </div>
                </div>

                <div>
                  <div className="tags-category-label">Base de données</div>
                  <div className="tags-row">
                    <span className="tag cyan">MySQL</span>
                    <span className="tag cyan">MongoDB</span>
                  </div>
                </div>

                <div>
                  <div className="tags-category-label">Outils</div>
                  <div className="tags-row">
                    <span className="tag white">Git</span>
                    <span className="tag white">GitHub</span>
                    <span className="tag white">VS Code</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
