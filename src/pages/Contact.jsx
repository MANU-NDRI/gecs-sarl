import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { company } from '../data/site.js'

const fields = [['nom', 'Nom', 'text'], ['prenom', 'Prénom', 'text'], ['email', 'Email', 'email'], ['telephone', 'Téléphone', 'tel'], ['objet', 'Objet', 'text']]

export default function Contact() {
  const [sent, setSent] = useState(false)
  // Le message s'ouvre dans l'application mail du visiteur (aucun serveur nécessaire).
  const submit = (e) => {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.target))
    const body = `Nom : ${d.nom} ${d.prenom}\nTéléphone : ${d.telephone}\nEmail : ${d.email}\n\n${d.message}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(d.objet)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (<>
    <Seo title="Contacts" description="Contactez G.E.C.S SARL au 07 78 80 56 86 ou par email pour discuter de votre projet." />
    <PageHero title="Contacts" text="Parlez-nous de votre projet." />
    <section className="section container cgrid">
      <div className="cinfo">
        <h2>{company.name}</h2><p>{company.fullName}</p>
        <a href={`tel:${company.phone}`}><Phone /> {company.phoneDisplay}</a>
        <a href={`mailto:${company.email}`}><Mail /> {company.email}</a>
        <span><MapPin /> {company.address}</span>
        <a className="btn btn-accent" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
        {company.mapUrl && <iframe title="Localisation" src={company.mapUrl} loading="lazy" />}
      </div>
      <form onSubmit={submit} className="form">
        {fields.map(([n, l, t]) => (<div key={n}><label htmlFor={n}>{l}</label><input id={n} name={n} type={t} required={n !== 'telephone'} /></div>))}
        <div className="full"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="6" required /></div>
        <button className="btn btn-accent full" type="submit">Envoyer le message</button>
        {sent && <p role="status" className="full ok">Votre application mail s’ouvre pour envoyer le message.</p>}
      </form>
    </section>
  </>)
}
