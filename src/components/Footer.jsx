import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { company, nav, activities } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container fgrid">
        <div><h3>{company.name}</h3><p>{company.fullName}</p>
          <p className="muted">Travaux BTP, télécom, fourniture de bureaux et travaux divers : votre partenaire de confiance pour tous vos projets.</p>
          {company.socials.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}</div>
        <div><h3>Navigation</h3>{nav.map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}</div>
        <div><h3>Nos activités</h3>{activities.map((a) => <Link key={a.id} to="/activites">{a.title}</Link>)}</div>
        <div><h3>Contacts</h3>
          <a href={`tel:${company.phone}`}><Phone size={16} /> {company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}><Mail size={16} /> {company.email}</a>
          <span><MapPin size={16} /> {company.address}</span></div>
      </div>
      <p className="copy">© 2026 G.E.C.S SARL — Tous droits réservés.</p>
    </footer>
  )
}
