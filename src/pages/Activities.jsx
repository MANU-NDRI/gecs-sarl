import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { activities } from '../data/site.js'

export default function Activities() {
  return (<>
    <Seo title="Nos activités" description="Travaux BTP, télécom, fourniture de bureaux et travaux divers : les 4 domaines d’activité de G.E.C.S SARL." />
    <PageHero title="Nos activités" text="Quatre domaines pour répondre à tous vos projets." />
    {activities.map((a, i) => { const Icon = a.icon; return (
      <section key={a.id} id={a.id} className={`section ${i % 2 ? 'grey' : ''}`}><div className={`container split ${i % 2 ? 'rev' : ''}`}>
        <Reveal><img className="rounded" src={a.image} alt={a.title} loading="lazy" /></Reveal>
        <Reveal><span className="ico"><Icon size={30} /></span><h2>{a.title}</h2><p>{a.long}</p>
          <ul className="checks">{a.items.map((t) => <li key={t}><Check size={18} /> {t}</li>)}</ul>
          <Link to="/contacts" className="btn btn-primary">Nous contacter</Link></Reveal>
      </div></section>) })}
    <CtaBand />
  </>)
}
