import { useState } from 'react'
import { categories, projects } from '../data/site.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function ProjectGrid({ limit }) {
  const [cat, setCat] = useState('Tous'); const [open, setOpen] = useState(null)
  const list = projects.filter((p) => cat === 'Tous' || p.category === cat).slice(0, limit)
  return (<>
    <div className="filters" role="group" aria-label="Filtrer par catégorie">
      {categories.map((c) => <button key={c} className={c === cat ? 'on' : ''} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}
    </div>
    <div className="pgrid">{list.map((p) => <ProjectCard key={p.id} p={p} onOpen={setOpen} />)}</div>
    {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
  </>)
}
