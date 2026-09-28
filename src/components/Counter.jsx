import { useEffect, useRef, useState } from 'react'
export default function Counter({ value, suffix }) {
  const ref = useRef(null); const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect(); const t0 = performance.now()
      const step = (t) => { const p = Math.min((t - t0) / 1200, 1); setN(Math.round(value * p)); p < 1 && requestAnimationFrame(step) }
      requestAnimationFrame(step)
    })
    io.observe(ref.current); return () => io.disconnect()
  }, [value])
  return <span ref={ref}>{n}{suffix}</span>
}
