import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ActivityCard from '../components/ActivityCard.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { company, activities, advantages, stats } from '../data/site.js'

export default function Home() {
  return (<>
    <Seo title="Accueil" description="G.E.C.S SARL : travaux BTP, télécom, fourniture de bureaux et travaux divers à Abobo N’Dotré, Abidjan." />
    <section className="hero">
      <img src="/images/villa.jpeg" alt="Villa construite par G.E.C.S SARL" fetchpriority="high" />
      <div className="container hero-in">
        <p className="kicker">{company.slogan}</p>
        <h1>{company.name}</h1>
        <h2>Groupe Emmanuel Construction et Services</h2>
        <p className="lead">{company.tagline}</p>
        <p className="areas">Travaux BTP • Télécom • Fourniture de bureaux • Travaux divers</p>
        <div className="btns">
          <Link to="/activites" className="btn btn-accent">Découvrir nos activités</Link>
          <Link to="/contacts" className="btn btn-ghost">Nous contacter</Link>
        </div>
      </div>
    </section>

    <section className="section container split">
      <Reveal><img className="rounded" src="/images/immeuble.jpeg" alt="Bâtiment résidentiel réalisé par G.E.C.S SARL" loading="lazy" /></Reveal>
      <Reveal><h2>Qui sommes-nous ?</h2>
      <section className="section video-section">
  <div className="container">
    <SectionTitle
      title="Découvrez GECS SARL"
      text="Découvrez notre entreprise, notre savoir-faire et nos différents domaines d'intervention."
    />

    <Reveal>
      <div className="presentation-video">
        <video
          controls
          playsInline
          preload="metadata"
          poster="/images/villa.jpeg"
          aria-label="Vidéo de présentation de GECS SARL"
        >
          <source src="/videos/gecs-presentation.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture des vidéos.
        </video>
      </div>
    </Reveal>
  </div>
</section>
        <p>G.E.C.S SARL est une entreprise ivoirienne spécialisée dans plusieurs domaines : le BTP, les télécommunications, la fourniture de bureaux et les travaux divers.</p>
        <p>Basés à Abobo N’Dotré, nous accompagnons particuliers, entreprises et organisations, de l’étude à la réalisation.</p>
        <Link to="/qui-sommes-nous" className="btn btn-primary">En savoir plus</Link></Reveal>
    </section>

    <section className="stats"><div className="container sgrid">
      {stats.map((s) => <div key={s.label}><strong><Counter value={s.value} suffix={s.suffix} /></strong><span>{s.label}</span></div>)}
    </div></section>

    <section className="section container">
      <SectionTitle title="Nos différentes activités" />
      <div className="agrid">{activities.map((a) => <ActivityCard key={a.id} a={a} />)}</div>
    </section>

    <section className="section grey"><div className="container">
      <SectionTitle title="Pourquoi nous choisir ?" />
      <div className="advgrid">{advantages.map(({ icon: Icon, title, text }) => (
        <div key={title} className="adv"><Icon size={34} /><h3>{title}</h3><p>{text}</p></div>))}</div>
    </div></section>

    <section className="section container">
      <SectionTitle title="Nos projets" text="Quelques réalisations en images." />
      <ProjectGrid limit={6} />
      <p className="center"><Link to="/projets" className="btn btn-primary">Tous nos projets</Link></p>
    </section>
    <CtaBand />
  </>)
}
