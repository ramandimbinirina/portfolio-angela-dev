'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
  github?: string
}

const projects: Project[] = [

  {
    id: 11,
    title: 'Plateforme Mobile Money',
    description: "Solution de paiement mobile complète permettant des transactions sécurisées, la gestion de portefeuilles numériques et les transferts d'argent instantanés.",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'API REST'],
    image: '/mobile-money.PNG',
    link: 'https://mobile-money-khaki.vercel.app/',
    github: 'https://github.com/ramandimbinirina/mobile-money',
  },

  {
    id: 5,
    title: 'Décoration Maison - Site E-commerce',
    description: "Plateforme e-commerce dédiée à la décoration d'intérieur, offrant une expérience d'achat immersive et un catalogue de produits haut de gamme.",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/deco-home.PNG',
    link: 'https://decor-home-nu.vercel.app/',
    github: 'https://github.com/ramandimbinirina/DecorHome',
  },
  {
    id: 3,
    title: 'Site Web EBAX - Front-End Next.js',
    description: "Conception et implémentation de l'interface utilisateur du site EBAX en Next.js avec une approche responsive et accessible.",
    technologies: ['Next.js', 'React', 'TypeScript', 'CSS'],
    image: '/siteebax.PNG',
    link: 'https://ebax.ca/',
  },
  {
    id: 4,
    title: 'Soumission Projet EBAX - Plateforme Web',
    description: "Développement de l'interface de soumission de projets pour EBAX avec Next.js, formulaires dynamiques et intégration des endpoints API.",
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'API REST'],
    image: '/soummision.PNG',
    link: 'https://soumission.ebax.ca/',
  },
  {
    id: 1,
    title: 'CRM EBAX - Interface Front-End',
    description: "Développement de l'interface front-end du CRM EBAX avec Next.js, en mettant l'accent sur l'ergonomie, la performance et la maintenabilité.",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'API REST'],
    image: '/crm.PNG',
    link: 'https://crm.ebax.ca/login',
  },
  {
    id: 2,
    title: 'Gestion Magasin - Application de Gestion',
    description: "Solution complète de gestion de magasin incluant inventaire, suivi des ventes et interface d'administration intuitive.",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'API REST'],
    image: '/gestion-magasin.PNG',
    link: 'https://gestion-magasin-xi.vercel.app/login',
    github: 'https://github.com/ramandimbinirina/gestion_magasin',
  },
  {
    id: 6,
    title: 'Projet Isalo - Application Web',
    description: "Réalisation du front-end de la plateforme Isalo avec Next.js, création de composants réutilisables et optimisation de l'expérience utilisateur.",
    technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'],
    image: '/isalo.PNG',
    link: 'https://isalo-delta.vercel.app/'
  },
  {
    id: 7,
    title: 'Gestion Bancaire - Plateforme Mobile & Web',
    description: "Application bancaire sécurisée permettant la gestion de comptes, le suivi des transactions et le pilotage financier en temps réel.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'API REST'],
    image: '/gestion-banque.PNG',
    link: 'https://gestion-bancaire-sigma.vercel.app/connexion',
    github: 'https://github.com/ramandimbinirina/GestionBancaire',
  },
  {
    id: 8,
    title: "Paniers d'ici et d'ailleurs",
    description: "Plateforme de vente et de distribution de produits locaux et d'ailleurs, mettant en avant le circuit court et la qualité des produits.",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: '/paniers.PNG',
    link: 'https://paniersdicietdailleurs.fr/',
  },
  {
    id: 12,
    title: 'Budget Family',
    description: "Application de gestion de budget familial intuitive pour le suivi des dépenses, la planification financière et l'analyse des économies du foyer.",
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: '/budget-family.png',
    link: 'https://budget-family-two.vercel.app/',
    github: 'https://github.com/ramandimbinirina/budget-family',
  },
  {
    id: 9,
    title: 'Marvel - Site Web',
    description: "Site web Marvel avec une interface moderne, présentation des personnages et univers Marvel avec une expérience utilisateur immersive.",
    technologies: ['HTML', 'CSS'],
    image: '/marvel.PNG',
    link: 'https://marvel-gamma-five.vercel.app/index.html',
    github: 'https://github.com/ramandimbinirina/SAYNA-HTML-CSS',
  },
  {
    id: 10,
    title: 'Naruto World - Site Web Immersif',
    description: "Une plateforme dédiée aux fans de Naruto, explorant l'univers des shinobis, des techniques secrètes et des villages cachés avec une interface dynamique.",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/naruto.PNG',
    link: 'https://naruto-manga.vercel.app/',
    github: 'https://github.com/ramandimbinirina/NARUTO',
  },



  // {
  //   id: 14,
  //   title: 'Projet Python - Scripts et Automatisation',
  //   description: "Ensemble de scripts et mini-applications Python orientés résolution de problèmes, logique métier et automatisation de tâches.",
  //   technologies: ['Python'],
  //   image: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
  //   link: 'https://github.com/thonny3/ProjetPython',
  //   github: 'https://github.com/thonny3/ProjetPython',
  // },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative bg-background border border-gray-200 dark:border-primary/10 rounded-lg overflow-hidden hover:border-gray-400 dark:hover:border-primary/40 transition-all duration-500 ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
        }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
      }}
    >
      {/* Project Image */}
      <div
        className="h-48 w-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
      >
        {!project.image.startsWith('linear-gradient') && !imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background: project.image.startsWith('linear-gradient')
                ? project.image
                : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground dark:text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/60 dark:text-white/70 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-primary/10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-foreground/70 dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            Voir le projet
          </a>
          {project.github && (
            <a
              href={project.github}
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 dark:text-white/60 hover:text-foreground dark:hover:text-white transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-foreground/60 dark:text-white/70 max-w-2xl">
            Découvrez une sélection de mes récents projets et réalisations.
            Chaque projet démontre mes compétences en développement web moderne.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        {projects.length > 3 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">
                {showAll ? 'Voir moins' : 'Voir plus'}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
