export default function ProjectCard({ p, onOpen }) {
  return (
    <article className="pcard">
      <div className="pimg">
        <img src={p.image} alt={p.alt} loading="lazy" />
        <span className="tag">{p.category}</span>
      </div>
      <div className="pbody"><h3>{p.title}</h3><p>{p.description}</p>
        <button className="more" aria-label={`Voir le projet : ${p.title}`} onClick={() => onOpen(p)}>Voir le projet <span aria-hidden="true">→</span></button></div>
    </article>
  )
}
