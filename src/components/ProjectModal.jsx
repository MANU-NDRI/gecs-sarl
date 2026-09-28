import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
export default function ProjectModal({ p, onClose }) {
  const btn = useRef(null)
  useEffect(() => {
    btn.current?.focus()
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [onClose])
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={p.title} onClick={onClose}>
      <div className="mbox" onClick={(e) => e.stopPropagation()}>
        <button ref={btn} className="mclose" aria-label="Fermer" onClick={onClose}><X /></button>
        <span className="tag static">{p.category}</span><h2>{p.title}</h2><p>{p.description}</p>
        <div className="mgal">{p.gallery.map((g) => <img key={g} src={g} alt={p.title} loading="lazy" />)}</div>
      </div>
    </div>
  )
}
