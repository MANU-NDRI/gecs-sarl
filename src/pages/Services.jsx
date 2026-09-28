import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { services } from '../data/site.js'
export default function Services() {
  return (<>
    <Seo title="Nos services" description="Construction, gros œuvre, finition, rénovation, suivi de chantier, télécom et fourniture de bureaux." />
    <PageHero title="Nos services" text="Ce que G.E.C.S SARL peut faire pour vous." />
    <section className="section container"><div className="svgrid">
      {services.map((s) => <article key={s.title} className="svc"><h3>{s.title}</h3><p>{s.text}</p></article>)}
    </div></section>
    <CtaBand />
  </>)
}
