import Title from '../components/ui/Title'
import CardServices from '../components/ui/CardServices'
import { services } from '../data/services'
import '../styles/Services.css'

function Services() {
  return (
    <div>
      <Title text="SERVICES" subtitle="Des solutions web modernes pour donner vie à vos projets numériques." />

      <section className="services container pb-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.map(({ icon, title, desc }) => (
            <div className="col" key={title}>
              <CardServices icon={icon} title={title} desc={desc} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
