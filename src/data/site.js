// ===== TOUT LE CONTENU DU SITE SE MODIFIE ICI =====
import { HardHat, Radio, Briefcase, Wrench, ShieldCheck, Award, Handshake, Target } from 'lucide-react'

export const company = {
  name: 'G.E.C.S SARL',
  fullName: 'Groupe Emmanuel Construction et Services SARL',
  slogan: 'Bâtir aujourd’hui, construire demain',
  tagline: 'Des solutions professionnelles pour construire, connecter et accompagner vos projets.',
  phone: '0778805686', phoneDisplay: '07 78 80 56 86',
  whatsapp: '2250778805686', // indicatif + numéro, sans « + »
  email: 'groupeemmanuelconstruction@gmail.com',
  address: 'Abobo N’Dotré, Abidjan', // adresse précise à ajouter ici
  mapUrl: '', // lien Google Maps « intégrer » (vide tant que non fourni)
  socials: [], // ex: [{ label: 'Facebook', url: 'https://…' }]
  logo: '/images/logo.jpeg',
}

export const nav = [
  ['/', 'Accueil'], ['/qui-sommes-nous', 'Qui sommes-nous ?'], ['/activites', 'Nos activités'],
  ['/projets', 'Nos projets'], ['/services', 'Nos services'], ['/contacts', 'Contacts'],
]

export const activities = [
  { id: 'btp', icon: HardHat, title: 'Travaux BTP', image: '/images/immeuble.jpeg',
    short: 'Construction, rénovation et réalisation d’ouvrages adaptés aux besoins de nos clients.',
    long: 'Du terrassement à la finition, nous prenons en charge la construction de bâtiments, villas et immeubles, ainsi que leur rénovation.',
    items: ['Construction de bâtiments, maisons et immeubles', 'Gros œuvre : terrassement, maçonnerie, béton armé', 'Finition : carrelage, peinture, plâtrerie, électricité', 'Rénovation et réhabilitation', 'Gestion et suivi de chantier'] },
  { id: 'telecom', icon: Radio, title: 'Télécom', image: '/images/fouille.jpeg',
    short: 'Solutions et prestations liées aux infrastructures et installations de télécommunication.',
    long: 'Nous intervenons sur les infrastructures et installations de télécommunication, de la préparation du site à la mise en place.',
    items: ['Travaux de génie civil pour infrastructures télécom', 'Installations et raccordements', 'Accompagnement technique'] },
  { id: 'fourniture', icon: Briefcase, title: 'Fourniture de bureaux', image: '/images/dalle.jpeg',
    short: 'Fourniture d’équipements, mobiliers et matériels destinés aux entreprises et organisations.',
    long: 'Nous équipons les entreprises et organisations en mobilier et matériel de bureau, selon leurs besoins.',
    items: ['Mobilier de bureau', 'Matériel et équipements', 'Consommables et fournitures'] },
  { id: 'divers', icon: Wrench, title: 'Travaux divers', image: '/images/peinture.jpeg',
    short: 'Des prestations diversifiées adaptées aux besoins spécifiques de nos clients.',
    long: 'Aménagement, entretien et interventions ponctuelles : une équipe polyvalente pour vos besoins spécifiques.',
    items: ['Aménagement', 'Entretien et petits travaux', 'Interventions sur mesure'] },
]

export const advantages = [
  { icon: ShieldCheck, title: 'Professionnalisme', text: 'Une équipe organisée, à l’écoute de chaque projet.' },
  { icon: Award, title: 'Qualité', text: 'Des travaux durables, des matériaux de premier choix.' },
  { icon: Handshake, title: 'Respect des engagements', text: 'Des délais et des accords tenus.' },
  { icon: Target, title: 'Solutions adaptées', text: 'Des réponses pensées pour vos besoins.' },
]

export const stats = [
  { value: 4, suffix: '+', label: 'Domaines d’activité' },
  { value: 100, suffix: '%', label: 'Engagement' },
  { value: 24, suffix: '/7', label: 'À votre écoute' },
]

export const values = ['Professionnalisme', 'Qualité', 'Respect des délais', 'Sécurité', 'Satisfaction client']

export const categories = ['Tous', 'BTP', 'Télécom', 'Fourniture', 'Travaux divers']

// Projets présentés dans la galerie, avec leurs photos locales.
export const projects = [
  { id: 1, title: 'Villa moderne', category: 'BTP', image: '/images/villa.jpeg', gallery: ['/images/villa.jpeg'], alt: 'Villa à étage avec balcon vitré.', description: 'Construction et finition d’une villa à étage avec balcon vitré.' },
  { id: 2, title: 'Bâtiment résidentiel R+2', category: 'BTP', image: '/images/immeuble.jpeg', gallery: ['/images/immeuble.jpeg'], alt: 'Bâtiment résidentiel de plusieurs niveaux.', description: 'Immeuble de logements en cours de finition.' },
  { id: 3, title: 'Dalle en hourdis', category: 'BTP', image: '/images/dalle.jpeg', gallery: ['/images/dalle.jpeg'], alt: 'Plancher hourdis avec ferraillage.', description: 'Réalisation d’un plancher hourdis avec ferraillage.' },
  { id: 4, title: 'Fondations et poteaux', category: 'BTP', image: '/images/fondation.jpeg', gallery: ['/images/fondation.jpeg', '/images/ferraillage.jpeg', '/images/fouille.jpeg'], alt: 'Travaux de fondation et mise en place de poteaux.', description: 'Fouilles, ferraillage et mise en place des poteaux.' },
  { id: 5, title: 'Peinture et finitions', category: 'Travaux divers', image: '/images/peinture.jpeg', gallery: ['/images/peinture.jpeg'], alt: 'Travaux d’enduit et de peinture de façade.', description: 'Enduit et peinture de façade.' },
  { id: 6, title: 'Construction de piscine', category: 'Travaux divers', image: '/images/bassin.jpeg', gallery: ['/images/bassin.jpeg'], alt: 'Bassin en cours de construction.', description: 'Travaux de terrassement, ferraillage et préparation d’un bassin de piscine.' },
  { id: 7, title: 'Fourniture et livraison de panneaux', category: 'Fourniture', image: '/images/fourniture-panneaux.jpeg', gallery: ['/images/fourniture-panneaux.jpeg'], alt: 'Déchargement de panneaux de bois depuis un véhicule utilitaire.', description: 'Approvisionnement et livraison de panneaux pour les besoins d’un chantier.' },
  { id: 8, title: 'Travaux d’installation télécom', category: 'Télécom', image: '/images/travaux-telecom.jpeg', gallery: ['/images/travaux-telecom.jpeg'], alt: 'Équipe équipée pour des travaux sur une infrastructure télécom.', description: 'Réalisation et installation d’infrastructures de télécommunication adaptées aux besoins du client.' },
]

// Pour ajouter un service : ajouter une ligne ici
export const services = [
  { title: 'Construction', text: 'Bâtiments, maisons, immeubles.' },
  { title: 'Travaux de gros œuvre', text: 'Terrassement, maçonnerie, béton armé.' },
  { title: 'Travaux de finition', text: 'Carrelage, peinture, plâtrerie, électricité.' },
  { title: 'Rénovation', text: 'Réhabilitation et transformation.' },
  { title: 'Gestion et suivi de chantier', text: 'Étude, planification, réalisation.' },
  { title: 'Installations télécom', text: 'Infrastructures et raccordements.' },
  { title: 'Fourniture de bureaux', text: 'Mobilier, matériel, équipements.' },
  { title: 'Travaux divers', text: 'Prestations sur mesure.' },
]
