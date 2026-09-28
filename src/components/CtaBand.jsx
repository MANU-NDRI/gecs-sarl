import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { company } from '../data/site.js'
export default function CtaBand() {
  return (
    <section className="cta"><div className="container">
      <h2>Vous avez un projet ? Parlons-en.</h2>
      <p>Notre équipe est disponible pour échanger avec vous sur vos besoins.</p>
      <div className="btns">
        <Link to="/contacts" className="btn btn-accent">Nous contacter</Link>
        <a className="btn btn-ghost" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
      </div></div></section>
  )
}
