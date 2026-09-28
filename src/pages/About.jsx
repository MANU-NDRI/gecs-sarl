import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { activities, values } from '../data/site.js'

export default function About() {
  return (<>
    <Seo title="Qui sommes-nous ?" description="Découvrez G.E.C.S SARL : notre mission, notre vision, nos valeurs et nos domaines d’intervention." />
    <PageHero title="Qui sommes-nous ?" text="Groupe Emmanuel Construction et Services SARL" />
    <section className="section container split">
      <Reveal><img className="rounded" src="/images/dalle.jpeg" alt="Chantier de G.E.C.S SARL" loading="lazy" /></Reveal>
      <Reveal><h2>Présentation</h2>
        <p>G.E.C.S SARL est une entreprise ivoirienne présente dans le BTP, les télécommunications, la fourniture de bureaux et les travaux divers.</p>
        <p>Notre force : réunir plusieurs métiers au sein d’un même groupe pour répondre à vos besoins avec un seul interlocuteur.</p></Reveal>
    </section>
    <section className="section grey"><div className="container mv">
      <Reveal><h3>Notre mission</h3><p>Réaliser des ouvrages et des prestations de qualité, dans le respect des délais et des engagements pris avec nos clients.</p></Reveal>
      <Reveal><h3>Notre vision</h3><p>Devenir un partenaire de référence pour construire, connecter et équiper : bâtir aujourd’hui, construire demain.</p></Reveal>
    </div></section>
    <section className="section container">
      <SectionTitle title="Nos valeurs" />
      <ul className="chips">{values.map((v) => <li key={v}>{v}</li>)}</ul>
    </section>
    <section className="section grey"><div className="container">
      <SectionTitle title="Nos domaines d’intervention" />
      <div className="advgrid">{activities.map(({ id, icon: Icon, title, short }) => (
        <div key={id} className="adv"><Icon size={34} /><h3>{title}</h3><p>{short}</p></div>))}</div>
    </div></section>
    <CtaBand />
  </>)
}
