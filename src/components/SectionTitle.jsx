export default function SectionTitle({ title, text }) {
  return <div className="st"><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
