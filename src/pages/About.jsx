import Title from '../components/ui/Title'
import photo from '../assets/image/Photo-About.JPG'
import '../styles/About.css'

function About() {
  return (
    <div>
      <Title text="À PROPOS" />

      <section className="about container pb-5">
        <div className="row align-items-center g-5">

          <div className="col-12 col-lg-5 d-flex justify-content-center">
            <img src={photo} alt="Alexis ZIRNHELT" className="about-photo" />
          </div>

          <div className="col-12 col-lg-7">
            <h2 className="about-title mb-4">Mon parcours vers le développement web</h2>
            <p className="about-text">
              Actuellement en reconversion professionnelle dans le développement web, je suis une
              formation au Centre de Formation Européen afin de devenir développeur web fullstack.
              À travers cette formation et mes projets personnels, je développe mes compétences en
              création d'applications web modernes et fonctionnelles.
            </p>
            <p className="about-text">
              Avant cette transition, j'ai travaillé dans l'enseignement du cirque, un domaine qui
              m'a permis de développer des qualités essentielles comme la pédagogie, la créativité,
              la rigueur et la capacité d'adaptation.
            </p>
            <p className="about-text">
              Aujourd'hui, je mets ces compétences au service de ma nouvelle carrière dans le
              développement web, avec l'envie de continuer à apprendre, relever de nouveaux défis
              et participer à la création de projets numériques.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About
