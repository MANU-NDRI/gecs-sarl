import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { company, nav } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/" className="brand" aria-label="G.E.C.S SARL – Accueil" onClick={() => setOpen(false)}>
          <img src={company.logo} alt="Logo G.E.C.S SARL" width="120" height="56" />
        </Link>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Navigation principale">
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
          <Link to="/contacts" className="btn btn-accent nav-cta" onClick={() => setOpen(false)}>Nous contacter</Link>
        </nav>
        <button className="burger" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
