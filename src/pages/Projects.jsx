import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import CtaBand from '../components/CtaBand.jsx'
export default function Projects() {
  return (<>
    <Seo title="Nos projets" description="Galerie des projets G.E.C.S SARL : BTP, télécom, fourniture et travaux divers." />
    <PageHero title="Nos projets" text="Filtrez par catégorie et ouvrez une fiche pour voir la galerie." />
    <section className="section container"><ProjectGrid /></section>
    <CtaBand />
  </>)
}
