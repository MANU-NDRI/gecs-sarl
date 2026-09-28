export default function PageHero({ title, text }) {
  return <section className="phero"><div className="container"><h1>{title}</h1>{text && <p>{text}</p>}</div></section>
}
