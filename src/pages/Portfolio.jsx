import Title from '../components/ui/Title'
import CardPortfolio from '../components/ui/CardPortfolio'
import { projects } from '../data/portfolio'

function Portfolio() {
  return (
    <div>
      <Title text="PORTFOLIO" subtitle="Une sélection de projets réalisés durant ma formation." />

      <section className="container pb-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map(({ label, img, title, desc, tags, link }) => (
            <div className="col" key={title}>
              <CardPortfolio label={label} img={img} title={title} desc={desc} tags={tags} link={link} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Portfolio
