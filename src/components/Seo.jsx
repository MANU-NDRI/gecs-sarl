import { useEffect } from 'react'
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = `${title} | G.E.C.S SARL`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
  return null
}
