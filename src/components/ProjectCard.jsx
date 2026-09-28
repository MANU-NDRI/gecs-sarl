import { ImageOff } from 'lucide-react'
export default function ProjectCard({ p, onOpen }) {
  return (
    <article className="pcard">
      <div className="pimg">
        {p.image ? <img src={p.image} alt={p.title} loading="lazy" /> : <div className="ph"><ImageOff size={36} /></div>}
        <span className="tag">{p.category}</span>
      </div>
      <div className="pbody"><h3>{p.title}</h3><p>{p.description}</p>
        <button className="more" onClick={() => onOpen(p)}>Voir le projet</button></div>
    </article>
  )
}
