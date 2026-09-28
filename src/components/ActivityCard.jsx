import { Link } from 'react-router-dom'
export default function ActivityCard({ a }) {
  const Icon = a.icon
  return (
    <article className="acard">
      <span className="ico"><Icon size={30} /></span>
      <h3>{a.title}</h3><p>{a.short}</p>
      <Link to="/activites" className="more">En savoir plus</Link>
    </article>
  )
}
